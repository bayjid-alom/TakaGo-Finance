// input theke value return korbe 
function getValueFromInput(id) {
    const inputElement = document.getElementById(id)
    const value = inputElement.value;
    console.log(id, "-", value)
    return value;
}

