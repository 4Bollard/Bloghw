const posts = document.querySelector( ".fitz")
const buttons = document.querySelector( ".buttons")

function recieve() {
    let blogs = localStorage.getItem("bloggy")
    let blogArray = JSON.parse(blogs) || [];
    for (let i = 0; i < blogArray.length; i++) {
        const div = document.createElement("div")
        div.classList.add("active-blog")
        let html = `
        <h1>Title: ${blogArray[i].title}</h1>
        <p>Username: ${blogArray[i].username}</p>
        <p>Content: ${blogArray[i].content}</p>
        
        `
      
        div.innerHTML = html
        posts.appendChild(div)
      } 

}

recieve()

function returns() {
  document.location.href = "./index.html";
}

buttons.addEventListener("click", returns)