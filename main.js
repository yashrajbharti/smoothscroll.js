// ONE PAGE ALL CODE TO ENABLE ONE SCROLL EFFECT

// JQUERY SMOOTH SCROLL
// $('.navbar a').on('click', function(e) {
//   if(this.hash !== '') {
//     e.preventDefault();
//
//     const hash = this.hash;
//
//     $('html, body').animate(
//       {
//       scrollTop: $(hash).offset().top
//       },
//       800
//     );
//   }
// });


//
// // SMOOTH SCROLL SCRIPT
// const scroll = new SmoothScroll('.navbar a[href*="#"]' ,{
//   speed:800
// });

var scroll = new SmoothScroll('.navbar a[href*="#"]');
