const postsUL = document.getElementById("postsUL")

for(let index = 0; index < posts.length; index++) {


  let post = posts[index]

  const postItem = `

    <li>
      <h3>Title</h3>
      ${post.title}
      <li><h3>Body</h3></li>
     <i> ${post.body}</i>
    </li>
  
  `
  postsUL.insertAdjacentHTML('beforeend', postItem)
}