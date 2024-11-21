console.log("Hello World")

function sum(a, b){
    return a+b;
}

console.log(sum(7,3));
module.exports = { sum }; 

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar){
    let euros = dollar / oneEuroIs.USD;
    let yenes = euros * oneEuroIs.JPY;
    return Number(yenes.toFixed(2));
};

function fromEuroToDollar(euro){
    let dolares = euro * oneEuroIs.USD;
    return Number(dolares.toFixed(4));
};

function fromYenToPound(yen){
    let euros = yen / oneEuroIs.JPY;
    let libras = euros * oneEuroIs.GBP;
    return Number(libras.toFixed(5));
};


// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen }