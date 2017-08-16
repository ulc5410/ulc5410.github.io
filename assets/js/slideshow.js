var slideIndex = 3;
carousel();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("slides_btn");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
    for (i = 0; i < y.length; i++) {
      y[i].style.display = "none";
    }
	if(slideIndex === 1){
      y[0].style.display = "inline-block";
	}else if(slideIndex === 3){
      y[1].style.display = "inline-block";	
	}
} 
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var y = document.getElementsByClassName("slides_btn");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 4 seconds
    for (i = 0; i < y.length; i++) {
      y[i].style.display = "none";
    }
	if(slideIndex === 1){
      y[0].style.display = "inline-block";
	}else if(slideIndex === 3){
      y[1].style.display = "inline-block";	
	}
}

