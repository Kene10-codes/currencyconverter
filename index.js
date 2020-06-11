//Mobile version of the JS

const inputValue = document.getElementById('myInputs');

inputValue.addEventListener('input', function(event) {
    let myConverted = event.target.value;
    let myDollarValue = document.getElementById('dollarsId');
    myDollarValue.innerHTML = myConverted * 387.5;
    let poundsValue = document.getElementById('poundsId');
    poundsValue.innerHTML = myConverted * 498.7;
    let eurosValue = document.getElementById('eurosId');
    eurosValue.innerHTML = myConverted * 440.8;
})



const inserted = document.getElementById('myInput');

inserted.addEventListener('input', function(event) {
    let converted = event.target.value;
    let dollarValue = document.getElementById('dollarId');
    dollarValue.innerHTML = converted * 387.5;
    let poundValue = document.getElementById('poundId');
    poundValue.innerHTML = converted * 493.7;
    let euroValue = document.getElementById('euroId');
    euroValue.innerHTML = converted * 440.8;
})


