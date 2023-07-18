let arreglo = [25, 30, 28, 32, 29, 27]
let mayor = arreglo[0];

for (let i = 1; i < arreglo.length; i++) {
  if (arreglo[i] > mayor) {
    mayor = arreglo[i];
  }
}

console.log("La temperatura mayor es: ", mayor);