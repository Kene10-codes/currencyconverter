const inserted = document.getElementById('myInput');

inserted.addEventListener('input', function(event) {
    let converted = event.target.value;
    let dollarValue = document.getElementById('dollarId');
    dollarValue.innerHTML = converted * 387.5;
    let poundValue = document.getElementById('poundsId');
    poundValue.innerHTML = converted * 493.7;
    let euroValue = document.getElementById('euroId');
    euroValue.innerHTML = converted * 440.8;
})