window.onload = function () {
    var form = document.getElementsByClassName('form-login');
    var email = document.getElementById('email');
    var errorEmail = document.getElementsByClassName('error-Email');

    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q',
  'r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L',
  'M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var number = ['0','1','2','3','4','5','6','7','8','9']
  var symbol = ['!','$','%','/','(','=',')','_','-','>','<','*','+','?','¿','|','°',]
  var lettersNum = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q',
  'r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L',
  'M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']

    //emial validation

    var email = document.getElementById('email');
    var errorEmail = document.getElementsByClassName('error-email');

    email.addEventListener('blur', emailBlur);
    email.addEventListener('focus', emailFocus);

    function emailBlur() {
        var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.value === '') {
            errorEmail[0].textContent = 'please enter a email';
            emailInput = false;
        }
        else if (!validEmail.test(email.value)) {
            errorEmail[0].textContent = 'please enter a valid email';
            emailInput = false;
        }
        else emailInput = true;
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
            passwordInput = false;
        }
        else if (password.value.length < 8) {
            errorPassword[0].textContent = '8 or more characters with numbers and letters';
            passwordInput = false;
        }
        else
            if (!validatePass()) {
                errorPassword[0].textContent = 'error';
                passwordInput = false;
            }
            else passwordInput = true;
    }
    function validatePass() {

        var abcB = false;

        var numB = false;

        for (var i = 0; i < password.value.length; i++) {
            if (!numB) {
                for (let j = 0; j < number.length; j++) {
                    if (password.value[i] == number[j]) {
                        numB = true;

                        break;
                    }
                }
            }

            if (!abcB) {
                for (let j = 0; j < letters.length; j++) {
                    if (password.value[i] == letters[j]) {
                        abcB = true;
                        break;
                    }
                }
            }
            if (numB && abcB) {
                break;
            }
        }
        if (numB && abcB) {
            return true;
        }

        else {
            return false;
        }
    }
    function passwordFocus() {
        errorPassword[0].textContent = '';
    }
    
    // botton
    
    var emailInput = true
    var passwordInput = true
    
    
    document.getElementById('button-login').onclick = function () {
        if (emailInput != false, passwordInput != false) {
            alert('login');
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + email.value
                + '&password=' + password.value)
                .then(function (response) {
                    return response.json()
                })
                .then(function (jsonResponse) {
                    console.log("json", jsonResponse)
                    if (jsonResponse.success) {
                        console.log("Good", jsonResponse)
                        alert('logged');
                        /* < --- LÓGICA CUANDO LA REQUEST ES EXITOSA Y MOSTRAR UN ALERT --- > */
                    } else {
                        throw jsonResponse
                    }
                })
                .catch(function (error) {
                    console.warn('Error', error)
                    alert('error del feth');
                    /*  < --- LÓGICA CUANDO LA REQUEST SALE MAL --- > */
                })
        }
        else alert('error')
    }



}