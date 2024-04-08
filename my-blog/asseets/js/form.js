
function submit() {
    let blogpost = {};
      blogpost.username = document.getElementById("username").value;
      blogpost.title =  document.getElementById("title").value;
      blogpost.content = document.getElementById("content").value;
      blogArray.push(blogpost);
      const stringData = JSON.stringify(blogArray)
      localStorage.setItem("bloggy", stringData);
      document.location.href = "./blog.html";
}

let blogs = localStorage.getItem("bloggy") 

let blogArray = JSON.parse(blogs) || [];





const submitEl = document.getElementById("submit");

submitEl.addEventListener("click", submit)


















// addCart[i].addEventListener("click", () => {
//     // get items from localStorage, or declare new one if not exist
//     let menuItems = localStorage.getItem("ProductsInCart") || '[]';
//     menuItems = JSON.parse(menuItems); 
//     // declare and add the new item
//     menuItems.push({ name: addCart[i].name, price: addCart[i].value });
//     localStorage.setItem("ProductsInCart", JSON.stringify(menuItems));
//    });