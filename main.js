let frange = document.getElementById('frange');
let srange = document.getElementById('srange');
let trange = document.getElementById('trange');
let finput = document.getElementById('finput');
let sinput = document.getElementById('sinput');
let tinput = document.getElementById('tinput');
let result = document.getElementById('result');

function rangeFirst() {
    let p = frange.value;
    finput.innerHTML = p;
    // console.log(frange.value)
}

function rangeSecond() {
    let n = srange.value;
    sinput.innerHTML = n;
    // console.log(srange.value)

}

function rangeThird() {
    let r = trange.value;
    tinput.innerHTML = r;
    // console.log(trange.value)
}


function calculateEMI() {
    let p = parseInt(frange.value);
    let n = parseInt(srange.value) * 12; // Convert years to months
    let r = parseFloat(trange.value);

    let m = (r / 12) / 100;
    let emi = (p * m * Math.pow(1 + m, n)) / (Math.pow(1 + m, n) - 1);
    result.innerHTML = `&#8377; ${Math.round(emi)}`
}