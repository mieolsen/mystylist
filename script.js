
function myFunction() {
  var x = document.getElementById("navigation");
  if (x.className === "nav") {
    x.className += " mobile";
  } else {
    x.className = "nav";
  }
}








var slideIndex = 1;
showSlides(slideIndex);

//skifter billede på pile 
// lægger 1 (o) til eller trækker 1 (o) fra slideindex
function skiftSlide(o) {
  showSlides(slideIndex += o);
}

// skifter billede på prikkerne
//laver slideindex om til den værdi der er givet (p)
function angivSlide(p) {
  showSlides(slideIndex = p);
}

function showSlides(n) {
  
  //variable til funktionen
  var i;
  var billeder = document.getElementsByClassName("billede");
  var prikker = document.getElementsByClassName("prik");
  
  // skifter til første billede i slutningen af slideshow 
  //undgår at prøve at vise flere billeder end der er.
  if (n > billeder.length) {slideIndex = 1} 
  
   // skifter til sidste billede i slutningen af slideshow 
  if (n < 1) {slideIndex = billeder.length}
  
  // sætter alle billeder til display:none
  for (i = 0; i < billeder.length; i++) {
    
    if (i==slideIndex-1) {
    //sætter display på billedet til block
  billeder[i].style.display = "block";
      } 
    else {
      billeder[i].style.display = "none";  
    } 
  }
  
  //fjerner klassen aktiv på prikkerne
  for (i = 0; i < prikker.length; i++) {
    
   if(i==slideIndex-1)  { 
  //sætter klassen på prikken til aktiv
  prikker[i].className += " active";
     }
    else { 
      prikker[i].className = prikker[i].className.replace(" active", "");
  }
     }
  
}