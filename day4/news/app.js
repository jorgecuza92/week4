let displayNews = document.getElementById("displayNews")
let content = document.getElementById("content")
const articles = news.articles
// fitler
displayNews.addEventListener("click", function() {
  articles.map(function(article) {
    let newsItem = `
  <div id="newsContent">
  <br>
  <div class="textContent">
    <p>article: ${article.title}</p>
    <p>author: ${article.author}</p>
    <p>description: ${article.description}</p>
    <a href="${article.url}">link: ${article.url}</a>
  </div>
  <div class="imageContent">
    
    <img src="${article.urlToImage}" id="images">
    <p>Published: ${article.publishedAt} </p>
  </div>
  <br>
  </div>
    `
    content.innerHTML += newsItem 
  })

})
