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

function isCapital(arr) {
  return arr.filter((boolCapital) => {
    for (let i = 0; i < arr.length; i++) {
      if (boolCapital.capital === false) {
        return boolCapital;
      }
    }
  });
}

// console.log(isCapital(arrCities));

//Ejercicio 4

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

let newArr = arrNumber1.slice();
newArr.push(arrNumber2);
newArr.push(arrNumber3);

// console.log(newArr);

//Ejercicio 5

const arrCities2 = [
  { city: "Logroño", country: "Spain", capital: false },
  { city: "Bordeaux", country: "France", capital: false },
  { city: "Madrid", country: "Spain", capital: true },
  { city: "Florence", country: "Italy", capital: true },
  { city: "Oslo", country: "Norway", capital: true },
  { city: "Jaén", country: "Spain", capital: false },
];

function isSpainFun(arr) {
  return arr.map((city) => {
    if (city.capital === false && city.country === "Spain") {
      city.isSpain = true;
      return city;
    }
    city.isSpain = false;
    return city;
  });
}
console.log(isSpainFun(arrCities2));

//Ejercicio 6

function roundedResult(numFloat, decimales) {
  console.log(Math.round(numFloat * Math.pow(10, decimales))/Math.pow(10, decimales));
}

roundedResult(2.123, 2);
roundedResult(1.123456789, 6);
