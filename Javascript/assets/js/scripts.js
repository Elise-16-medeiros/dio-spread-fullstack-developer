var currentNumberWrapp = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber += 1;
    currentNumberWrapp.innerHTML = currentNumber;
}

function decrement() {
    currentNumber -= 1;
    currentNumberWrapp.innerHTML = currentNumber;
    
}