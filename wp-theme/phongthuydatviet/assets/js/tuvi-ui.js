/* Giao diện form + vẽ lá số. Cần tuvi-core.js nạp trước. */
(function () {
  'use strict';
  var T = window.TuViCore;
  var form = document.getElementById('tv-form');
  if (!T || !form) return;
  var out = document.getElementById('tv-result');

  function fillSelect(sel, from, to, label) {
    for (var i = from; i <= to; i++) {
      var o = document.createElement('option');
      o.value = i; o.textContent = label ? label + ' ' + i : i;
      sel.appendChild(o);
    }
  }
  fillSelect(form.day, 1, 31);
  fillSelect(form.month, 1, 12, 'Tháng');
  fillSelect(form.hour, 0, 23);
  Array.prototype.forEach.call(form.hour.options, function (o) { o.textContent = o.value + ' Giờ'; });
  fillSelect(form.minute, 0, 59);
  Array.prototype.forEach.call(form.minute.options, function (o) { o.textContent = o.value + ' Phút'; });
  var now = new Date().getFullYear();
  for (var y = now + 5; y >= now - 3; y--) {
    var o = document.createElement('option'); o.value = y; o.textContent = y; form.viewYear.appendChild(o);
  }
  form.viewYear.value = now;
  form.year.value = 1990; form.hour.value = 12; form.minute.value = 30;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var GRID = [[5, 6, 7, 8], [4, null, null, 9], [3, null, null, 10], [2, 1, 0, 11]];

  function cell(p, r) {
    var h = '<div class="tv-cell' + (p.chi === r.menh ? ' is-menh' : '') + '">';
    h += '<div class="tv-cell-top"><span class="tv-cc">' + T.CAN[p.can] + ' ' + T.CHI[p.chi] + '</span>';
    if (p.daiHan) h += '<span class="tv-dh">' + p.daiHan[0] + '–' + p.daiHan[1] + '</span>';
    h += '</div><div class="tv-stars">';
    p.stars.forEach(function (s) {
      h += '<div class="tv-s tv-' + s.t + '">' + esc(s.n) + (s.hoa ? ' <i class="tv-hoa">' + s.hoa + '</i>' : '') + '</div>';
    });
    h += '</div><div class="tv-cung">' + esc(p.cung) + (p.than ? ' <b>Thân</b>' : '') + '</div></div>';
    return h;
  }

  function render(r) {
    var ld = r.lunar, sd = r.solar;
    var html = '<div class="tv-chart">';
    GRID.forEach(function (row, ri) {
      row.forEach(function (chi, ci) {
        if (chi !== null) { html += cell(r.palaces[chi], r); return; }
        if (ri === 1 && ci === 1) {
          html += '<div class="tv-center"><h3>LÁ SỐ TỬ VI</h3>' +
            '<p><b>Họ tên:</b> ' + esc(r.name || '—') + '</p>' +
            '<p><b>Dương lịch:</b> ' + sd[0] + '/' + sd[1] + '/' + sd[2] + ' · ' + T.CHI[r.hourIdx] + ' giờ</p>' +
            '<p><b>Âm lịch:</b> ' + ld[0] + '/' + ld[1] + '/' + ld[2] + (ld[3] ? ' (nhuận)' : '') + ' · năm ' + r.yearCanChi + '</p>' +
            '<p><b>Âm dương:</b> ' + r.amDuong + '</p>' +
            '<p><b>Cục:</b> ' + r.cuc[0] + ' ' + (['', '', 'nhị', 'tam', 'tứ', 'ngũ', 'lục'][r.cuc[1]]) + ' cục</p>' +
            (r.view ? '<p><b>Năm xem ' + r.view.year + ':</b> ' + r.view.canChi + ', ' + r.view.age + ' tuổi</p>' : '') +
            '</div>';
        }
      });
    });
    html += '</div><p class="tv-note">Lá số an 14 chính tinh, Tả Phù, Hữu Bật, Văn Xương, Văn Khúc, Lộc Tồn, Kình Dương, Đà La, Khôi, Việt, Không, Kiếp, tứ hóa và đại hạn. Chưa có Hỏa/Linh, tiểu hạn và các sao nhỏ.</p>';
    out.innerHTML = html;
    out.hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var day = +form.day.value, month = +form.month.value, year = +form.year.value;
    if (!(year >= 1900 && year <= 2100)) { alert('Năm sinh phải từ 1900 đến 2100.'); return; }
    var isLunar = form.cal.value === 'am';
    if (!isLunar) {
      var d = new Date(year, month - 1, day);
      if (d.getMonth() !== month - 1) { alert('Ngày dương lịch không tồn tại.'); return; }
    }
    render(T.lapLaSo({
      name: form.name.value.trim(), day: day, month: month, year: year, isLunar: isLunar,
      hour: +form.hour.value, gender: form.gender.value, viewYear: +form.viewYear.value
    }));
  });
})();
