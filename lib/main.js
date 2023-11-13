'use strict';
// Scroll suavecito
$(document).ready(function(){
	$('a').on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html').animate({
				scrollTop: $(hash).offset().top
			}, 500, function(){
				window.location.hash = hash;
			});
		}
	});
});

//esconder el menu
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (currentScrollPos > 1) {
		if (prevScrollpos > currentScrollPos) {
			$('header').removeClass('esconder');
			$('nav').removeClass('esconder');
		} else {
			$('header').addClass('esconder');
			$('nav').addClass('esconder');
		}
		prevScrollpos = currentScrollPos;
	};
};

//Slides
var slideIndex = [1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(1, 3);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}