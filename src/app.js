import {perfiles} from './persona.js';


$('#title').click(function(){
	let cantidad = $('#cantidad').val();
	perfiles(cantidad);
	console.clear();
});

