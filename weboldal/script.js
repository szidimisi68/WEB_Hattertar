function Valtoztat(){
    document.getElementById("ertek").innerText = document.getElementById("sebesseg").value
}

function Szamol(){
    let kapacitas = document.getElementById("kapacitas").value * (document.getElementById("kapacitasMertek").value*1);
    

    let atviteliSeb = document.getElementById("atviteliSebesseg").value * (document.getElementById("sebesseg").value*1);


    Kiirat(Math.round(kapacitas / atviteliSeb));

}
function Kiirat(szam){
    let eredmeny = "";
    eredmeny += Math.floor(szam / 3600);
    eredmeny += " óra ";
    
    szam -= (Math.floor(szam / 3600))*3600;
    eredmeny += Math.floor(szam / 60);
    eredmeny += " perc ";

    szam -= (Math.floor(szam / 60))*60;
    eredmeny += szam + " másodperc";

    document.getElementById("kiiras").innerText = eredmeny;
}