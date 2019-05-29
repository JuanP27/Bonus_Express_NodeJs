const {materias} = require ('./materias') 

id = 1;

let materiaEst1 = materias.find( materiaEst1 => materiaEst1.id === id)
setTimeout (function(){
texto1 = ("\n" + "El curso se llama " + materiaEst1.nombre + ", su codigo es " + materiaEst1.id + " tiene una duracion de " + materiaEst1.duracion + " horas y tiene un valor de " + materiaEst1.valor + " de pesos." + "\n")
},2000);

id = 2;

let materiaEst2 = materias.find( materiaEst2 => materiaEst2.id === id)
setTimeout (function(){
console.log("El curso se llama " + materiaEst2.nombre + ", su codigo es " + materiaEst2.id + " tiene una duracion de " + materiaEst2.duracion + " horas y tiene un valor de " + materiaEst2.valor + " de pesos." + "\n")
},4000);

id = 3;

let materiaEst3 = materias.find( materiaEst3 => materiaEst3.id === id)
setTimeout (function(){
console.log("El curso se llama " + materiaEst3.nombre + ", su codigo es " + materiaEst3.id + " tiene una duracion de " + materiaEst3.duracion + " horas y tiene un valor de " + materiaEst3.valor + " de pesos.")
},6000);