 /*slide up script*/
   const scrollBtn = document.querySelector(".scroll-up-btn");
   window.addEventListener("scroll",function(){
       scrollBtn.classList.toggle("show",window.scrollY > 500);
   });
   scrollBtn.addEventListener("click",() =>{
       document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
   });
   $('.menu-btn').click(function(){
   $('.navbar .menu').toggleClass("active");
   $('.menu-btn i').toggleClass("active");
   });