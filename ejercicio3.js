let arreglo = [5, 10, 12, -1, 3, 24]
let mayor = arreglo[0];

for (let i = 1; i < arreglo.length; i++) {
  if (arreglo[i] > mayor) {
    mayor = arreglo[i];
  }
}

console.log("El número mayor es: ", mayor);