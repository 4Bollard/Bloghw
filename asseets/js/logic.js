const opal = document.querySelector( ".smiley" ) 


function dark() {
    var element = document.body;
    element.classList.toggle("dark");
}

opal.addEventListener("click", dark);