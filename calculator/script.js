let str = "";
let buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                str = eval(str);
                document.querySelector('.display').innerHTML = str;
            } catch (error) {
                document.querySelector('.display').innerHTML = 'Error';
            }
        } else if (e.target.innerHTML === 'C') {
            str = "";
            document.querySelector('.display').innerHTML = str;
        } else if (e.target.innerHTML === '←') {
            str = str.slice(0, -1);
            document.querySelector('.display').innerHTML = str;
        } else if (e.target.innerHTML === '%') {
            try {
                str = (parseFloat(str) / 100).toString();
                document.querySelector('.display').innerHTML = str;
            } catch (error) {
                document.querySelector('.display').innerHTML = 'Error';
            }
        }else {
            if (str === '0') {
                str = '';
            }
            str = str + e.target.innerHTML;
            document.querySelector('.display').innerHTML = str;
        }
    });
});
