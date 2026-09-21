// input theke value return korbe 
function getValueFromInput(id) {
    const inputElement = document.getElementById(id)
    const value = inputElement.value;
    console.log(id, "-", value)
    return value;
}



function getBalance() {
    const balanceInput = document.getElementById("balance")
    const balance = balanceInput.innerText;
    return Number(balance)
}



function setBalance(value) {
    const balanceInput = document.getElementById("balance")
    balanceInput.innerText = value;

}