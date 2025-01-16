const resultInput = document.getElementById('result')
function appendValue(value) {
    resultInput.value += value;
}

function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value)
    } catch (error) {
        alert('error')
    }
}

function clearResult() {
    resultInput.value = "";
}

