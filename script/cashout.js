document.getElementById("cashout-withdraw-btn").addEventListener("click", function () {

    const number = getValueFromInput("agent-number");

    // Number validation
    if (number.length !== 11) {
        alert("Invalid Number");
        return;
    }

    const balance = getBalance("balance");
    const cashoutAmount = Number(getValueFromInput("cashout-amount"));
    const newBalance = balance - cashoutAmount;

    // Amount validation
    if (cashoutAmount <= 0 || newBalance < 0) {
        alert("Invalid Amount!");
        return;
    }

    const pin = getValueFromInput("cashout-pin");

    // PIN validation
    if (pin !== "1234") {
        alert("Cashout Failed!");
        return;
    }

    // Update balance
    setBalance(newBalance);

    alert(
        `Cash Out Successful! $${cashoutAmount} has been withdrawn from your account to ${number} at ${new Date().toLocaleString()}.`
    );
});