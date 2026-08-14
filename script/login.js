const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function () {

    const numberInput = document.getElementById("input-number");
    const number = numberInput.value.trim();

    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value.trim();


    // Mobile number validation
    if (number === "") {
        alert("Please enter your mobile number to continue.");
        return;
    }

    else if (!number.startsWith("01")) {
        alert("Invalid mobile number. The number must start with 01.");
        return;
    }

    else if (isNaN(number)) {
        alert("Invalid mobile number. Please enter digits only.");
        return;
    }

    else if (number.length !== 11) {
        alert("Invalid mobile number. Please enter exactly 11 digits.");
        return;
    }


    // PIN validation
    if (pin === "") {
        alert("Please enter your 4-digit PIN to continue.");
        return;
    }

    else if (isNaN(pin)) {
        alert("Invalid PIN. Please enter digits only.");
        return;
    }

    else if (pin.length !== 4) {
        alert("Invalid PIN. Your PIN must contain exactly 4 digits.");
        return;
    }

    else if (pin !== "1234") {
        alert("Incorrect PIN. Please enter the correct PIN and try again.");
        return;
    }

    // Login successful
    else {
        alert("Login successful! Welcome back.");
        window.location.assign("home.html")
    }
});