/* Your JS here. */
window.onscroll=function() {scrollFunc()};

function scrollFunc(){
    if(this.document.body.scrollTop>100 || document.documentElement.scrollTop > 100){
        document.getElementById("navbar").style.padding = "20px 0px";
    }
    else{
        document.getElementById("navbar").style.padding = "40px 0px";

    }
    navbar=document.getElementById("navbar");
    navbarRect=navbar.getBoundingClientRect();
    navHeight=navbarRect.height;
    carousel=document.getElementById("carousel");
    carRect=carousel.getBoundingClientRect();
    mod=document.getElementById("modalBlock");
    modRect=mod.getBoundingClientRect();
    mcol=document.getElementById("multCol");
    mcolRect=mcol.getBoundingClientRect();
    imcol=document.getElementById("polarBear");
    imcolRect=imcol.getBoundingClientRect();
    trampcol=document.getElementById("trampHolder");
    trampcolRect=trampcol.getBoundingClientRect();
    flowercol=document.getElementById("flowers");
    flowercolRect=flowercol.getBoundingClientRect();


    if((carRect.y-navHeight)<0 && (carRect.y-navHeight)+carRect.height>0){
        document.getElementById("carLink").classList.add("activeLink");
    }
    else{
        document.getElementById("carLink").classList.remove("activeLink");
    }

    if((modRect.y-navHeight)<0 && (modRect.y-navHeight)+modRect.height>0){
        document.getElementById("modLink").classList.add("activeLink");
    }
    else{
        document.getElementById("modLink").classList.remove("activeLink");
    }

    if((mcolRect.y-navHeight)<0 && (mcolRect.y-navHeight)+mcolRect.height>0){
        document.getElementById("multLink").classList.add("activeLink");
    }
    else{
        document.getElementById("multLink").classList.remove("activeLink");
    }
    if((imcolRect.y-navHeight)<0 && (imcolRect.y-navHeight)+imcolRect.height>0){
        document.getElementById("imLink").classList.add("activeLink");
    }
    else{
        document.getElementById("imLink").classList.remove("activeLink");
    }

    if((trampcolRect.y-navHeight)<0 && (trampcolRect.y-navHeight)+trampcolRect.height>0){
        document.getElementById("trampLink").classList.add("activeLink");
    }
    else{
        document.getElementById("trampLink").classList.remove("activeLink");
    }
    if((flowercolRect.y-navHeight)<0 && (flowercolRect.y-navHeight)+flowercolRect.height>0){
        document.getElementById("vidLink").classList.add("activeLink");
    }
    else{
        document.getElementById("vidLink").classList.remove("activeLink");
    }
}



mod1=document.getElementById('modal1'); 
mod2=document.getElementById('modal2'); 
mod3=document.getElementById('modal3'); 

 
close1=document.getElementById('close1'); 
close2=document.getElementById('close2'); 
close3=document.getElementById('close3'); 

close1.addEventListener('click', () => {mod1.style.visibility='hidden';});
close2.addEventListener('click', () => {mod2.style.visibility='hidden';});
close3.addEventListener('click', () => {mod3.style.visibility='hidden';});



im1=document.getElementById('grizzModal'); 
im1.addEventListener('click', () => {mod1.style.visibility='visible';});
im2=document.getElementById('origModal'); 
im2.addEventListener('click', () => {mod2.style.visibility='visible';});
im3=document.getElementById('polarModal'); 
im3.addEventListener('click', () => {mod3.style.visibility='visible';});
//Carousel GPT code:
let index = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const total = images.length;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % total;
  slides.style.transform = `translateX(${-index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + total) % total;
  slides.style.transform = `translateX(${-index * 100}%)`;
});
