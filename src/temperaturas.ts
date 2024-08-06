function CelsiusAFahrenheit (Celsius:number):number{

  return Celsius * 9/5 + 32

}

function FahrenheitACelsius (Fahrenheit:number):number{

    return (Fahrenheit - 32) * 5/9

}

let temperaturaCelsius: number = 10
let temperaturaFahrenheit: number = 100

let CelsiusconvertidoAFahrenheit: number = CelsiusAFahrenheit(temperaturaCelsius)
let FahrenheitconvertidoACelsius: number = FahrenheitACelsius(temperaturaFahrenheit)


console.log(`Temperatura en Celsius: ${temperaturaCelsius}°C`)
console.log(`convertido a Fahrenheit: ${CelsiusconvertidoAFahrenheit.toFixed(2)}°F`)

console.log(`Temperatura en Fahrenheit: ${temperaturaFahrenheit}°F`)
console.log(`convertido a Celsius: ${FahrenheitconvertidoACelsius.toFixed(2)}°C`)
