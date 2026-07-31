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
// let mayor, centro, menor;


// if (num1 >= num2 && num1 >= num3) {
//     mayor = num1;
    
//     if (num2 >= num3) {
//         centro = num2;
//         menor = num3;
//     } else {
//         centro = num3;
//         menor = num2;
//     }
// } 

// else if (num2 >= num1 && num2 >= num3) {
//     mayor = num2;
//     if (num1 >= num3) {
//         centro = num1;
//         menor = num3;
//     } else {
//         centro = num3;
//         menor = num1;
//     }
// } 

// else {
//     mayor = num3;
//     if (num1 >= num2) {
//         centro = num1;
//         menor = num2;
//     } else {
//         centro = num2;
//         menor = num1;
//     }
// }

// console.log("Número ingresados: " + num1 + ", " + num2 + ", " + num3)
// console.log("Ordenados de mayor a menor: " + mayor + ", " + centro + ", " + menor);
// console.log("Ordenados de menor a mayor: " + menor + ", " + centro + ", " + mayor);