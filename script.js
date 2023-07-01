// script.js
// let menuBtn = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.header .flex .navbar');

// menuBtn.onclick = () =>{
//    menuBtn.classList.toggle('fa-times');
//    navbar.classList.toggle('active');
// }

// window.onscroll = () =>{
//    menuBtn.classList.remove('fa-times');
//    navbar.classList.remove('active');
// }

// var swiper = new Swiper(".course-slider", {
//    spaceBetween: 20,
//    grabCursor:true,
//    loop:true,
//    pagination: {
//      el: ".swiper-pagination",
//      clickable: true,
//    },
//    breakpoints: {
//       540: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//    },
// });

// var swiper = new Swiper(".teachers-slider", {
//    spaceBetween: 20,
//    grabCursor:true,
//    loop:true,
//    pagination: {
//      el: ".swiper-pagination",
//      clickable: true,
//    },
//    breakpoints: {
//       540: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//    },
// });

// var swiper = new Swiper(".reviews-slider", {
//    spaceBetween: 20,
//    grabCursor:true,
//    loop:true,
//    pagination: {
//      el: ".swiper-pagination",
//      clickable: true,
//    },
//    breakpoints: {
//       540: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//    },
// });

var tl=gsap.timeline({
    scrollTrigger:{
      trigger:"#one",
      start:"60% 100%",
      end:"70% 75%",
    }
   });
  tl.to("#one #img",{
     
      rotate:"-360deg",
      top:"7vh",
      ease:Power3,
     duration:1.2
     
   })
   tl.to("#one h1,small,p",{
    opacity:1,
    stagger:0.2
   })
  
  
  
  gsap.to("#two #left",{
    left:"0vw",
    duration:2,
    delay:3
   })
  
  
  // -------------- --------->
   
   gsap.from('#tag1', {
      scrollTrigger: {
        trigger: '#tag1',
        scroller: '#main',
        toggleActions: 'restart pause reset reset',
        scrub: true,
      },
      x: -400,
      duration: 8,
    })
    gsap.from('#tag3', {
      scrollTrigger: {
        trigger: '#tag3',
        scroller: '#main',
        toggleActions: 'restart pause reset reset',
        scrub: true,
      },
      x: -600,
      duration: 12,
    })
    gsap.from('#tag5', {
      scrollTrigger: {
        trigger: '#tag5',
        scroller: '#main',
        toggleActions: 'restart pause reset reset',
        scrub: true,
      },
      x: -400,
      duration: 8,
    })
    /*-------------------------------------*/
    gsap.from('#tag2', {
      scrollTrigger: {
        trigger: '#tag2',
        scroller: '#main',
        toggleActions: 'restart pause reset reset',
        scrub: true,
      },
      x: 400,
      duration: 8,
    })
    gsap.from('#tag4', {
      scrollTrigger: {
        trigger: '#tag4',
        scroller: '#main',
        toggleActions: 'restart pause reset reset',
        scrub: true,
      },
      x: 400,
      duration: 8,
    })
    