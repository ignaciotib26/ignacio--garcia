'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {
	nombre: "Jose Ignacio Garcia Gaviria",
	profesion: "Desarrollador Junior",
	correo: "ignacio.garcia1@udea.edu.co",
	telefono: "+57 3107064924",
	perfil: " Analista en Sistemas de Informacion, Especialista en Seguridad Informatica dominio del portugues estudiantes de ingles nivel A2",
	habilidades: {
		comunicativas:['Escucha activa, ','Comunicacion Verbal, ','Actitud Positiva, ','Tolerancia, ','Respeto, ','Empatia, ','Orden, ','Apoyo'],
		gestion: ['Liderazgo, ','Comunicacion, ','Responsabilidad,','Trabajo en Equipo, ','Análisis para toma de Decisiones'],
		tecnicas: ['Seguridad Informatica, ','Programador Python, ','Etical Hacking, ',' Programador Javascript']
	},
	hobbies: ['Hacer Globos, ', 'hacer deporte, ', 'Escuchar musica, ', 'programar ', 'matematicas ', 'leer']
}

// Dejar intácto a partir de aquí.
// Constantes SENA:
const banner = "https://www.ficaconsulting.com.do/cw/images/fica/art/20181023.jpg";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	// Sección lateral:
	$('#banner').html('<img src="'+banner+'" class="img-fluid mt-2" alt="">');
	$('#perfil').html(persona.perfil);
	$('#comunicativas').html(persona.habilidades.comunicativas);
	$('#gestion').html(persona.habilidades.gestion);
	$('#tecnicas').html(persona.habilidades.tecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	var aficiones = persona.hobbies.map(function(bar){
		return '<li class="list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}