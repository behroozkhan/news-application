
let news = document.querySelectorAll("#news")[0];
let getNews = (search) => {
  fetch(
    `https://newsapi.org/v2/everything?q=${search}&apiKey=92837f2d953a41e0b0de1c4f52231ce7`
    // `https://gnews.io/api/v4/search?q=${search}&apikey=169385eb4591211703f33e0f346d9852`
  )
    // .then((res) => res.json())
    // .then((res) => {
    //   console.log(res)
    //   let news = document.querySelectorAll("#news")[0];
    //   const articalData = res.articles;
    //   for (let i = 0; i < articalData.length; i++) {
    //     console.log(articalData[i]);
    //     news.innerHTML += `  <div class="card">
    //     <a href="${articalData[i].url}">
    //     <div class="card-image">
    //     <img src="${articalData[i].image}" alt="adline">
       
    //     </div>
    //     <div class="card-content">
    //     <h3 class="card-title">'${articalData[i].title}'</h3>
    //     <p class="card-description">'${articalData[i].description}...'</p>
    //       </div>
    //       </a>
    //       </div>    
    //       `;
    //   }
    //   // console.log(res.articles)
    // })

      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        const articalData = res.articles;
        
        for (let i = 0; i < articalData.length; i++) {
          console.log(articalData[i]);
          const { urlToImage, url, title, description } = articalData[i];
          if (!urlToImage) {
            continue;
          }  
           // Convert the publishedAt date string to a JavaScript Date object
        const publishedDate = new Date(articalData[i].publishedAt);
        // Format the date using toLocaleString with the desired options
        const formattedDate = publishedDate.toLocaleString("en-US", {
          timeZone: "Asia/Jakarta",
          
        });
          news.innerHTML += `  <div class="card">
          <a id='url' href="${url}">
          <div class="card-image">
          <div class="time-container"><i class="fa-solid fa-clock"></i>
          ${formattedDate}
          </div>
          <img src="${urlToImage}" alt="adline">
          </div>
          <div class="card-content">
          <h3 class="card-title">'${title.slice(0, 40)}'</h3>
          <p class="card-description">'${description.slice(0, 252)}...'</p>
            </div>
            </a>
            </div>    
            `;
      }
    })
    .catch((err) => console.log(err));
  };
getNews('pakistan');

// let newsSearching = () => {
//   let searchValue = document.querySelectorAll("#search")[0];
//   news.innerHTML = "";
//   getNews(search.value);
//   // console.log(search.value);
// };
let searchValue = document.querySelectorAll("#search")[0];
let newsSearching = () => {
  if (searchValue.value.trim()) {
      news.innerHTML = "";
      getNews(searchValue.value);
  } else {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please type something',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
  }
}

let filter = search =>{
  let liveTv = document.querySelectorAll('#live-tv')[0];
  if(news === liveTv){
    Window.location('https://live.geo.tv/','_blank');
  }
  news.innerHTML = '';
  getNews(search);
}