



/*burger-menu button  */
const menu = document.querySelector(".burger-menu");
menu.addEventListener("click", morph);

function morph() {
  menu.classList.toggle("open");
  const items = document.querySelector(".menu-items");
  items.classList.toggle("open");
  const body = document.querySelector('html');
  body.classList.toggle('lock');

  items.addEventListener("click",function(){
     menu.classList.remove("open");
      items.classList.remove('open'); 
      body.classList.remove('lock');   
      
     
    }); 
}	




/*Back to Top button  */

(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('up-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('up-show');
    }
  }

  function backToTop() {
    var scrolled = window.pageYOffset;
    if (scrolled > 0) {
      window.scrollBy(0, -scrolled);
    }
  }

  var goTopBtn = document.querySelector('.up');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
    





/*slider 02!!!*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n >slides.length){
    slideIndex = 1
  }
  if(n <1){
    slideIndex = slides.length
  }
  for (i=0; i <slides.length;i++){
    slides[i].style.display="none";
  }

  slides[slideIndex-1].style.display="flex"; 
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "flex";
  setTimeout(carousel, 4000);
}







$(document).ready(function() {
  $(function(){    

  // Присвоение класса для видимости сожержимого аккордеона
    $('.accordeon-header').click(function(){
      $(this).toggleClass('in').next().slideToggle();
    });
});
})




