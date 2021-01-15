AOS.init();

jQuery(document).ready(function ($) {

    // Header fixed on scroll
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }

  });
 
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }
  
  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }


//HERO TYPING EFFECT
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Development", "Product Design", "Branding & Prints", "UI/UX"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if(charIndex < textArray[textArrayIndex].length) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else{
    cursor.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if(charIndex > 0) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1); 
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursor.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
 if(textArray.length) setTimeout(type, newTextDelay + 250);
});