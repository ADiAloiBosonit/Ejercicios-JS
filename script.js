//Ejercicio 1

const arrNames = [
  { id: 1, name: "Pepe" },
  { id: 2, name: "Juan" },
  { id: 3, name: "Alba" },
  { id: 4, name: "Toby" },
  { id: 5, name: "Lala" },
];

let obj = arrNames[2];

//console.log(obj);

//Ejercicio 2

const arrDirty = [NaN, 0, 5, false, -1, "", undefined, 3, null, "test"];

function valoresTruthy(arr) {
  return arr.filter((values) => {
    if (values) {
      return values;
    }
  });
}
//console.log(valoresTruthy(arrDirty));

//Ejercicio 3

const arrCities = [
  { city: "Logroño", country: "Spain", capital: false },
  { city: "Paris", country: "France", capital: true },
  { city: "Madrid", country: "Spain", capital: true },
  { city: "Rome", country: "Italy", capital: true },
  { city: "Oslo", country: "Norway", capital: true },
  { city: "Jaén", country: "Spain", capital: false },
];

// for (let i = 0; i < arrCities.length; i++) {
//   if (arrCities[i].capital === false) {
//     return 
//   } 
// }

function isCapital(arr) {
  return arr.filter((boolCapital) => {
    for (let i = 0; i < arr.length; i++) {
      if (boolCapital.capital === false) {
        return boolCapital;
      } 
    }
  });
}

console.log(isCapital(arrCities));
