# Bộ skill edit video HMT — Gói skill dựng video cho Claude Code

Tác giả: Hồ Mạnh Thắng (kênh HMT)

> Bản văn bản của trang `GIOI-THIEU.html` (chỉ có chữ, chưa có giao diện và hình minh họa).

5 Skill giúp Claude Code tự dựng video cho bạn: nghe giọng, cắt bỏ đoạn thừa, phủ tiêu đề, sub, chữ nhấn, hoạt hình và âm thanh. Bạn không cần biết code và không cần biết dựng phim, chỉ cần nói cho Claude biết file nào và muốn kiểu video nào.

- 5 skill · khung 9:16 và 16:9 · −14 LUFS (chuẩn âm mạng xã hội) · 2 bản Windows và macOS

## Skill hoạt động thế nào?

Claude Code là trợ lý AI chạy trên máy tính của bạn. Mỗi skill là một bộ luật dựng phim kèm công cụ, Claude dùng nó để làm video theo đúng một phong cách.

1. **Gọi skill ra:** trong ô chat của Claude Code, gõ `/` rồi chọn skill, ví dụ `/chuyen-gia-edit-HMT-tu-a-z`.
2. **Đưa file và nói việc cần làm:** viết tiếp sau tên skill đường dẫn file video hoặc giọng nói, kèm yêu cầu. Ví dụ: "video D:\Video\abc.mp4, chữ màu vàng".
3. **Duyệt và nhận video:** Claude làm theo luật của skill, gửi bản xem thử để bạn góp ý rồi mới xuất bản cuối.

## Bạn đang có gì trong tay?

- Video quay thô, chưa cắt → skill 1
- Video đã cắt xong → skill 2, 3
- Chỉ có file giọng nói → skill 4, 5

## 5 skill trong bộ

### Skill 1 · Edit từ A đến Z — `chuyen-gia-edit-HMT-tu-a-z`
Làm trọn gói. Đưa video quay thô vào, nhận về video hoàn chỉnh. Bước A cắt bỏ phần thừa, bước B phủ chữ và hiệu ứng như skill 2. Ra cả bản ngang 16:9 và bản dọc 9:16.

- Bỏ chỗ nói vấp, lặp, từ đệm "ờ, à" và mọi chỗ ngừng quá 0,6 giây. Mối nối còn 0,2 giây nên nghe liền mạch.
- Nói lại một ý hai lần thì giữ lần sau. Mỗi đoạn giữ lại dài ít nhất 2 giây.
- Xen kẽ khung 100% và zoom 150%, khung zoom bám theo mặt người nói.
- Thêm các chế độ: chèn footage B-roll, cắt video dài thành nhiều short 60–90 giây, thêm nhạc nền.
- Trước khi xuất bản cuối, Claude nghe lại từng mối nối để không cụt chữ, không mất số liệu.

Gọi skill rồi nói với Claude:
- `/chuyen-gia-edit-HMT-tu-a-z`
- Edit từ A đến Z video này
- Cắt video này thành mấy short
- Chèn footage trong thư mục này vào

### Skill 2 · Phủ chữ & Hiệu ứng Video chia sẻ — `chuyen-gia-edit-HMT-video-chia-se`
Phủ tiêu đề hook, sub karaoke, chữ nhấn, hình minh họa, hiệu ứng 3D và tiếng SFX lên video đã cắt sẵn. Chạy được cả video dọc 9:16 và ngang 16:9, bố cục chữ tự đổi theo khung. Không cắt ghép.

- Chữ khối Montserrat in hoa: 1 dòng trắng + 1 dòng vàng hoặc xanh cyan, bóng đen đổ sát.
- Tiêu đề 2–6 từ hiện ngay giây đầu, giữ 5–10 giây để giữ chân người xem.
- Cứ 8–10 giây một hiệu ứng, hiệu ứng nào cũng có âm thanh.
- Có chế độ chữ chìm sau người: chữ nằm sau đầu và vai nhân vật.

Gọi skill rồi nói với Claude:
- `/chuyen-gia-edit-HMT-video-chia-se`
- Phủ chữ & hiệu ứng video chia sẻ cho video này
- Phủ chữ cho video, màu vàng
- Làm chữ chìm sau người

### Skill 3 · Sub kiểu tạp chí — `chuyen-gia-sub-editorial-HMT`
Sub phong cách editorial sang trọng, như video bất động sản cao cấp. Chạy được cả video dọc và ngang. Không cắt ghép.

