calcResult = (form) => {
    let wrightAnswers = 
    {
        "q1" : 1,
        "q2": 3,
        "q3" : 4
    };
    let result = 0; 
    let userAnswers = new FormData(form);
    userAnswers.forEach((value, key) => {
        if(key === "userName")
            document.getElementById("User").innerHTML = value;
        
        else if(value == wrightAnswers[key])
            result++;
    });
    document.getElementById("CountResult").innerHTML = result;
    return false;
}
