var h = document.querySelector(".hamb");
var n = document.querySelector(".nav-list");
var l = document.querySelector(".nav-list li");

h.addEventListener("click",function(){
    this.classList.toggle("click");
    n.classList.toggle("open");
});