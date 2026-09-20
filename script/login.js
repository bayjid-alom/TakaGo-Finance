document.getElementById("login-btn").addEventListener("click", function () {
    const number = getValueFromInput("login-number");
    const pin = getValueFromInput("login-pin");

    if (number === "") {
        alert("Please enter your mobile number.");
        return;
    }

    if (!number.startsWith("01")) {
        alert("Mobile number must start with 01.");
        return;
    }

    if (number.length !== 11) {
        alert("Mobile number must be 11 digits.");
        return;
    }

    if (typeof Number(number) !== "number" || isNaN(Number(number))) {
        alert("Mobile number must contain only numbers.");
        return;
    }

    if (pin === "") {
        alert("Please enter your PIN.");
        return;
    }

    if (typeof Number(pin) !== "number" || isNaN(Number(pin))) {
        alert("PIN must contain only numbers.");
        return;
    }

    if (pin.length !== 4) {
        alert("PIN must be exactly 4 digits.");
        return;
    }

    if (pin === "1111") {
        alert("Login successful!");
        window.location.assign("home.html")
    }

    else{
        alert("Invalid PIN.");
        return
    }

});