function numInput(mensaje) {
    let numero;
    while (true) {
        let entrada = prompt(mensaje);
        numero = parseFloat(entrada);
        
        
        if (!isNaN(numero)) {
            break;
        }
        alert("Error: El valor ingresado no es un número válido. Por favor, intenta de nuevo.");
    }
    return numero;
}


let celcius = numInput("Ingresa la temperatura que desa convertir: ");

let fahrenheint = (celcius * 9/5) + 32;
let kelvin = celcius + 273.15;

console.log("La temperatura ingresada fue: " + celcius + "°C");
console.log("Su conversión a grados Fahrenheint es igual a " + fahrenheint + "°F");
console.log("Su conversión a Kelvin es igual a " + kelvin + "K");
