// Next/previous controls
function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

let slideIndex = 0;
showSlides();

function showSlides() {
  console.log("slide:", slideIndex);
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

function updateSlide() {
  slideIndex++;
  showSlides();
}

setInterval(updateSlide, 10000);