- Chữ serif cao gầy (Playfair) phối với chữ không chân (Inter) mảnh và đậm. Chữ khóa màu vàng sáng có quầng tối, nói "bộ tím" để đổi sang tông tím.
- Chữ to chìm sau đầu nhân vật. Mỗi câu một bố cục, tối đa 2 lớp chữ cùng lúc nên không rối mắt.
- Sub nhỏ luôn chạy đủ câu, viết thường, chỉ viết hoa tên riêng. Đoạn quay màn hình đã nhiều chữ thì tự tắt sub.
- Mọi chữ nằm trong vùng an toàn 3:4 giữa khung dọc và né mặt của mọi người trong khung. Skill dò mặt thật trên từng khung hình và tự soát lại sau khi xuất, không để chữ đè cằm hay miệng.

Gọi skill rồi nói với Claude:
- `/chuyen-gia-sub-editorial-HMT`
- Làm sub kiểu editorial cho video này
- Sub sang trọng kiểu tạp chí, bộ tím

### Skill 4 · Animation đồ họa phẳng — `chuyen-gia-animation-HMT`
Chỉ cần một file giọng nói (mp3/wav/m4a). Skill làm ra video motion graphics không có người, chữ và hình đổi theo từng câu nói.

- Nền màu đặc đổi liên tục: than, xanh rêu, đỏ cam, vàng mù tạt, kem, bạc hà. Mỗi màn 2–4 giây.
- Chữ đậm hiện từng từ đúng lúc nói, cụm nhấn đổi màu và có gạch chân.
- Gần 30 kiểu minh họa: đồng hồ đếm, điện thoại lướt feed, pin cạn, danh sách ✓/✗, biểu đồ, tin nhắn, cây mọc…
- Không logo. Âm thanh tự tạo, chuẩn −14 LUFS.
- Voice dài hơn 2 phút: Claude gửi bảng đề xuất từng màn cho bạn duyệt trước khi xuất.

Gọi skill rồi nói với Claude:
- `/chuyen-gia-animation-HMT`
- Làm video animation từ file voice này
- Làm motion graphics bản ngang 16:9

### Skill 5 · Hoạt hình người que — `chuyen-gia-nguoi-que-HMT`
Từ một file giọng nói, skill tạo video hoạt hình người que nét chì trên giấy sepia. Hình do code vẽ nên miễn phí, không cần AI tạo ảnh.

- Mỗi câu nói là một cảnh 3–10 giây, vẽ hình ẩn dụ của câu: tim vỡ, nhà tranh ấm, biệt thự lạnh, cây mọc…
- Người que có biểu cảm, tư thế, nắm tay, ôm, chỉ tay. Có đám đông và đạo cụ. Tông màu theo cảm xúc.
- Hai kiểu vẽ: nét vẽ tay (mặc định) và SOFT mượt 30 hình/giây, nhân vật áo dài tô chì có khối.
- Tiêu đề hook 5 giây trên dải nền nâu có vạch vàng. Không sub, không nhạc, không chữ ký.

Gọi skill rồi nói với Claude:
- `/chuyen-gia-nguoi-que-HMT`
- Làm video người que từ voice này
- Người que kiểu SOFT, chuyển động mượt
- Hoạt hình người que bản ngang

## So sánh 5 skill

| Skill | Bạn đưa vào | Cắt ghép | Khung hình | Kiểu chữ | Hợp với |
|---|---|---|---|---|---|
| 1 Edit từ A đến Z | Video quay thô | Có | Ra cả 16:9 và 9:16 | Chữ khối vàng/xanh | Video chia sẻ, livestream cắt lại, làm short |
| 2 Phủ chữ & Hiệu ứng | Video đã cắt | Không | 9:16, 16:9 | Chữ khối vàng/xanh | Video chia sẻ kiến thức, kinh nghiệm |
| 3 Sub kiểu tạp chí | Video đã cắt | Không | 9:16, 16:9 | Serif sang trọng | Bất động sản, thương hiệu cá nhân cao cấp |
| 4 Animation đồ họa phẳng | File giọng nói | Không cần | 9:16, 16:9 | Chữ đậm nhiều màu | Kênh không lộ mặt, chủ đề tâm lý, thói quen |
| 5 Hoạt hình người que | File giọng nói | Không cần | 9:16, 16:9 | Tiêu đề đầu video | Câu chuyện gia đình, bài học cuộc sống |

## Cài đặt (làm một lần)

1. Lấy đúng gói cho máy bạn rồi giải nén:
   - Windows: `BO-SKILL-EDIT-VIDEO-HMT-WINDOWS.zip`
   - Mac: `BO-SKILL-EDIT-VIDEO-HMT-MACOS.zip`
   - Hai gói có cùng 5 skill, chỉ khác bộ cài.
2. Chạy bộ cài.
   - Windows: bấm đúp `CAI-DAT.bat`.
   - Mac: mở Terminal tại thư mục vừa giải nén, chạy `bash cai-dat-mac.sh`.
   - Bộ cài kiểm tra Python và ffmpeg (thiếu thì hỏi để cài giúp), chép 5 skill vào máy và cài thư viện. Skill cũ cùng tên được cất vào thư mục `skills-backup`, không mất.
