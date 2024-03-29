// define a function multiplyByNineFifths(number)
function multiplyByNineFifths(number) {

    return number*(9/5)
}

function getFahrenheit(celsius) {
return multiplyByNineFifths(celsius) + 32;
}
console.log(`${getFahrenheit(10)}`)

// define a function getFahrenheit(celsius)

    // return multiplyByNineFifths(celsius) + 32;

//console.log(getFahrenheitResult); // call getFahrenheit();


// do the same thing starting from Fahrenheit to Celsius
const multiplyByFiveNiths = number => number * 5/9
const getCelsius = Fahrenheit => multiplyByFiveNiths(Fahrenheit - 32);
console.log(getCelsius(59));

