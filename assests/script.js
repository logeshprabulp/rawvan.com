// Year 
document.getElementById('year').textContent = new Date().getFullYear();
 // Back to top
 var amountScrolled = 500;
 var amountScrolledNav = 25;

 $(window).scroll(function () {
   if ($(window).scrollTop() > amountScrolled) {
     $("button.back-to-top").addClass("show");
   } else {
     $("button.back-to-top").removeClass("show");
   }
 });

 $("button.back-to-top").click(function () {
   $("html, body").animate(
     {
       scrollTop: 0,
     },
     800
   );
   return false;
 });
//toggle
var toggle = document.getElementById("navIcon")
var sidenav = document.getElementById("sidenavId")
var toggleClose = document.getElementById("navIconClose")
toggle.addEventListener("click",()=>{
  sidenav.style.display = "block";
  toggle.style.display='none';
  toggleClose.style.display='block';
})
toggleClose.addEventListener("click",()=>{
  sidenav.style.display = "none";
  toggleClose.style.display='none';
  toggle.style.display='block';
})