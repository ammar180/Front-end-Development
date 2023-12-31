var theUserName = '';

function funSubmit() {
    theUserName = document.getElementById('userName').value;
    window.alert(theUserName);
    window.location.assign("WelcomeName.html");
}
function Constracting() {
    document.getElementById("txtWelcome").innerHTML = theUserName;
}
function validateForm() {
    let x = "";
    let y = "";
    x = document.forms["validationForm"]["password"].value;
    y = document.forms["validationForm"]["confPassword"].value;
    if (x.length < 8) {
        alert("Password must be Greater than 8 chars");
        return false;
    }
    else {
        if (!(x == y)) {
            alert("Password must be the same in password and Confairm Password!");
        }
        else {
            window.location.assign("WelcomeName.html");
            return true;
        }
    }

}