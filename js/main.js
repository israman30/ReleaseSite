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