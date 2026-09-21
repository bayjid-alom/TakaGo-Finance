document.getElementById("addmoney-btn").addEventListener("click", function () {

    const bank = getValueFromInput("bank-select");

    if (bank === "Choose your bank") {
        alert("Please choose a bank.");
        return;
    }

    const number = getValueFromInput("account-number");

    if (number === "") {
        alert("Please enter your account number.");
        return;
    }

    if (!number.startsWith("01")) {
        alert("Account number must start with 01.");
        return;
    }

    if (number.length !== 11) {
        alert("Account number must be 11 digits.");
        return;
    }

    if (typeof Number(number) !== "number") {
        alert("Account number must contain only numbers.");
        return;
    }

    const amount = getValueFromInput("add-amount");

    if (amount === "") {
        alert("Please enter an amount.");
        return;
    }

    if (typeof Number(amount) !== "number") {
        alert("Amount must contain only numbers.");
        return;
    }

    if (Number(amount) <= 0) {
        alert("Amount must be greater than 0.");
        return;
    }

    const pin = getValueFromInput("add-pin");

    if (pin === "") {
        alert("Please enter your PIN.");
        return;
    }

    if (typeof Number(pin) !== "number") {
        alert("PIN must contain only numbers.");
        return;
    }

    if (pin.length !== 4) {
        alert("PIN must be exactly 4 digits.");
        return;
    }

    const currentAmount = getBalance();
    const newBalance = currentAmount + Number(amount);

    if (pin === "1111") {
        alert("Money added successfully!");
        setBalance(newBalance);
    }

    else {
        alert("Invalid PIN.");
        return;
    }

});