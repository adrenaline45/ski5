function check() {
    var name = document.myForm.fullName.value;
    var email = document.myForm.email.value;
    var message = document.myForm.message.value;
    var warning = document.getElementById("warning");
    if (name != "" && email != "" && message != "") {
        if (email.indexOf("@") >= 1) {
            document.myForm.button.setAttribute("type", "submit");
            warning.innerHTML = "";
        } else {
            warning.innerHTML = "Niste uneli e-mail u dobrom formatu.";
            warning.style.color = "red";
        }
    } else {
        warning.innerHTML = "Niste uneli sva polja.";
        warning.style.color = "red";
    }
}