var usernameValue = "";
var passwordValue = "";

// Valid Data
// var usernameValue = "Ammar Ahmed";
// var passwordValue = "MyStrongPassword123$";
var usernameField = document.getElementById('userName');
var passwordField = document.getElementById('pass');
var passInfo = document.getElementById('passwordInfo');
var nameInfo = document.getElementById('userNameInfo');
var user = new Object;
var arrUsers = new Array();

function signUp() {
    //retrieve the values entered by the user
    usernameValue = usernameField.value;
    passwordValue = passwordField.value;

    if (document.getElementById('btnSubmint').value == 'Login') {
        if(arrUsers.some((e, i, arr) =>  e.userName == usernameValue && e.password == passwordValue)){ //(usernameValue == user.userName && passwordValue == user.password) {
            alert(`user => ${user.userName} login Successefully!`);
            window.location.assign("home.html");
        }
        else {
            alert(`User Not Exest!`);
        }
    }
    else if (usernameValue === '' || passwordValue === '') {
        alert('Please fill in both username and password fields');
    }
    else if (document.getElementById('btnSubmint').value == 'Sign Up') {
        if (validateUsername() && validatePassword()) {
            transformersToLogin();
        }
    }
}

function validateUsername() {
    const minLength = 3;

    if (usernameValue.length >= minLength) {
        nameInfo.style.color = "green";
        nameInfo.textContent = "UserName is Valid";
        return true;
    }
    else {
        nameInfo.style.color = "red";
        nameInfo.textContent = "UserName is not Valid";
        return false;
    }
}

function validatePassword() {
    const minLength = 5;

    // Check for password strength (e.g., contains at least one uppercase letter, lowercase letter, number, and special character)
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[$&+,:;=?@#|'<>.^*()%!-]/;

    if (passwordValue.length < minLength) {
        passInfo.style.color = 'red'
        passInfo.textContent = "Password should be at least 3 characters long";
        return false;
    } else if (
        !uppercaseRegex.test(passwordValue) ||
        !lowercaseRegex.test(passwordValue) ||
        !numberRegex.test(passwordValue) ||
        !specialCharRegex.test(passwordValue)
    ) {
        passInfo.style.color = 'red';
        passInfo.textContent = "Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character";
        return false;
    }
    else {
        passInfo.style.color = 'green';
        passInfo.textContent = "Password is strong";
        return true;
    }
}
function transformersToLogin() {
    usernameField.value = '';
    passwordField.value = '';
    nameInfo.textContent = '';
    passInfo.textContent = '';
    user = new Object();
    user.userName = usernameValue;
    user.password = passwordValue;
    arrUsers.push(user);
    alert('User Saved Successefully!');

} 
