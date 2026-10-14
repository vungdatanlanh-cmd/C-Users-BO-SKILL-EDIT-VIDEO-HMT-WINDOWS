/* Lõi tính lịch âm + an sao Tử Vi (bản cơ bản). Chạy trong trình duyệt và Node. */
(function (root) {
  'use strict';
  var CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
  var CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
  var CUNG = ['Mệnh', 'Phụ Mẫu', 'Phúc Đức', 'Điền Trạch', 'Quan Lộc', 'Nô Bộc', 'Thiên Di', 'Tật Ách', 'Tài Bạch', 'Tử Tức', 'Phu Thê', 'Huynh Đệ'];
  var PI = Math.PI;

  function mod(a, n) { return ((a % n) + n) % n; }

  /* ---- Lịch âm (thuật toán Hồ Ngọc Đức, múi giờ +7) ---- */
  function jdFromDate(dd, mm, yy) {
    var a = Math.floor((14 - mm) / 12), y = yy + 4800 - a, m = mm + 12 * a - 3;
    var jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    if (jd < 2299161) jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083;
    return jd;
  }
  function jdToDate(jd) {
    var a, b, c;
    if (jd > 2299160) { a = jd + 32044; b = Math.floor((4 * a + 3) / 146097); c = a - Math.floor(b * 146097 / 4); }
    else { b = 0; c = jd + 32082; }
    var d = Math.floor((4 * c + 3) / 1461), e = c - Math.floor(1461 * d / 4), m = Math.floor((5 * e + 2) / 153);
    return [e - Math.floor((153 * m + 2) / 5) + 1, m + 3 - 12 * Math.floor(m / 10), b * 100 + d - 4800 + Math.floor(m / 10)];
  }
  function newMoon(k) {
    var T = k / 1236.85, T2 = T * T, T3 = T2 * T, dr = PI / 180;
    var Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
    Jd1 += 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);
    var M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
    var Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
    var F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
    var C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M) - 0.4068 * Math.sin(Mpr * dr) +
      0.0161 * Math.sin(dr * 2 * Mpr) - 0.0004 * Math.sin(dr * 3 * Mpr) + 0.0104 * Math.sin(dr * 2 * F) -
      0.0051 * Math.sin(dr * (M + Mpr)) - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M)) -
      0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr)) + 0.0010 * Math.sin(dr * (2 * F - Mpr)) +
      0.0005 * Math.sin(dr * (2 * Mpr + M));
    var dt = T < -11 ? 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3 : -0.000278 + 0.000265 * T + 0.000262 * T2;
    return Jd1 + C1 - dt;
  }
  function sunLongitude(jdn) {
    var T = (jdn - 2451545.0) / 36525, T2 = T * T, dr = PI / 180;
    var M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
    var L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
    var DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M) + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
    var L = (L0 + DL) * dr;
    return L - PI * 2 * Math.floor(L / (PI * 2));
  }
  function sunLong(day, tz) { return Math.floor(sunLongitude(day - 0.5 - tz / 24) / PI * 6); }
  function newMoonDay(k, tz) { return Math.floor(newMoon(k) + 0.5 + tz / 24); }
  function lunarMonth11(yy, tz) {
    var off = jdFromDate(31, 12, yy) - 2415021;
    var k = Math.floor(off / 29.530588853), nm = newMoonDay(k, tz);
    if (sunLong(nm, tz) >= 9) nm = newMoonDay(k - 1, tz);
    return nm;
  }
  function leapMonthOffset(a11, tz) {
    var k = Math.floor((a11 - 2415021.076998695) / 29.530588853 + 0.5), last = 0, i = 1;
    var arc = sunLong(newMoonDay(k + i, tz), tz);
    do { last = arc; i++; arc = sunLong(newMoonDay(k + i, tz), tz); } while (arc !== last && i < 14);
    return i - 1;
  }
  function solar2lunar(dd, mm, yy, tz) {
    tz = tz === undefined ? 7 : tz;
    var dayNumber = jdFromDate(dd, mm, yy);
    var k = Math.floor((dayNumber - 2415021.076998695) / 29.530588853);
    var monthStart = newMoonDay(k + 1, tz);
    if (monthStart > dayNumber) monthStart = newMoonDay(k, tz);
    var a11 = lunarMonth11(yy, tz), b11 = a11, lunarYear;
    if (a11 >= monthStart) { lunarYear = yy; a11 = lunarMonth11(yy - 1, tz); }
    else { lunarYear = yy + 1; b11 = lunarMonth11(yy + 1, tz); }
    var lunarDay = dayNumber - monthStart + 1;
    var diff = Math.floor((monthStart - a11) / 29), leap = 0, lunarMonth = diff + 11;
    if (b11 - a11 > 365) {
      var lm = leapMonthOffset(a11, tz);
      if (diff >= lm) { lunarMonth = diff + 10; if (diff === lm) leap = 1; }
    }
    if (lunarMonth > 12) lunarMonth -= 12;
    if (lunarMonth >= 11 && diff < 4) lunarYear -= 1;
    return [lunarDay, lunarMonth, lunarYear, leap];
  }
  function lunar2solar(ld, lm, ly, leap, tz) {
    tz = tz === undefined ? 7 : tz;
    var a11, b11;
    if (lm < 11) { a11 = lunarMonth11(ly - 1, tz); b11 = lunarMonth11(ly, tz); }
    else { a11 = lunarMonth11(ly, tz); b11 = lunarMonth11(ly + 1, tz); }
    var k = Math.floor(0.5 + (a11 - 2415021.076998695) / 29.530588853), off = lm - 11;
    if (off < 0) off += 12;
    if (b11 - a11 > 365) {
      var leapOff = leapMonthOffset(a11, tz), leapMonth = leapOff - 2;
      if (leapMonth < 0) leapMonth += 12;
      if (leap !== 0 && lm !== leapMonth) return [0, 0, 0];
      if (leap !== 0 || off >= leapOff) off += 1;
    }
    return jdToDate(newMoonDay(k + off, tz) + ld - 1);
  }

  /* ---- An sao ---- */
  var CHINH_TINH_FLAGS = {};
  ['Tử Vi', 'Thiên Cơ', 'Thái Dương', 'Vũ Khúc', 'Thiên Đồng', 'Liêm Trinh', 'Thiên Phủ', 'Thái Âm', 'Tham Lang',
    'Cự Môn', 'Thiên Tướng', 'Thiên Lương', 'Thất Sát', 'Phá Quân'].forEach(function (n) { CHINH_TINH_FLAGS[n] = 1; });

  var TU_HOA = [ // Lộc, Quyền, Khoa, Kỵ theo can năm
    ['Liêm Trinh', 'Phá Quân', 'Vũ Khúc', 'Thái Dương'],
    ['Thiên Cơ', 'Thiên Lương', 'Tử Vi', 'Thái Âm'],
    ['Thiên Đồng', 'Thiên Cơ', 'Văn Xương', 'Liêm Trinh'],
    ['Thái Âm', 'Thiên Đồng', 'Thiên Cơ', 'Cự Môn'],
    ['Tham Lang', 'Thái Âm', 'Hữu Bật', 'Thiên Cơ'],
    ['Vũ Khúc', 'Tham Lang', 'Thiên Lương', 'Văn Khúc'],
    ['Thái Dương', 'Vũ Khúc', 'Thái Âm', 'Thiên Đồng'],
    ['Cự Môn', 'Thái Dương', 'Văn Khúc', 'Văn Xương'],
    ['Thiên Lương', 'Tử Vi', 'Tả Phù', 'Vũ Khúc'],
    ['Phá Quân', 'Cự Môn', 'Thái Âm', 'Tham Lang']
  ];
  var HOA_NAME = ['Lộc', 'Quyền', 'Khoa', 'Kỵ'];
  var LOC_TON = [2, 3, 5, 6, 5, 6, 8, 9, 11, 0];
  var KHOI_VIET = [[1, 7], [0, 8], [11, 9], [11, 9], [1, 7], [0, 8], [1, 7], [6, 2], [3, 5], [3, 5]];

  function cucFor(menhCan, menhChi) {
    var c = Math.floor(menhCan / 2) + 1;
    var g = [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2][menhChi]; // theo nhóm Tý-Sửu-Ngọ-Mùi / Dần-Mão-Thân-Dậu / Thìn-Tị-Tuất-Hợi
    g = [0, 0, 1, 1, 2, 2, 0, 0, 1, 1, 2, 2][menhChi];
    var s = c + g;
    if (s > 5) s -= 5;
    return { 1: ['Kim', 4], 2: ['Thủy', 2], 3: ['Hỏa', 6], 4: ['Thổ', 5], 5: ['Mộc', 3] }[s];
  }

  function tuViPos(day, cuc) {
    var x = 0;
    while ((day + x) % cuc !== 0) x++;
    var q = (day + x) / cuc, pos = 2 + q - 1;
    return mod(x % 2 === 1 ? pos - x : pos + x, 12);
  }

  function lapLaSo(o) {
    var lunar, solar;
    if (o.isLunar) {
      lunar = [o.day, o.month, o.year, o.leap ? 1 : 0];
      solar = lunar2solar(o.day, o.month, o.year, lunar[3]);
    } else {
      solar = [o.day, o.month, o.year];
      lunar = solar2lunar(o.day, o.month, o.year);
    }
    var ld = lunar[0], lm = lunar[1], ly = lunar[2];
    var hourIdx = Math.floor(((o.hour + 1) % 24) / 2);
    var yCan = mod(ly + 6, 10), yChi = mod(ly + 8, 12);
    var male = o.gender !== 'nu';
    var yang = yCan % 2 === 0;

    var menh = mod(2 + (lm - 1) - hourIdx, 12);
    var than = mod(2 + (lm - 1) + hourIdx, 12);
    var danCan = (mod(yCan, 5) * 2 + 2) % 10;
    var canOf = function (chi) { return mod(danCan + chi - 2, 10); };
    var cuc = cucFor(canOf(menh), menh);

    var palaces = [];
    for (var c = 0; c < 12; c++) palaces.push({ chi: c, can: canOf(c), cung: '', stars: [], than: c === than, daiHan: null });
    for (var i = 0; i < 12; i++) palaces[mod(menh + i, 12)].cung = CUNG[i];

    var put = function (chi, name, type) { palaces[mod(chi, 12)].stars.push({ n: name, t: type, hoa: '' }); };

    var tv = tuViPos(ld, cuc[1]);
    put(tv, 'Tử Vi', 'chinh'); put(tv - 1, 'Thiên Cơ', 'chinh'); put(tv - 3, 'Thái Dương', 'chinh');
    put(tv - 4, 'Vũ Khúc', 'chinh'); put(tv - 5, 'Thiên Đồng', 'chinh'); put(tv - 8, 'Liêm Trinh', 'chinh');
    var tp = mod(4 - tv, 12);
    ['Thiên Phủ', 'Thái Âm', 'Tham Lang', 'Cự Môn', 'Thiên Tướng', 'Thiên Lương', 'Thất Sát'].forEach(function (n, k) { put(tp + k, n, 'chinh'); });
    put(tp + 10, 'Phá Quân', 'chinh');

    put(10 - hourIdx, 'Văn Xương', 'phu'); put(4 + hourIdx, 'Văn Khúc', 'phu');
    put(4 + lm - 1, 'Tả Phù', 'phu'); put(10 - (lm - 1), 'Hữu Bật', 'phu');
    var lt = LOC_TON[yCan];
    put(lt, 'Lộc Tồn', 'phu'); put(lt + 1, 'Kình Dương', 'sat'); put(lt - 1, 'Đà La', 'sat');
    put(KHOI_VIET[yCan][0], 'Thiên Khôi', 'phu'); put(KHOI_VIET[yCan][1], 'Thiên Việt', 'phu');
    put(11 + hourIdx, 'Địa Kiếp', 'sat'); put(11 - hourIdx, 'Địa Không', 'sat');

    TU_HOA[yCan].forEach(function (name, k) {
      palaces.forEach(function (p) { p.stars.forEach(function (s) { if (s.n === name) s.hoa = HOA_NAME[k]; }); });
    });

    var dir = (yang === male) ? 1 : -1;
    for (var j = 0; j < 12; j++) {
      var from = cuc[1] + 10 * j;
      palaces[mod(menh + dir * j, 12)].daiHan = [from, from + 9];
    }

    var out = {
      name: o.name || '', gender: male ? 'Nam' : 'Nữ', solar: solar, lunar: lunar, hourIdx: hourIdx,
      yearCanChi: CAN[yCan] + ' ' + CHI[yChi], menh: menh, than: than, cuc: cuc,
      amDuong: (yang ? 'Dương' : 'Âm') + ' ' + (male ? 'Nam' : 'Nữ'), palaces: palaces
    };
    if (o.viewYear) {
      out.view = { year: o.viewYear, age: o.viewYear - ly + 1, canChi: CAN[mod(o.viewYear + 6, 10)] + ' ' + CHI[mod(o.viewYear + 8, 12)] };
    }
    return out;
  }

  var api = { CAN: CAN, CHI: CHI, CUNG: CUNG, solar2lunar: solar2lunar, lunar2solar: lunar2solar, lapLaSo: lapLaSo, tuViPos: tuViPos };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.TuViCore = api;
})(typeof window !== 'undefined' ? window : this);
