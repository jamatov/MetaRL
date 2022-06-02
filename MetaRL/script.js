var i = 0
var images = []
var time = 1000;

images[0] = "red-card.svg"
images[1] = "blue_card.svg"
images[2] = "violet_card.svg"

function changeImg(){
  document.slide.src = images[i]

  if(i < images.length - 1){
    i++;
  }else{
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;

