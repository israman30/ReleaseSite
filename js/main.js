function getRandomSize(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

var images = '';

for (var i = 0; i < 25; i++){
    var width = getRandomSize(200, 400);
    var height = getRandomSize(200, 400);
    images += '<img src="../img/'+width+'/'+height+'/photos" alt="photos">';
}

// $('#photos').append(images);

// Top Button section
window.onscroll = function() {scrollToTop()};
function scrollToTop(){
  if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
    document.getElementById('btn').style.display = 'block';
  } else {
    document.getElementById('btn').style.display = 'none';
  }
}

function topBtn(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}