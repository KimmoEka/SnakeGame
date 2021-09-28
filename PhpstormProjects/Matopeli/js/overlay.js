
document.getElementById('startNappi').onclick = function(){
    alkutoimet(10);
    document.getElementById("overlay").style.display = 'none';
    document.getElementById("myCanvas").style.display = 'block';
};


//matokuolee
function overlay2 (){
    document.getElementById("myCanvas").style.display = 'none';
    document.getElementById("overlay2").style.display = 'block';
    document.getElementById("score").innerHTML = "Score: " + mato.pituus;
}

document.getElementById('pelaaUudestaan').onclick = function () {
    document.getElementById("myCanvas").style.display = 'block';
    document.getElementById("overlay2").style.display = 'none';
    alkutoimet(10);
};

document.getElementById('tallennaTiedot').onclick = function (){
    document.getElementById("overlay2").style.display = 'none';
    document.getElementById("scoreForm").style.display = "block";
};