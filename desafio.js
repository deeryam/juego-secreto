let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
lenguagesDeProgramacion.push('Java', 'Ruby','GoLang')


console.log(lenguagesDeProgramacion);

//Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion de manera inversa.
function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesReversoSeparadamente();
//Crea una función que calcule la media de los elementos en una lista de números.
  function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 90, 40, 50];
  let media = calcularMedia(numeros);
  console.log('Média:', media);

  // Crea una función que muestre en la consola el número mayor y menor en una lista.
  function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numero = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numero);

  //Crea una función que retorne la suma de todos los elementos en una lista.
  function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numeroz = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numeroz);
  console.log('Suma:', suma);

 //Crea una función que reciba una lista como parámetro y retorne el índice de un elemento 
 // también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.

 function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
