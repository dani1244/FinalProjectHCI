// document.addEventListener('DOMContentLoaded', function () {
//   const nextBtns = document.querySelectorAll('.next');
//   const prevBtns = document.querySelectorAll('.prev');
//   const form = document.querySelector('.form-outer form');
//   const pages = document.querySelectorAll('.page');
//   const bullets = document.querySelectorAll('.step .bullet');
//   const progressChecks = document.querySelectorAll('.step .check');
//   const progressTexts = document.querySelectorAll('.step p');
  
//   let current = 0;

//   nextBtns.forEach((btn, index) => {
//     btn.addEventListener('click', function () {
//       bullets[current].classList.add('active');
//       progressChecks[current].classList.add('active');
//       progressTexts[current].classList.add('active');
//       current += 1;
//       form.style.transform = 'translateX(' + (-current * 25) + '%)';
//       pages[current].scrollTop = 0;
//     });
//   });

//   prevBtns.forEach((btn, index) => {
//     btn.addEventListener('click', function () {
//       bullets[current - 1].classList.remove('active');
//       progressChecks[current - 1].classList.remove('active');
//       progressTexts[current - 1].classList.remove('active');
//       current -= 1;
//       form.style.transform = 'translateX(' + (-current * 25) + '%)';
//       pages[current].scrollTop = 0;
//     });
//   });
// });
