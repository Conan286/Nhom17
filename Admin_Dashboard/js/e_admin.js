const students = [
    {
        name: "Sinh Viên A",
        id: "SV001",
        exams: [
            {
                name: "Kỳ Thi A",
                score: 10,
                status: "Hoàn thành",
                date: "01/01/2024",
                
            },
            {
                name: "Kỳ Thi B",
                score: 8,
                status: "Hoàn thành",
                date: "02/01/2024",
            },
            {
                name: "Kỳ Thi C",
                score: 6,
                status: "Hoàn thành",
                date: "03/01/2024",
            }
        ],
        rst: [
          { 
              name: "Kỳ thi A",
              question: 1,
              ans: "A",
              res: "A",
              note: "True"
          },
          { 
              name: "Kỳ thi A",
              question: 2,
              ans: "A",
              res: "A",
              note: "True"
          },
          { 
              name: "Kỳ thi A",
              question: 3,
              ans: "C",
              res: "C",
              note: "True"
          },
          { 
              name: "Kỳ thi A",
              question: 4,
              ans: "D",
              res: "D",
              note: "True"
          },
          { 
              name: "Kỳ thi A",
              question: 5,
              ans: "B",
              res: "B",
              note: "True"
          },
          { 
              name: "Kỳ thi B",
              question: 1,
              ans: "B",
              res: "B",
              note: "True"
          },
          { 
              name: "Kỳ thi B",
              question: 2,
              ans: "D",
              res: "D",
              note: "True"
          },
          { 
              name: "Kỳ thi B",
              question: 3,
              ans: "B",
              res: "A",
              note: "False"
          },
          { 
              name: "Kỳ thi B",
              question: 4,
              ans: "A",
              res: "A",
              note: "True"
          },
          { 
              name: "Kỳ thi B",
              question: 5,
              ans: "B",
              res: "B",
              note: "True"
          },
          { 
              name: "Kỳ thi C",
              question: 1,
              ans: "D",
              res: "B",
              note: "False"
          },
          { 
              name: "Kỳ thi C",
              question: 2,
              ans: "B",
              res: "B",
              note: "True"
          },
          { 
              name: "Kỳ thi C",
              question: 3,
              ans: "A",
              res: "A",
              note: "True"
          },
          { 
              name: "Kỳ thi C",
              question: 4,
              ans: "C",
              res: "B",
              note: "False"
          },
          { 
              name: "Kỳ thi C",
              question: 5,
              ans: "C",
              res: "C",
              note: "True"
          },
        ]
    },
    {
        name: "Sinh Viên B",
        id: "SV002",
        exams: [
            {
                name: "Kỳ Thi A",
                score: 6,
                status: "Hoàn thành",
                date: "01/01/2024"
            },
            {
                name: "Kỳ Thi B",
                score: 8,
                status: "Hoàn thành",
                date: "02/01/2024"
            },
            {
                name: "Kỳ Thi C",
                score: 4,
                status: "Hoàn thành",
                date: "03/01/2024"
            }
        ],
        rst: [
          { 
              name: "Kỳ thi A",
              question: 1,
              ans: "A",
              res: "C",
              note: "False"
          },
          { 
              name: "Kỳ thi A",
              question: 2,
              ans: "C",
              res: "A",
              note: "False"
          },
          { 
              name: "Kỳ thi A",
              question: 3,
              ans: "C",
              res: "C",
              note: "True"
          },
          { 
              name: "Kỳ thi A",
              question: 4,
              ans: "D",
              res: "D",
              note: "True"
          },
          { 
              name: "Kỳ thi A",
              question: 5,
              ans: "B",
              res: "B",
              note: "True"
          },
          { 
              name: "Kỳ thi B",
              question: 1,
              ans: "B",
              res: "B",
              note: "True"
          },
          { 
              name: "Kỳ thi B",
              question: 2,
              ans: "D",
              res: "D",
              note: "True"
          },
          { 
              name: "Kỳ thi B",
              question: 3,
              ans: "B",
              res: "A",
              note: "False"
          },
          { 
              name: "Kỳ thi B",
              question: 4,
              ans: "A",
              res: "D",
              note: "False"
          },
          { 
              name: "Kỳ thi B",
              question: 5,
              ans: "B",
              res: "B",
              note: "True"
          },
          { 
              name: "Kỳ thi C",
              question: 1,
              ans: "D",
              res: "B",
              note: "False"
          },
          { 
              name: "Kỳ thi C",
              question: 2,
              ans: "A",
              res: "A",
              note: "True"
          },
          { 
              name: "Kỳ thi C",
              question: 3,
              ans: "A",
              res: "B",
              note: "False"
          },
          { 
              name: "Kỳ thi C",
              question: 4,
              ans: "C",
              res: "D",
              note: "False"
          },
          { 
              name: "Kỳ thi C",
              question: 5,
              ans: "C",
              res: "C",
              note: "True"
          },
        ]
    },
    {
        name: "Sinh Viên C",
        id: "SV003",
        exams: [
            {
                name: "Kỳ Thi A",
                score: 8,
                status: "Hoàn thành",
                date: "01/01/2024"
            },
            {
                name: "Kỳ Thi B",
                score: 10,
                status: "Hoàn thành",
                date: "02/01/2024"
            },
            {
                name: "Kỳ Thi C",
                score: 8,
                status: "Hoàn thành",
                date: "03/01/2024"
            }
        ],
        rst: [
          { 
              name: "Kỳ thi A",
              question: 1,
              ans: "A",
              res: "A",
              note: "True"
          },
          { 
              name: "Kỳ thi A",
              question: 2,
              ans: "D",
              res: "A",
              note: "False"
          },
          { 
              name: "Kỳ thi A",
              question: 3,
              ans: "C",
              res: "C",
              note: "True"
          },
          { 
              name: "Kỳ thi A",
              question: 4,
              ans: "D",
              res: "D",
              note: "True"
          },
          { 
              name: "Kỳ thi A",
              question: 5,
              ans: "B",
              res: "B",
              note: "True"
          },
          { 
              name: "Kỳ thi B",
              question: 1,
              ans: "B",
              res: "B",
              note: "True"
          },
          { 
              name: "Kỳ thi B",
              question: 2,
              ans: "D",
              res: "D",
              note: "True"
          },
          { 
              name: "Kỳ thi B",
              question: 3,
              ans: "A",
              res: "A",
              note: "True"
          },
          { 
              name: "Kỳ thi B",
              question: 4,
              ans: "A",
              res: "A",
              note: "True"
          },
          { 
              name: "Kỳ thi B",
              question: 5,
              ans: "B",
              res: "B",
              note: "True"
          },
          { 
              name: "Kỳ thi C",
              question: 1,
              ans: "D",
              res: "B",
              note: "False"
          },
          { 
              name: "Kỳ thi C",
              question: 2,
              ans: "B",
              res: "B",
              note: "True"
          },
          { 
              name: "Kỳ thi C",
              question: 3,
              ans: "A",
              res: "A",
              note: "True"
          },
          { 
              name: "Kỳ thi C",
              question: 4,
              ans: "B",
              res: "B",
              note: "True"
          },
          { 
              name: "Kỳ thi C",
              question: 5,
              ans: "C",
              res: "C",
              note: "True"
          },
        ]
    }
  ];
  
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const resultTable = document.getElementById("result-table");
  
  searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const searchValue = searchInput.value.trim();
    if (searchValue) {
        const student = students.find(function(student) {
            return student.name.toLowerCase() === searchValue.toLowerCase() || student.id.toLowerCase() === searchValue.toLowerCase();
        });
        if (student) {
            displayResult(student);
            chitietResult(student);
        } else {
            displayMessage("Không tìm thấy sinh viên với tên hoặc mã số: " + searchValue);
        }
    } else {
        displayMessage("Vui lòng nhập vào tên hoặc mã số sinh viên");
    }
  });
  
  function displayResult(student) {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const nameHeader = document.createElement("th");
    const idHeader = document.createElement("th");
    const examHeader = document.createElement("th");
    const scoreHeader = document.createElement("th");
    const statusHeader = document.createElement("th");
    const dateHeader = document.createElement("th");
    nameHeader.textContent = "Tên sinh viên";
    idHeader.textContent = "Mã số sinh viên";
    examHeader.textContent = "Kỳ thi";
    scoreHeader.textContent = "Điểm số";
    statusHeader.textContent = "Trạng thái";
    dateHeader.textContent = "Thời gian tham gia";
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(idHeader);
    headerRow.appendChild(examHeader);
    headerRow.appendChild(scoreHeader);
    headerRow.appendChild(statusHeader);
    headerRow.appendChild(dateHeader);
    table.appendChild(headerRow);
    for (const exam of student.exams) {
        const dataRow = document.createElement("tr");
        const nameData = document.createElement("td");
        const idData = document.createElement("td");
        const examData = document.createElement("td");
        const scoreData = document.createElement("td");
        const statusData = document.createElement("td");
        const dateData = document.createElement("td");
        nameData.textContent = student.name;
        idData.textContent = student.id;
        examData.textContent = exam.name;
        scoreData.textContent = exam.score;
        statusData.textContent = exam.status;
        dateData.textContent = exam.date;
        dataRow.appendChild(nameData);
        dataRow.appendChild(idData);
        dataRow.appendChild(examData);
        dataRow.appendChild(scoreData);
        dataRow.appendChild(statusData);
        dataRow.appendChild(dateData);
        table.appendChild(dataRow);
    }
    resultTable.innerHTML = "";
    resultTable.appendChild(table);
  }
  
  function chitietResult(student) {
      const z = document.createElement("h3");
      z.textContent = "Kết quả chi tiết";
  
      const table = document.createElement("table");
      const headerRow = document.createElement("tr");
      const examHeader = document.createElement("th");
      const queNum = document.createElement("th");
      const ans = document.createElement("th");
      const result = document.createElement("th");
      const note = document.createElement("th");
      
      examHeader.textContent = "Kỳ thi";
      queNum.textContent = "Câu hỏi"
      ans.textContent = "Câu trả lời";
      result.textContent = "Đáp án";
      note.textContent = "Ghi chú";
      
      headerRow.appendChild(examHeader);
      headerRow.appendChild(queNum);
      headerRow.appendChild(ans);
      headerRow.appendChild(result);
      headerRow.appendChild(note);
      table.appendChild(headerRow);
      for (const rst of student.rst) {
          const dataRow = document.createElement("tr");
          const examData = document.createElement("td");
          const queNumData = document.createElement("td");
          const ansData = document.createElement("td");
          const resultData = document.createElement("td");
          const noteData = document.createElement("td");
          examData.textContent = rst.name;
          queNumData.textContent = rst.question;
          ansData.textContent = rst.ans;
          resultData.textContent = rst.res;
          noteData.textContent = rst.note;
          dataRow.appendChild(examData);
          dataRow.appendChild(queNumData);
          dataRow.appendChild(ansData);
          dataRow.appendChild(resultData);
          dataRow.appendChild(noteData);
          table.appendChild(dataRow);
      }
      
      resultTable.appendChild(table);
    }
  
  function displayMessage(message) {
    const p = document.createElement("p");
    p.textContent = message;
    resultTable.innerHTML = "";
    resultTable.appendChild(p);
  }