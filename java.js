let btnSearch = document.getElementsByClassName("recherche")[0];
let modal = document.getElementById("modal");
let close = document.getElementsByClassName("div_close")[0];
let barreMenu = document.getElementById("barre_menu");
let listes = document.getElementById("listes");
let imageSlide = document.getElementsByClassName("slide_image");
btnSearch.addEventListener("click",function(){
    modal.classList.add("show_modal");
})
close.addEventListener("click",function(){
    modal.classList.remove("show_modal");
})

barreMenu.addEventListener("click",function(){
    listes.classList.toggle("show_listes");
    barreMenu.classList.toggle("show_close");
})



