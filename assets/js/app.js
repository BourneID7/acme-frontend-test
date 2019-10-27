// jQuery slider for mobile view
$(document).ready(function(){
  $('.responsive').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // match height for items in slider
  $(function() {
    $('.slick-slide .inner-box').matchHeight();
  });
});

let nav = document.getElementById("acmeTopnav");
let grid = document.querySelectorAll(".grid");

// Toggle for topnav to change display properties when icon clicked 
function toggleNav() {
  if (nav.style.display === "none") {
    document.body.classList.add("overlay");
    nav.style.display = "flex";
  } else {
    document.body.classList.remove("overlay");
    nav.style.display = "none";
  }
}

function runMediaQueries(x) {
  if (x.matches) { 
    // If media query matches < 675px
    nav.style.display = "none";
    document.body.classList.remove("overlay");
  } else {
    // > 675px
    nav.style.display = "flex";
    document.body.classList.remove("overlay");
  }
}

let x = window.matchMedia("(max-width: 675px)");

runMediaQueries(x) // Call listener function at run time
x.addListener(runMediaQueries) // Attach listener function on state changes 