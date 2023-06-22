i = 0;
number_win = Math.floor(Math.random() * 10);

function verif(number_test) {

    if (number_test == number_win) {
        document.getElementById('result').textContent = ' gagné !!';
        i++;
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
}