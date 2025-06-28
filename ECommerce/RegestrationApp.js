var userNameValue = null;
var passwordValue = null;
var ageValue = null;
var genderValue = null;
var phoneNumberValue = null;
var users = [
    {
        userName: "User2",
        password: "Pass#2",
        gender: "Female",
        phoneNumber: "01011223234",
        age: 44
    }
];


// Sign UP Funcitons
function declearation() {
    userNameValue = document.getElementById("SingUp-txtUserName").value;
    passwordValue = document.getElementById("SingUp-txtPass").value;
    ageValue = document.getElementById("SingUp-age").value;
    genderValue = document.querySelector("#SignUpForm input[name='singup-gender']:checked").value;
    phoneNumberValue = document.getElementById("SingUp-phoneNumber").value;

}
function funcSignUp() {
    declearation();
    validation();
}

function validation() {
    //Validate Pass
    //existansTest()
    if (validatePass(passwordValue) && validatePhone() && validateAge()) {
        //Record User
        saveUser();
    }
}
function existansTest() {
    users.some(e => {
        if (e.userName == userNameValue) {
            alert("Username is unique, Please Change username!");
            return false;
        }
        else
            return true;
    });
}
function validatePass(myPass) {
    //Length
    if (myPass.length > 8) {
        alert("The Password Must be less than 8 chars");
        return false;
    }

    //Regex
    const lettersRegex = /[a-z]|[A-Z]/;
    const numbers = /[0-9]/;
    if (!lettersRegex.test(myPass) || !numbers.test(myPass)) {
        alert(", Password composed of char and integers");
        return false;
    }
    return true
}

function validatePhone() {
    // Phone Number is 11
    if (phoneNumberValue.length != 11) {
        alert("Phone Number Is 11!");
        return false;
    }
    else
        return true;
}

function validateAge() {
    // Age is in between 18 and 60
    if (ageValue > 18 && ageValue < 60) {
        return true;
    }
    else {
        alert("Age is in between 18 and 60");
        return false;
    }
}
function saveUser() {
    let user = new Object;
    user.userName = userNameValue;
    user.password = passwordValue;
    user.gender = genderValue;
    user.phoneNumber = phoneNumberValue;
    user.age = ageValue;

    users.push(user);

    alert("User Saved Successefully!");
    document.querySelectorAll('#SingUp-txtUserName, #SingUp-txtPass, #SingUp-phoneNumber, #SingUp-age').forEach(e => e.value = '');
}

// Login Fuctions
function funcLogin() {
    let theUserName = '';
    let thePass = '';
    theUserName = document.getElementById("Login-txtUserName").value;
    thePass = document.getElementById("Login-txtPass").value;

    if (theUserName == '' || thePass == '')
        alert("Please fill the data befor login");
    else {
        users.some(e => {
            if (e.userName == theUserName && e.password == thePass) {
                alert(`Done!`);
                window.location.assign("ReviewIndex.html");
            }
            else {
                alert("User Not Exist");
            }
        });
    }

}

// Forget Password Fuctions
function funcForgetPass() {
    let theUserName = '';
    let thePass = '';
    theUserName = document.getElementById("fp-userName").value;
    thePass = document.getElementById("fp-txtPass").value;

    if (theUserName == '' || thePass == '')
        alert("Please fill the data befor login");
    else {
        users.some(e => {
            if (e.userName == theUserName) {
                if (validatePass(thePass)) {
                    alert(`old passwored: ${e.password} Be -> ${thePass}`);
                    e.password = thePass;
                }
            }
            else{
                alert("User Not Exist!");
            }
        });
    }
}