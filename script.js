document.querySelector("#claim").addEventListener("click", function(e) {
    const firstName = document.getElementById("first").value;
    const lastName = document.getElementById("last").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if(firstName.trim() === "") {
        document.getElementById("empty-name").style.display = "block";
        document.getElementById("first").style.backgroundImage ="url(images/icon-error.svg)";
        document.getElementById("first").style.backgroundRepeat = "no-repeat";
        document.getElementById("first").style.backgroundPosition = "right"
        document.getElementById("first").style.backgroundSize = "17px"
    }
    else {
        document.getElementById("empty-name").style.display = "none";
        document.getElementById("first").style.backgroundImage ="";
    }

    if(lastName.trim() === "") {
        document.getElementById("empty-last").style.display = "block";
        document.getElementById("last").style.backgroundImage ="url(images/icon-error.svg)";
        document.getElementById("last").style.backgroundRepeat = "no-repeat";
        document.getElementById("last").style.backgroundPosition = "right"
        document.getElementById("last").style.backgroundSize = "17px"
    }
    else {
        document.getElementById("empty-last").style.display = "none";
        document.getElementById("last").style.backgroundImage ="";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        document.getElementById("invalid-email").style.display = "block";
        document.getElementById("email").style.backgroundImage ="url(images/icon-error.svg)";
        document.getElementById("email").style.backgroundRepeat = "no-repeat";
        document.getElementById("email").style.backgroundPosition = "right"
        document.getElementById("email").style.backgroundSize = "17px"
    }
    else {
        document.getElementById("invalid-email").style.display = "none";
        document.getElementById("email").style.backgroundImage ="";
    }

    if(password.trim() === "") {
        document.getElementById("empty-password").style.display = "block";
        document.getElementById("password").style.backgroundImage ="url(images/icon-error.svg)";
        document.getElementById("password").style.backgroundRepeat = "no-repeat";
        document.getElementById("password").style.backgroundPosition = "right"
        document.getElementById("password").style.backgroundSize = "17px"
    }
    else {
        document.getElementById("empty-password").style.display = "none";
        document.getElementById("password").style.backgroundImage ="";
    }
})