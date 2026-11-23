import { saludar, despedida } from "./Saludo.mjs";

console.log(saludar("Ana"))
console.log(despedida("Ana"))

import Estudiante from "./Estudiante";

let estudiante1= new Estudiante();
estudiante1.nombre = "Ana";
estudiante1.carrera = "ISW";