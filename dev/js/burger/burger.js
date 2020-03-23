var burgerSpeed = 0.25;


var canYouSeeNav = false;

gsap.set("#nav-bg", {scaleX: 0, alpha: 0.5});
gsap.set("nav ul li", {alpha: 0});


// reset the roation pin for the lines
// gsap.set(".burger-lines",{transformOrigin:"50% 50%"});
// gsap.set("#burger-container",{transformOrigin:"50% 50%"});
// gsap.set("#burger",{transformOrigin:"50% 50%"});
// gsap.set("#burger-lines",{transformOrigin:"50% 50%"});

// function hideNav(){
//   gsap.set("nav", {display: "none"});
//   gsap.set("nav li", {alpha: 1});
// }
//
//
// $( document ).ready(function() {
//   console.log( "ready!" );
// });
