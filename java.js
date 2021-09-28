let btnSearch = document.getElementsByClassName("recherche")[0];
let modal = document.getElementById("modal");
let close = document.getElementsByClassName("div_close")[0];
let barreMenu = document.getElementById("barre_menu");
let listes = document.getElementById("listes");
let imageSlide = document.getElementsByClassName("slide_image");
let slideCaption = document.getElementsByClassName("slide_caption_texte");
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
let slideIndex=1;
plusSlide(0);
function montreSlide (n){
    plusSlide(slideIndex +=n);
}
function currentSlide(n){
    plusSlide(slideIndex = n);
}
function plusSlide(n){
    if (n<1) {
        slideIndex=imageSlide.length;
    }
    if (n>imageSlide.length) {
     slideIndex=1;
    }
    for (let i = 0; i < imageSlide.length; i++) {
        imageSlide[i].style.display="none";
        
    }
    imageSlide[slideIndex-1].style.display="block";
}