3. Mở Claude Code, gõ `/` để thấy các skill `chuyen-gia-…-HMT`, rồi nói yêu cầu kèm đường dẫn file.

### Máy tính
Windows 10/11, hoặc macOS 12 trở lên (chip Apple hay Intel). Đã cài Claude Code (bản desktop hoặc terminal).

- **Python 3.10+:** bộ cài tự kiểm tra.
- **ffmpeg:** bản có libass. Windows: bản full. Mac: ffmpeg-full của Homebrew. Bộ cài tự kiểm tra.
- **Chrome/Edge:** cần cho skill 4.
- **Tăng tốc:** Windows: card NVIDIA không bắt buộc, có thì nghe giọng nhanh gấp khoảng 3 lần, xuất video nhanh gấp khoảng 2 lần. Mac: tự dùng bộ nén video có sẵn của máy.

## Một video đi qua 6 bước (skill nào cũng vậy)

1. Gọi skill bằng `/`, đưa file (video hoặc voice) và nói kiểu muốn làm.
2. Claude nghe giọng, ra chữ và sửa chính tả. Tên riêng nghe không rõ thì hỏi bạn.
3. Lên kế hoạch tiêu đề, chữ nhấn, màn minh họa. Video dài thì gửi bảng để bạn duyệt.
4. Chụp ảnh kiểm tra từng điểm nhấn: chữ không che mặt, không tràn khung.
5. Gửi bản xem thử, bạn góp ý.
6. Xuất bản cuối. Sửa góp ý chỉ cần chỉnh kế hoạch rồi xuất lại, không làm lại từ đầu.

Thư mục làm việc tự tạo cạnh file của bạn, ví dụ `abc__edit`, `abc__editorial`, `abc__anim`. Video thành phẩm nằm trong đó.

## Ví dụ một lần làm (skill 1)

Chữ trong khung là lời minh họa, không phải kết quả thật.

**Bạn:** `/chuyen-gia-edit-HMT-tu-a-z` video D:\Video\buoi-chia-se.mp4, chữ màu vàng. Tên tiệm là Bánh Nhà Mây.

**Claude:** Mình đã nghe xong video và đề xuất cắt bỏ 14 chỗ nói vấp, 9 chỗ ngừng lâu. Có 3 tiêu đề để bạn chọn:
- BÁN HÀNG KHÔNG CẦN | ĐĂNG BÀI
- BÍ MẬT | BÁNH NHÀ MÂY
- 90 NGÀY | ĐỔI ĐỜI

**Bạn:** Chọn tiêu đề thứ 2.

**Claude:** Bản xem thử đã xong, nằm ở `D:\Video\buoi-chia-se__edit\preview.mp4`. Bạn xem rồi góp ý nhé.

**Bạn:** Chữ nhấn ở giây 42 che mặt, dời xuống giúp.

**Claude:** Đã dời xuống dưới cằm và xuất bản cuối 4K, gồm cả bản ngang 16:9 và bản dọc 9:16.

## Hỏi đáp

- **Tôi không biết code, có dùng được không?** Được. Bạn chỉ nói chuyện với Claude bằng tiếng Việt. Việc chạy lệnh, dựng chữ, xuất video Claude tự làm.
- **Máy không có card đồ họa rời thì sao?** Vẫn chạy được bằng CPU, chỉ chậm hơn. Có card NVIDIA thì nhanh gấp 2–3 lần.
- **Dùng trên máy Mac được không?** Được. Lấy gói macOS và chạy `bash cai-dat-mac.sh`. Cùng 5 skill, cùng kết quả video như bản Windows. Đã chạy thử thật trên MacBook M1.
- **Mất bao lâu cho một video?** Tùy độ dài và máy. Video ngắn 1 phút thường xong trong vài phút. Video dài 20–40 phút có thể mất cả giờ, nhất là khi xuất 4K.
- **Muốn sửa thì làm thế nào?** Nói thẳng chỗ cần sửa, ví dụ "đổi tiêu đề thành…" hay "chữ ở giây 12 che mặt". Claude chỉ sửa chỗ đó rồi xuất lại.
- **Skill có tốn phí không?** Gói skill không tốn thêm phí và không cần đăng ký dịch vụ AI tạo ảnh hay API nào khác. Bạn chỉ cần tài khoản Claude dùng được Claude Code.
- **Dùng cho video tiếng Việt được không?** Bộ skill được làm và dùng hằng ngày cho video tiếng Việt: sub đủ dấu, tên riêng viết hoa đúng, không tách từ ghép.

## Mẹo dùng

