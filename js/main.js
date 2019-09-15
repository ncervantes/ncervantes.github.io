var expandImg = document.getElementById("expandedImg");
var imgText = document.getElementById("imgtext");

window.onload = function() {
  var imgs = document.getElementsByClassName("first-img"); 
  expandImg.src = imgs[0].src;
  imgText.innerHTML = imgs[0].alt;
}

function myFunction(imgs) {  
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}



