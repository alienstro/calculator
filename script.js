

const display = document.getElementById("display");

function appendString(input) {
    const lastChar = display.value.slice(-1); 
    
    if ((input === '+' || input === '-' || input === '*' || input === '/') && (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/')) {
        display.value = display.value.slice(0, -1) + input;
    } else {
        display.value += input;
    }
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