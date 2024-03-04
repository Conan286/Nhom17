document.addEventListener('DOMContentLoaded', function() {
    let submitBtn = document.getElementById('submitBtn');
    let message = document.getElementById('message');
    let timer = document.getElementById('time');
    let totalTime = 60; 
    let timeLeft = totalTime;
    let timerInterval;

    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let remainderSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainderSeconds.toString().padStart(2, '0')}`;
    }

    function updateTimer() {
        timer.textContent = formatTime(timeLeft);
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            message.textContent = "Hết giờ!";
            submitBtn.disabled = true;
        }
        timeLeft--;
    }

    timerInterval = setInterval(updateTimer, 1000);

    let correctAnswers = ["B.Mô hình dữ liệu quan hệ", "D.Tất cả câu trên", "C.Bảng", "D.Tất cả đáp án trên", "B.Phần mềm dùng để tạo lập, cập nhật và khai thác CSDL quan hệ", "D.Miền của các thuộc tính khác nhau không nhất thiết phải khác nhau", "B.Quan hệ không có thuộc tính đa trị hay phức tạp", "D.Nên chọn khoá chính là khóa có ít thuộc tính nhất", "A.Trường SOBH là duy nhất, trong khi đó trường HOTEN không phải là duy nhất", "A.HoaDon"];
    let userAnswers = []; 

    let questionTitles = [
        "Mô hình phổ biến để xây dựng CSDL quan hệ là ?",
        "Các khái niệm dùng để mô tả các yếu tố nào sẽ tạo thành mô hình dữ liệu quan hệ?",
        "Trong mô hình quan hệ, về mặt cấu trúc thì dữ liệu được thể hiện trong các:",
        "Thao tác trên dữ liệu có thể là",
        "Phát biểu nào về hệ QTCSDL là đúng?",
        "Phát biểu nào sau đây là sai khi nói về miền?",
        "Đặc điểm nào sau đây không là đặc trưng của một quan hệ trong hệ CSDL quan hệ?",
        "Phát biểu nào sau đây là sai khi nói về khoá chính?",
        "Giả sử một bảng có 2 trường SOBH (số bảo hiểm) và HOTEN (họ tên) thì nên chọn trường SOBH làm khóa chính hơn vì",
        "Cho các bảng sau : DanhMuc Sach(MaSach, TenSach, MaLoai), LoaiSach(MaLoai, LoaiSach), HoaDon(MaSach, SoLuong, DonGia). Để biết giá của một quyển sách thì cần những bảng nào"
    ];
    let questionLabels = [
        ["A.Mô hình phân cấp", "B.Mô hình dữ liệu quan hệ", "C.Mô hình hướng đối tượng", "D.Mô hình cơ sở quan hệ"],
        ["A.Cấu trúc dữ liệu", "B.Các ràng buộc dữ liệu", "C.Các thao tác, phép toán dữ liệu", "D.Tất cả câu trên"],
        ["A.Cột", "B.Hàng", "C.Bảng", "D.Báo cáo"],
        ["A.Sửa bản ghi", "B.Thêm bản ghi", "C.Xoá bản ghi", "D.Tất cả đáp án trên"],
        ["A.Phần mềm dùng để xây dựng các CSDL quan hệ", "B.Phần mềm dùng để tạo lập, cập nhật và khai thác CSDL quan hệ", "C.Phần mềm Microsoft Access", "D.Phần mềm dùng để giải các bài toán quản lý có chứa các quan hệ giữa các dữ liệu"],
        ["A.Các miền của các thuộc tính khác nhau không nhất thiết phải khác nhau", "B.Mỗi thuộc tính có thể có hai miền trở lên", "C.Hai thuộc tính khác nhau có thể cùng miền", "D.Miền của thuộc tính họ tên thường là kiểu text"],
        ["A.Các bộ phân biệt và thứ tự các bộ không quan trọng", "B.Quan hệ không có thuộc tính đa trị hay phức tạp", "C.Mỗi thuộc tính có một tên phân biệt và thứ tự các thuộc tính là quan trọng", "D.Tên của các quan hệ có thể trùng nhau"],
        ["A.Một bảng có thể có nhiều khoá chính", "B.Mỗi bảng có ít nhất một khoá", "C.Xác định khoá phụ thuộc vào quan hệ logic của các dữ liệu chứ không phụ thuộc vào giá trị các dữ liệu", "D.Nên chọn khoá chính là khóa có ít thuộc tính nhất"],
        ["A.Trường SOBH là duy nhất, trong khi đó trường HOTEN không phải là duy nhất", "B.Trường SOBH là kiểu số, trong khi đó trường HOTEN không phải là kiểu số", "CTrường SOBH đứng trước trường HOTEN", "D.Trường SOBH là trường ngắn hơn"],
        ["A.HoaDon", "B.DanhMucSach, HoaDon", "C.DanhMucSach, LoaiSach", "D.HoaDon, LoaiSach"]
    ];

    let questionContainer = document.getElementById('questionContainer'); 

    if (questionContainer) {
        questionTitles.forEach((title, index) => {
            let questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `<h3>Câu ${index + 1}: ${title}</h3>`;

            let labelContainer = document.createElement('div');
            questionLabels[index].forEach((label, labelIndex) => {
                let labelElement = document.createElement('label');
                let inputElement = document.createElement('input');
                inputElement.setAttribute('type', 'radio');
                inputElement.setAttribute('name', `answer-${index}`);
                inputElement.setAttribute('value', label);
                labelElement.appendChild(inputElement);
                labelElement.appendChild(document.createTextNode(label));
                labelContainer.appendChild(labelElement);
            });

            questionElement.appendChild(labelContainer); 
            questionContainer.appendChild(questionElement); 
        });
    }
    
    function getUserAnswers() {
        let userAnswers = []; 
        let inputElements = document.querySelectorAll('input[type="radio"]');
        inputElements.forEach(input => {
            if (input.checked) { 
                userAnswers.push(input.value); 
            }
        });
    
        return userAnswers; 
    }

    submitBtn.addEventListener('click', function() {
        message.textContent = "Bài đã được nộp!";
        submitBtn.disabled = true;
        let userAnswers = getUserAnswers(); 
        console.log(userAnswers);
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));

        let score = calculateScore(correctAnswers, userAnswers);
        clearInterval(timerInterval);
        
        redirectToResultPage(score, userAnswers);
    });
    
    function calculateScore(correctAnswers, userAnswers) {
        let score = 0;
        for (let i = 0; i < correctAnswers.length; i++) {
            if (userAnswers[i] === correctAnswers[i]) {
                score++;
            }
        }
        return score;
    }
    
    function redirectToResultPage(score, userAnswers) {
        localStorage.setItem('score', score);
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        window.location.href = 'result.html';
    }
});
