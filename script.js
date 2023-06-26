let nbr_win ='';
let essai ='';
function set_level() {
    if (document.getElementById("hard").checked) {
        essai = 1;
        niv = 3;
        nbr_win = Math.floor(Math.random()*100);
        console.log(nbr_win);
    }else if(document.getElementById("normal").checked){
        essai = 2;
        niv = 2;
        nbr_win = Math.floor(Math.random()*50);
        console.log(nbr_win);
    }else{
        essai = 3;
        niv = 1;
        nbr_win = Math.floor(Math.random()*10);
        console.log(nbr_win);
    }
}

function testnbr() {

    var nbr = document.getElementById("nbr").value;

    if(nbr > nbr_win){
        document.getElementById('ecran1').innerHTML += nbr + " plus petit <hr>";
        essai--;
    }else if(nbr < nbr_win){
        document.getElementById('ecran1').innerHTML += nbr + " plus grand <hr>";
        essai--;
    }else{
        document.getElementById('resultat').style.visibility = 'visible';
        document.getElementById('resultat_titre').innerHTML = 'gagné !!';
        document.getElementById('resultat_nbr').textContent = 'Le resultat est bien : ' + nbr_win;
    }


    if (essai === 0) {

        document.getElementById('resultat').style.visibility = 'visible';
        document.getElementById('resultat_titre').innerHTML = 'perdu !! vous avez plus de chances';
        document.getElementById('resultat_nbr').textContent = 'Le resultat etais : ' + nbr_win;

    }else if (essai < 0){

        location.reload();
    }
}
