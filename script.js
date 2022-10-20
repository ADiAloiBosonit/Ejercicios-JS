//Ejercicio 1

const arrNames = [
  { id: 1, name: "Pepe" },
  { id: 2, name: "Juan" },
  { id: 3, name: "Alba" },
  { id: 4, name: "Toby" },
  { id: 5, name: "Lala" },
];

var arrResult = arrNames.find((o) => o.id == 3);

console.log("\nResultado ejercicio 1: ");
console.log(arrResult);

//Ejercicio 2

const arrDirty = [NaN, 0, 5, false, -1, "", undefined, 3, null, "test"];

function valoresTruthy(arr) {
  return arr.filter((values) => {
    if (values) {
      return values;
    }
  });
}

console.log("\nResultado ejercicio 2: ");
console.log(valoresTruthy(arrDirty));

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

console.log("\nResultado ejercicio 3: ");
console.log(isCapital(arrCities));

//Ejercicio 4

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

let newArr = arrNumber1.slice();
newArr.push(arrNumber2);
newArr.push(arrNumber3);

console.log("\nResultado ejercicio 4: ");
console.log(newArr);

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
    } else if (city.capital === true && city.country === "Spain") {
      city.isSpain = true;
      return city;
    } else {
      city.isSpain = false;
      return city;
    }
  });
}
console.log("\nResultado ejercicio 5: ");

console.table(isSpainFun(arrCities2));

//Ejercicio 6

function roundedResult(numFloat, decimales) {
  console.log(
    Math.round(numFloat * Math.pow(10, decimales)) / Math.pow(10, decimales)
  );
}
console.log("\nResultado ejercicio 6: ");
roundedResult(2.123, 2);
roundedResult(1.123456789, 6);

//Ejercicio 7

function returnFalsyValues(objA, x) {
  return Object.keys(objA).reduce((value, key) => {
    if (!x(objA[key])) {
      value[key] = objA[key];
      return value;
    }
    return value;
  }, {});
}

const result = returnFalsyValues(
  { a: 1, b: "2", c: 3, d: "4" },
  (x) => typeof x === "string"
);

console.log("\nResultado ejercicio 7: ");
console.log(result);

//Ejercicio 8
const data = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
const kb = 1000;

/*Ejemplo con parametro 1000 bytes ->
Math.log = base 10 elevado a n numero de 0 de bytes*/

function fromBytesToFormattedSizeUnits(nBytes, nDigits) {
  let resPot = Math.floor(Math.log(nBytes) / Math.log(kb)); // resultado potencia = 3/3 = 1 byte
  nBytes = nBytes / Math.pow(kb, resPot); //bytes = 1000 / (1000*1)

  const size = data[resPot]; //Resultado potencia = 1 -> posicion 1 [kb]
  return nBytes.toPrecision(nDigits) + size;
}

const resultBytes = fromBytesToFormattedSizeUnits(1000);

console.log("\nResultado ejercicio 8: ");
console.log(resultBytes); // 1KB

//Ejercicio 9
const myObject = { NamE: "Charles", ADDress: "Home Street" };

function myObjLowercase(objInput) {
  return Object.keys(objInput).reduce((value, key) => {
    value[key.toLowerCase()] = objInput[key];
    return value;
  }, {});
}

console.log("\nResultado ejercicio 9: ");
console.log(myObjLowercase(myObject)); // { name: 'Charles', address: 'Home Street' }

//Ejercicio 10

function removeHTMLTags(str) {
  return str.replace(/<\/?[^>]+>/g, "");
}

console.log("\nResultado ejercicio 10: ");
console.log(
  removeHTMLTags("<div><span>lorem</span><strong>ipsum</strong></div>")
);

//Ejercicio 11

function splitArrayIntoChunks(arr, arrElements) {
  for (let i = 0; arr.length > 0; i++) {
    newArr = arr.splice(0, arrElements);
    console.log(newArr);
  }
}

console.log("\nResultado ejercicio 11: ");
splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);