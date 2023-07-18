let arreglo = [5, 10, 12, -1, 3, 24, -10, -2, 7, -45]
let cont = 0;

for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] > 0) {
    cont++
  }
}

console.log("los numeros positivos son: "+cont);