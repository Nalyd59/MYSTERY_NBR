i = 0;
niv = document.getElementById('select');
essai = 3;
number_win = Math.floor(Math.random() * 10);


function verif(number_test){

    if (number_test == number_win) {
        document.getElementById('ecran').textContent = ' gagné !! Le nombre est bien ' + number_win;
        document.getElementById('container').style.background = '#14c214';
        document.getElementById('header').style.background = 'grey';
        document.getElementById('ecran').style.background = 'grey';
        document.getElementById('footer').style.background = 'grey';
        document.getElementById('nbr_ext').style.display = "none";
        document.getElementById('input').style.display = "none";
    }else{
        document.getElementById('result').textContent = ' perdu !!';
        i++;
    }


    switch (i) {

        case 1:
            if (number_test > number_win) {
                document.getElementById('result_1').textContent = number_test + " plus petit";
            }else{
                document.getElementById('result_1').textContent = number_test + " plus grand";
            }
            break;
        case 2:
            if (number_test > number_win) {
                document.getElementById('result_2').textContent = number_test + " plus petit";
            }else{
                document.getElementById('result_2').textContent = number_test + " plus grand";
            };
            break;
        case 3:
            if (number_test > number_win) {
                document.getElementById('result_3').textContent = number_test + " plus petit";
            }else{
                document.getElementById('result_3').textContent = number_test + " plus grand";
            }
            break;
        default:
            break;
    }
    if (i > essai) {
        document.getElementById('ecran').style.display = "none";
        document.getElementById('input').style.display = "none";
        window.location.reload();
    }
    if(i > (essai-1)){
        document.getElementById('btn').value = "RECOMMENCER";
        document.getElementById('nbr_ext').style.display = "none";
    }
}