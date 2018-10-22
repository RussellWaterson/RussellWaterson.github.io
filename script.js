function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function myScrollLeft() {
    var elmnt = document.getElementById("myTimeline");
    elmnt.scrollLeft -= 100;
}
function myScrollRight() {
    var elmnt = document.getElementById("myTimeline");
    elmnt.scrollLeft += 100;
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the modal content
var modalContent = document.getElementsByClassName('modal-content');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
function readMoreOnClick(idClicked) {
    modal.style.display = "block";
    document.getElementById(idClicked).style.display = "block";
}

// When the user clicks on <span> (x) for all variations, close the modal
var i;
for (i = 0; i < span.length; i++) {
    span[i].onclick = function() {
        modal.style.display = "none";
        var j;
        for (j = 0; j < modalContent.length; j++) {
            modalContent[j].style.display = "none";
        }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        for (j = 0; j < modalContent.length; j++) {
            modalContent[j].style.display = "none";
        }
    }
}

//For collapsible content
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var slideIndex = [1,1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"]
var dotID = ["dot1", "dot2", "dot3", "dot4", "dot5"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
    var i;
    var slides = document.getElementsByClassName(slideId[no]);
    var dots = document.getElementsByClassName(dotID[no]);
    if (n > slides.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[no]-1].style.display = "block";    
    dots[slideIndex[no]-1].className += " active";
}