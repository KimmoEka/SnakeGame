function lisaaTauluun(pisteet){
    var nimi = document.getElementById("Name").value;
    var aika = new Date();
    var time = aika.toLocaleDateString() +" "+ aika.toLocaleTimeString();
    console.log(time + nimi + pisteet);
    window.location.assign("http://localhost:63342/Pelisivustoprojekti/PhpstormProjects/Matopeli/php/lisaatauluun.php?nimi=" + nimi + "&aika=" + time + "&pisteet=" + pisteet);
    return false;
    //http://localhost:63342/Pelisivustoprojekti/PhpstormProjects/Matopeli/php/lisaatauluun.php?nimi=joku&aika=10.15&pisteet=50
}