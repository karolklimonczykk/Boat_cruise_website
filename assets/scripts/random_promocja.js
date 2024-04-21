var cena = new Array('1799zł','999zł','1199zł','1399zł');
var pic = new Array("images/random/sekwana.png","images/baltic.jpg","images/random/rhine.jpg","images/random/nil.jpg");
var nazwa = new Array("Sekwana","Bałtyk","Ren","Nil");
var stars = new Array(3,2,4,5);
var random = Math.floor(Math.random()*cena.length);



document.getElementById("cena").innerHTML = cena[random];
document.getElementById("pic").src = pic[random];
document.getElementById("nazwa").innerHTML = nazwa[random];

for(var i = 5; i>=stars[random] ;i--){
    $("#"+i).removeClass("fas fa-star");
    $("#"+i).addClass("far fa-star");
}

