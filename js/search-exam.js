//xử lý tìm kiếm kỳ thi
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.custom-form');
    const searchResultsSection = document.getElementById('searchResults');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const keyword = document.getElementById('keyword').value.trim();

        // Perform search (replace with your own logic)
        const searchResults = performSearch(keyword);

        // Display search results
        displaySearchResults(searchResults);
    });
    
    function performSearch(keyword) {
        // Replace this with your actual search logic
        // This is just a placeholder
        const items = [
            { name: 'Lập Trình Web', status: 'Đang mở',kind:'Luyện Tập' , img: 'images/exam.png' },
            { name: 'Lập Trình Web', status: 'Đang mở',kind:'Thi Giữa Kỳ' , img: 'images/giuaki.jpg' },
            { name: 'Lập Trình Web', status: 'Chưa mở',kind:'Thi Cuối Kỳ' , img: 'images/cuoiki.png' },

            { name: 'Lập Trình Java', status: 'Đang mở',kind:'Luyện Tập' , img: 'images/exam.png' },
            { name: 'Lập Trình Java', status: 'Đang mở',kind:'Thi Giữa Kỳ' , img: 'images/giuaki.jpg' },
            { name: 'Lập Trình Java', status: 'Chưa mở',kind:'Thi Cuối Kỳ' , img: 'images/cuoiki.png' },

            { name: 'Lập Trình C++', status: 'Đang mở',kind:'Luyện Tập' , img: 'images/exam.png' },
            { name: 'Lập Trình C++', status: 'Đang mở',kind:'Thi Giữa Kỳ' , img: 'images/giuaki.jpg' },
            { name: 'Lập Trình C++', status: 'Chưa mở',kind:'Thi Cuối Kỳ' , img: 'images/cuoiki.png' },

            { name: 'Lập Trình Python', status: 'Đang mở',kind:'Luyện Tập' , img: 'images/exam.png' },
            { name: 'Lập Trình Python', status: 'Đang mở',kind:'Thi Giữa Kỳ' , img: 'images/giuaki.jpg' },
            { name: 'Lập Trình Python', status: 'Chưa mở',kind:'Thi Cuối Kỳ' , img: 'images/cuoiki.png' },

            { name: 'Tin Học Cơ Sở 2', status: 'Đang mở',kind:'Luyện Tập' , img: 'images/exam.png' },
            { name: 'Tin Học Cơ Sở 2', status: 'Chưa mở',kind:'Thi Giữa Kỳ' , img: 'images/giuaki.jpg' },
            { name: 'Tin Học Cơ Sở 2', status: 'Chưa mở',kind:'Thi Cuối Kỳ' , img: 'images/cuoiki.png' },
            
            
            // Add more items as needed
        ];

        // Filter items based on the keyword
        return items.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
    }
    //ấn vào outside item để ẩn item vừa tìm được
    document.addEventListener('click', function (event) {
        const isClickInsideSearchResults = searchResultsSection.contains(event.target);
        if (!isClickInsideSearchResults) {
            searchResultsSection.style.display = 'none';
        }
    });

    function displaySearchResults(results) {
        // Clear previous search results
        searchResultsSection.innerHTML = '';

        // Display new search results
        if (results.length > 0) {
            results.forEach(result => {
                const itemHtml = `
                <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0"  style=" margin-top:30px;">
                <div class="custom-block bg-white shadow-lg">
                    <a href="#">
                        <div class="d-flex">
                            <div>
                                <h5 class="mb-2">${result.name}</h5>

                                <p class="mb-0"> <a href=${result.status === 'Đang mở' ? "exam/test.html" : "#"} class="btn custom-btn mt-2 mt-lg-3">${result.kind}</a></p>
                            </div>
                           
                            <span class="badge bg-design rounded-pill ms-auto" style="width:100px; background-color:${result.status === 'Đang mở' ? 'green' : 'red'};">${result.status}</span>
                        </div>

                        <img src="${result.img}" class="custom-block-image img-fluid" alt="">
                    </a>
                </div>
            </div>
                
                `;
                searchResultsSection.innerHTML += itemHtml;
            });

            // Show the search results section
            searchResultsSection.style.display = 'flex';
        } else {
            // Hide the search results section if no results
            searchResultsSection.style.display = 'none';
        }
    }
});
