var theUserName = '';

function funSubmit() {
    theUserName = document.getElementById('labUsername').innerHTML;
    window.alert(theUserName);
    window.location.assign("WelcomeName.html");
}
function Constracting(){
    document.getElementById("txtWelcome").innerHTML = theUserName;
}