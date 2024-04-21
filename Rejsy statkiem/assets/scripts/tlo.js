
    var tlo = new Array('images/baltic.jpg','images/kata.jpg','images/morzeczarne.jpg');
    var teraz=0;
function zmien(){
    var ile = tlo.length;
    document.getElementById("zmiana").src =tlo[teraz];
    teraz++;
    if(teraz >= ile)
        teraz=0;
}
setInterval("zmien()",2000);