- **Nói rõ màu chữ:** vàng, xanh cyan hay tím. Không nói thì Claude chọn theo tông hình, gặp bối cảnh mới sẽ hỏi.
- **Đưa sẵn tên riêng:** tên người, công ty, sản phẩm. Sub sẽ viết hoa đúng ngay từ bản đầu.
- **Gửi kèm kịch bản:** có kịch bản gốc thì sub chính xác hơn, ít phải sửa.
- **Ghi sẵn tiêu đề:** ví dụ tiêu đề "LÀM VIDEO MẤT THỜI GIAN? | BIỆN MINH!". Dòng màu nên 1–2 từ để chữ to.

## Máy của bạn có chạy được không?

Bộ skill được làm và dùng hằng ngày trên Windows, đã chạy thử thật trên MacBook chip Apple M1. Cấu hình tối thiểu dưới đây là ước tính, máy càng mạnh thì xuất video càng nhanh.

| Hệ điều hành | Chạy được | Ghi chú |
|---|---|---|
| Windows 10 / 11 (64-bit) | Chạy tốt | Đã dùng thật hằng ngày. Cài bằng gói Windows, bấm đúp `CAI-DAT.bat`. |
| macOS 12 trở lên, chip Apple (M1–M4) | Chạy tốt | Đã chạy thử thật trên MacBook M1, RAM 8 GB: đủ 5 skill, cả khung dọc và ngang, cắt ghép video 4K thật. Cài bằng gói macOS, chạy `bash cai-dat-mac.sh`. |
| macOS, chip Intel | Chưa thử máy thật | Cùng gói macOS. Phần nén video cho máy Intel đã được viết và thử giả lập, chưa chạy trên máy Intel thật. |
| Linux | Chưa thử | Có khả năng chạy nhưng phải cài thủ công, cần chỉnh nhỏ ở chức năng chèn B-roll. |
| Windows 32-bit, Windows 7/8 | Không | Python mới và thư viện nghe giọng không còn hỗ trợ. |

| Thành phần | Tối thiểu | Khuyến nghị |
|---|---|---|
| CPU | Windows: 4 nhân / 8 luồng (Core i5 đời 8 hoặc Ryzen 5 trở lên). Mac: chip Apple M1 | Windows: 6–8 nhân trở lên. Mac: M2 trở lên |
| RAM | 8 GB | 16 GB, hoặc 32 GB nếu làm video 4K dài |
| Card đồ họa | Không bắt buộc. Windows không có card thì chạy bằng CPU, Mac tự dùng bộ nén video có sẵn | Windows: NVIDIA có 6–8 GB VRAM trở lên |
| Ổ cứng trống | Khoảng 6 GB cho phần mềm + mô hình, thêm 20 GB cho file làm việc | SSD, còn trống từ 50 GB |
| Internet | Bắt buộc: Claude Code chạy qua mạng, lần đầu cần tải thư viện và mô hình nghe giọng | Mạng ổn định |

### Cần tải lần đầu
- **Thư viện Python:** khoảng 0,4 GB, bộ cài tự tải.
- **Mô hình nghe giọng:** khoảng 3 GB (bản chính xác nhất), tự tải ở lần dùng đầu tiên.
- **Gói tăng tốc CUDA:** khoảng 2 GB, chỉ trên Windows có card NVIDIA và khi bạn đồng ý cài.
- **Riêng Mac:** Homebrew và ffmpeg-full, bộ cài hướng dẫn từng bước.
- **Phần mềm:** Claude Code kèm tài khoản Claude, Python 3.10+, ffmpeg có libass, Chrome hoặc Edge (cho skill 4).

### Tốc độ đo thật
Windows: Core i5-14600KF, RAM 32 GB, card RTX 3060 Ti 8 GB.
- Animation: video dọc 60 giây xuất xong trong khoảng 22 giây.
- Người que: video dọc 2 phút mất khoảng 4 phút.
- Xuất 4K: khoảng 1–1,5 lần thời lượng video.

MacBook chip Apple M1, RAM 8 GB.
- Phủ chữ 4K: đoạn 8 giây xuất xong trong khoảng 13 giây.
- Cắt ghép 4K: video 3 phút, ra cả bản ngang và dọc: khoảng 5,5 phút.
- Nghe giọng: mô hình medium khoảng 4,5 phút cho 3 phút video. Máy 8 GB nên dùng small cho bản nháp.

Trên Windows, card NVIDIA giúp nghe giọng nhanh gấp khoảng 3 lần. Máy chỉ có CPU có thể chậm gấp 2–4 lần các con số trên.

---
Tác giả: Hồ Mạnh Thắng (kênh HMT). Bộ skill được xây dựng và dùng hằng ngày cho kênh.
Font kèm theo dùng giấy phép SIL OFL. Mô hình tách người Robust Video Matting dùng giấy phép GPL-3.0.
