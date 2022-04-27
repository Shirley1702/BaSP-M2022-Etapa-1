window.onload = function () {
    var form = document.getElementsByClassName('form-login');
    var email = document.getElementById('email');
    var errorEmail = document.getElementsByClassName('error-Email');

    //emial validation

    var email = document.getElementById('email');
    var errorEmail = document.getElementsByClassName('error-email');

    email.addEventListener('blur', emailBlur);
    email.addEventListener('focus', emailFocus);

    function emailBlur() {
        var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value === '') {
            errorEmail[0].textContent = 'please enter a email';
        }
        else if (!validEmail.test(email.value)) {
            errorEmail[0].textContent = 'please enter a valid email';
        }
    }
    function emailFocus() {
        errorEmail[0].textContent = '';
    }

    //password validation

    var password = document.getElementById('password');
    var errorPassword = document.getElementsByClassName('error-password')

    password.addEventListener('blur', passwordBlur);
    password.addEventListener('focus', passwordFocus);

    function passwordBlur() {
        if (password.value === '') {
            errorPassword[0].textContent = 'please enter your password';
        }
        else if (password.value.length < 8) {
            errorPassword[0].textContent = '8 or more characters with numbers and letters';
        }
        else {
            for (i = 0; i < password.value.length; i++) {
                if (!number.includes(password.value[i]) && !letters.includes(password.value[i])) {
                    errorPassword[0].textContent = 'requires numbers and letters';
                }
            }
        }
    }
    function passwordFocus() {
        errorPassword[0].textContent = '';
    }
    document.getElementById('continue').onclick = function () {
        if (errorEmail[0], errorPassword[0]) {
            alert('You must complete the entire form');
        }
    }
}