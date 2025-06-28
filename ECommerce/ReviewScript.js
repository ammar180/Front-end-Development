
function Submit() {
    var countre = 0;
    var theYesEls = document.querySelectorAll(".yes");
    theYesEls.forEach(e => {
        if (e.checked) {
            countre++;
        }
    });

    alert
(`Thank you for your feedback!
Total "Yes" points: ${countre}`);
}