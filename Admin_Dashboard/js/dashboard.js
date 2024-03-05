document.addEventListener("DOMContentLoaded", function() {
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");
    var option4 = document.getElementById("option4");
    var option5 = document.getElementById("option5");
    var option6 = document.getElementById("option6");
    var content1 = document.getElementById("content1");
    var content2 = document.getElementById("content2");
    var content3 = document.getElementById("content3");
    var content4 = document.getElementById("content4");
    var content5 = document.getElementById("content5");
    var content6 = document.getElementById("content6");

    function showContent(option) {
        if (option == 1) {
            content1.style.display = "block";
            content2.style.display = "none";
            content3.style.display = "none";
            content4.style.display = "none";
            content5.style.display = "none";
            content6.style.display = "none";
        } else if (option == 2) {
            content1.style.display = "none";
            content2.style.display = "block";
            content3.style.display = "none";
            content4.style.display = "none";
            content5.style.display = "none";
            content6.style.display = "none";
        } else if (option == 3) {
            content1.style.display = "none";
            content2.style.display = "none";
            content3.style.display = "block";
            content4.style.display = "none";
            content5.style.display = "none";
            content6.style.display = "none";
        }
        else if (option == 4){
            content1.style.display = "none";
            content2.style.display = "none";
            content3.style.display = "none";
            content4.style.display = "block";
            content5.style.display = "none";
            content6.style.display = "none";
        }
        else if (option == 5) {
            content1.style.display = "none";
            content2.style.display = "none";
            content3.style.display = "none";
            content4.style.display = "none";
            content5.style.display = "block";
            content6.style.display = "none";
        }
        else if (option == 6) {
            content1.style.display = "none";
            content2.style.display = "none";
            content3.style.display = "none";
            content4.style.display = "none";
            content5.style.display = "none";
            content6.style.display = "block";
        }
    }

    option1.addEventListener("click", function() {
        showContent(1);
        option1.classList.add("active");
        option2.classList.remove("active");
        option3.classList.remove("active");
        option4.classList.remove("active");
        option5.classList.remove("active");
        option6.classList.remove("active");
    });

    option2.addEventListener("click", function() {
        showContent(2);
        option1.classList.remove("active");
        option2.classList.add("active");
        option3.classList.remove("active");
        option4.classList.remove("active");
        option5.classList.remove("active");
        option6.classList.remove("active");
    });

    option3.addEventListener("click", function() {
        showContent(3);
        option1.classList.remove("active");
        option2.classList.remove("active");
        option3.classList.add("active");
        option4.classList.remove("active");
        option5.classList.remove("active");
        option6.classList.remove("active");
    });
    option4.addEventListener("click", function() {
        showContent(4);
        option1.classList.remove("active");
        option2.classList.remove("active");
        option3.classList.remove("active");
        option4.classList.add("active");
        option5.classList.remove("active");
        option6.classList.remove("active");
    });
    option5.addEventListener("click", function() {
        showContent(5);
        option1.classList.remove("active");
        option2.classList.remove("active");
        option3.classList.remove("active");
        option4.classList.remove("active");
        option5.classList.add("active");
        option6.classList.remove("active");
    });
    option6.addEventListener("click", function() {
        showContent(6);
        option1.classList.remove("active");
        option2.classList.remove("active");
        option3.classList.remove("active");
        option4.classList.remove("active");
        option5.classList.remove("active");
        option6.classList.add("active");
    });

    

    var chart1 = new ApexCharts(document.getElementById('chart1'), {
        series: [{
            name: 'Số lượng người dùng',
            data: [100, 150, 200] 
        }],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Kỳ thi A', 'Kỳ thi B', 'Kỳ thi C'], 
        },
        yaxis: {
            title: {
                text: 'Số lượng người dùng'
            }
        },
        title: {
            text: 'Số lượng người dùng tham gia mỗi kỳ thi',
            align: 'center'
        }
    });
    chart1.render();
    
    var chart2 = new ApexCharts(document.getElementById('chart2'), {
        series: [80, 85, 90], 
        chart: {
            type: 'radialBar',
            height: 350
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        },
        labels: ['Kỳ thi A', 'Kỳ thi B', 'Kỳ thi C'],
        title: {
            text: 'Tỷ lệ hoàn thành mỗi kỳ thi',
            align: 'center'
        }
    });
    chart2.render();
    
    var chart3 = new ApexCharts(document.getElementById('chart3'), {
        series: [{
            name: 'Điểm trung bình',
            data: [7.5, 8.0, 8.5] 
        }],
        chart: {
            height: 350,
            type: 'line',
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Kỳ thi A', 'Kỳ thi B', 'Kỳ thi C'] 
        },
        title: {
            text: 'Điểm trung bình mỗi kỳ thi',
            align: 'center'
        }
    });
    chart3.render();    
    
    var feature1 = document.getElementById("feature1"); 
    var feature2 = document.getElementById("feature2");
    var feature3 = document.getElementById("feature3");
    var chart1 = document.getElementById("chart1"); 
    var chart2 = document.getElementById("chart2");
    var chart3 = document.getElementById("chart3");
    
    function showChart(feature) {
        if (feature == 1) {
            chart1.style.display = "block";
            chart2.style.display = "none";
            chart3.style.display = "none";
        } else if (feature == 2) {
            chart1.style.display = "none";
            chart2.style.display = "block";
            chart3.style.display = "none";
        } else if (feature == 3) {
            chart1.style.display = "none";
            chart2.style.display = "none";
            chart3.style.display = "block";
        }
    }
    
    feature1.addEventListener("click", function() {
        showChart(1);
        feature1.classList.add("active");
        feature2.classList.remove("active");
        feature3.classList.remove("active");
    });
    
    feature2.addEventListener("click", function() {
        showChart(2);
        feature1.classList.remove("active");
        feature2.classList.add("active");
        feature3.classList.remove("active");
    });
    
    feature3.addEventListener("click", function() {
        showChart(3);
        feature1.classList.remove("active");
        feature2.classList.remove("active");
        feature3.classList.add("active");
    });
    
});

const deleteBtns = document.querySelectorAll(".delete");

// Xử lý sự kiện khi nhấn vào nút "Xóa"
deleteBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        // Xác nhận trước khi xóa
        if (confirm("Bạn có chắc muốn xóa kỳ thi này không?")) {
            // Xóa hàng chứa nút "Xóa" mà người dùng đã nhấn
            const row = btn.closest("tr");
            row.remove();
        }
    });
});
