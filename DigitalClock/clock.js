// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
    const fullDate = time.toLocaleDateString('en-US', {weekday:'short'}) + ' ' + time.toLocaleDateString();

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Displaying the time
    document.getElementById("theHour").innerHTML = hour;
    document.getElementById("theMoment").innerHTML = min;
    document.getElementById("theSecond").innerHTML = sec;
    document.getElementById("theAmOrPm").innerHTML = am_pm;
    document.getElementById("H1Date").innerHTML = fullDate;
}

showTime();
