 const opciones = {
 	id:{
 		demand: true,
 		alias:'i'
 	},
 	nombre:{
 		demand: true,
 		alias: 'n'
 	},
 	cedula:{
 		demand: true,
 		alias: 'c'
 	}
 }

const {materias} = require ('./materias');
const fs = require('fs');

const express = require('express')
const app = express()

const argv = require('yargs')
	.command ('inscribir', 'Realizar incripcion a un curso', opciones)
	.argv

let  crearArchivo = (materias)=>{
	let inscMateria = materias.find( materiaEst => materiaEst.id === argv.id)
	if (argv.id != 1 && argv.id != 2 && argv.id != 3 ) {
		console.log("El id ingresado no es valido, por favor ingrese un id existente");
		id = 1;

		let materiaEst1 = materias.find( materiaEst1 => materiaEst1.id === id)
		setTimeout (function(){
		console.log("\n" + "El curso se llama " + materiaEst1.nombre + ", su codigo es " + materiaEst1.id + " tiene una duracion de " + 
		materiaEst1.duracion + " horas y tiene un valor de " + materiaEst1.valor + " de pesos." + "\n")
		},2000);

		id = 2;

		let materiaEst2 = materias.find( materiaEst2 => materiaEst2.id === id)
		setTimeout (function(){
		console.log("El curso se llama " + materiaEst2.nombre + ", su codigo es " + materiaEst2.id + " tiene una duracion de " + 
		materiaEst2.duracion + " horas y tiene un valor de " + materiaEst2.valor + " de pesos." + "\n")
		},4000);

		id = 3;

		let materiaEst3 = materias.find( materiaEst3 => materiaEst3.id === id)
		setTimeout (function(){
		console.log("El curso se llama " + materiaEst3.nombre + ", su codigo es " + materiaEst3.id + " tiene una duracion de " + 
		materiaEst3.duracion + " horas y tiene un valor de " + materiaEst3.valor + " de pesos.")
		},6000);
		return;
	};
	texto = 'El estudiante ' + argv.nombre + ' con la cedula ' + argv.cedula +' se ha matriculado en el curso de ' + inscMateria.nombre + 
	' que tiene una duracion de ' + inscMateria.duracion + ' con un valor de ' + inscMateria.valor;
	app.get('/', function (req, res) {
	  res.send(texto)
	})	 
	app.listen(3000)
}

crearArchivo(materias);