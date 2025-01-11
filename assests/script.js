// Dark Mode
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

function setTheme(isMoon) {
  if (isMoon) {
    document.documentElement.style.setProperty("--primary-color", "#FFFFFF");
    document.documentElement.style.setProperty("--secondary-color", "#2A2B2D");
  } else {
    document.documentElement.style.setProperty("--primary-color", "#2A2B2D");
    document.documentElement.style.setProperty("--secondary-color", "#FFFFFF");
  }
}
setTheme(false);

moonIcon.addEventListener("click", () => {
  moonIcon.style.display = "none";
  sunIcon.style.display = "inline-block";
  setTheme(true);
});

sunIcon.addEventListener("click", () => {
  sunIcon.style.display = "none";
  moonIcon.style.display = "inline-block";
  setTheme(false);
});

// Marquee
function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  console.log(firstElement);
  parentSelector.insertAdjacentHTML("beforeend", clone);
  parentSelector.insertAdjacentHTML("beforeend", clone);

  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}
window.addEventListener("load", Marquee(".marquee", 0.2));

// Year
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

// owl 
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  navText: ['<i class="fa fa-angle-left gallery-nav-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right gallery-nav-right" aria-hidden="true"></i>'],
  loop:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})