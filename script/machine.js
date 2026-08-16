console.log("Connected machine")

function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}


function getBalance(id) {
    const balanceElem = document.getElementById(id);
    const balance = balanceElem.innerText;
    return Number(balance);
}


function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}