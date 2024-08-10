Nhom17
Bài tập nhóm phần Frontend

1. Mục tiêu:
Xây dựng giao diện người dùng thân thiện và dễ sử dụng cho một hệ thống thi trắc
nghiệm trực tuyến.
2. Yêu cầu chung:
• Sử dụng HTML, CSS và JavaScript để thiết kế và phát triển giao diện.
• Giao diện đẹp, thân thiện, sử dụng giao diện, màu sắc của PTIT.
• Khuyến khích hỗ trợ giao diện đáp ứng (responsive) trên các thiết bị khác nhau.
3. Thời gian
• Buổi đầu hoàn thành ít nhất 1 trang
• Tuần tiếp theo, báo cáo demo lấy điểm
4. Các trang của hệ thống
   
4.1. Người dùng thông thường
   
a. Trang đăng nhập và đăng ký:

• Yêu cầu:
o Form đăng nhập với các trường: Tên đăng nhập và Mật khẩu.
o Form đăng ký mới với các trường: Tên người dùng, Email, Mật khẩu và
Xác nhận mật khẩu.
o Kiểm tra tính hợp lệ của thông tin đăng nhập và đăng ký bằng JavaScript.
o Cho phép người dùng đăng nhập và đăng ký tài khoản mới (demo chưa
cần gọi đến backend).
![image](https://github.com/user-attachments/assets/5b2a4788-98eb-4abd-a5a7-cc6dd123326b)
![image](https://github.com/user-attachments/assets/604d948e-cbaa-47b9-84a4-0f9a59611d6d)

b. Trang Chính:

• Yêu cầu:
o Hiển thị danh sách các kỳ thi: Luyện tập, Giữa kỳ, Cuối kỳ, v.v.
o Các kỳ thi được phân loại theo trạng thái: có thể truy cập tự do hoặc yêu
cầu thời gian cụ thể.
o Cung cấp tính năng tìm kiếm và lọc kỳ thi theo tên hoặc trạng thái.
o Người dùng có thể chọn bài thi để bắt đầu làm
![image](https://github.com/user-attachments/assets/990d81c0-6745-484d-bc37-c97c28e2e72f)
![image](https://github.com/user-attachments/assets/9a043512-6f00-4833-9c58-52f3f13f750e)
![image](https://github.com/user-attachments/assets/9acd84db-6603-4ea3-8651-96db838b1db6)


c. Trang Bài Thi:

• Yêu cầu:
o Hiển thị câu hỏi, với các lựa chọn cho mỗi câu.
o Có bộ đếm thời gian cho mỗi bài thi.
o Nút "Nộp bài" để gửi bài làm.
o Hiển thị thông báo khi hết giờ hoặc sau khi nộp bài.

d. Trang Kết Quả:

• Yêu cầu:
o Hiển thị số câu trả lời đúng và tổng số câu.
o Tính toán và hiển thị điểm số.
o Cho phép người dùng xem lại câu trả lời và đáp án đúng.
o Người dùng có thể xem kết quả của bài thi và câu trả lời chi tiết.
o Fix dữ liệu

4.2. Admin

a. Trang Đăng nhập Admin
• Yêu cầu tương tự như trang đăng nhập sinh viên nhưng dành cho admin.

b. Dashboard Admin
• Yêu cầu:
o Quản lý danh sách các kỳ thi: thêm mới, chỉnh sửa, xóa.
o Quản lý danh sách người dùng: thêm mới, chỉnh sửa, xóa tài khoản sinh
viên.
o Xem thống kê: số lượng người dùng tham gia mỗi kỳ thi, tỷ lệ hoàn thành,
điểm trung bình, v.v.
![image](https://github.com/user-attachments/assets/cd815de5-f3b4-43d2-b0d0-707e4d7fcc6f)

c. Trang Tạo/Chỉnh sửa Kỳ thi
• Yêu cầu:
o Form để nhập thông tin kỳ thi: tên kỳ thi, mô tả, loại kỳ thi (tự do hoặc
thời gian cụ thể), danh sách câu hỏi.
o Tính năng để thêm, chỉnh sửa, xóa câu hỏi và lựa chọn câu trả lời.
o Cho phép nhập đề thi từ file excel có format cố định
![image](https://github.com/user-attachments/assets/37f7ccb6-06d2-4c7e-999b-a0326ea6516a)

d. Trang Thống kê
• Yêu cầu:
o Hiển thị bảng thống kê tổng hợp kết quả của tất cả sinh viên tham gia các
kỳ thi (Fix dữ liệu với frontend).
o Các thống kê bao gồm tổng số lần tham gia, tỷ lệ hoàn thành, điểm trung
bình, phân phối điểm số (ví dụ: biểu đồ)
o Cung cấp khả năng lọc kết quả theo kỳ thi, ngày tháng, hoặc một số tiêu
chí cụ thể khác.
o Tích hợp tính năng xuất báo cáo dưới dạng PDF hoặc Excel.
o Các chức năng này có thể fix dữ liệu để hiển thị
![image](https://github.com/user-attachments/assets/46fb7261-d367-4340-8732-a54e0ecd6f96)

e. Trang Xem Kết quả của Từng Sinh Viên
![image](https://github.com/user-attachments/assets/b2ead395-340f-41c5-826d-b4e27f5a7a97)

• Yêu cầu:

o Cho phép tìm kiếm sinh viên bằng tên hoặc mã số sinh viên để xem kết
quả thi cụ thể của họ.
o Hiển thị danh sách các kỳ thi mà sinh viên đã tham gia, cùng với điểm số,
trạng thái (hoàn thành/ không hoàn thành), và thời gian tham gia.
o Cung cấp chi tiết kết quả cho mỗi kỳ thi, bao gồm câu trả lời của sinh
viên, đáp án đúng, và giải thích cho mỗi câu hỏi nếu có.
o Tính năng xuất báo cáo kết quả của sinh viên dưới dạng tài liệu có thể in
được.
o Các chức năng này có thể fix dữ liệu để hiển thị
