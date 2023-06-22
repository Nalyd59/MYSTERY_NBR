i = 0;
number_win = Math.floor(Math.random() * 10);

function verif(number_test){
    niv = document.getElementById('select').value;
    switch (niv) {
        case 1:
            alert('lvl 1');
            essai = 3;
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
                    document.getElementById('result_1').textContent = number_test;
                    break;
                case 2:
                    document.getElementById('result_2').textContent = number_test;
                    break;
                case 3:
                    document.getElementById('result_3').textContent = number_test;
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
            break;

        case 2:
            alert('lvl 2');
            essai = 2;
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
                    document.getElementById('result_1').textContent = number_test;
                    break;
                case 2:
                    document.getElementById('result_2').textContent = number_test;
                    break;
                case 3:
                    document.getElementById('result_3').textContent = number_test;
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
            break;
        
        case 3:
            alert('lvl 3');
            essai = 1;
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
                    document.getElementById('result_1').textContent = number_test;
                    break;
                case 2:
                    document.getElementById('result_2').textContent = number_test;
                    break;
                case 3:
                    document.getElementById('result_3').textContent = number_test;
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
            break

        default:
            break;
    }
}