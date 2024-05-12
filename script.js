

const display = document.getElementById("display");

function appendString(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function removeOne() {
    display.value = display.value.toString().slice(0, -1);
}