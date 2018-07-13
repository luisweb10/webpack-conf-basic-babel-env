export function perfiles(cantidad){
	$.ajax({
	  url: `https://randomuser.me/api/?results=${cantidad}`,
	  dataType: 'json',
	  success: function(data) {
	  	$( "#lista" ).empty();
	    console.log(data.results);
	    for (let i = 0; i<data.results.length; i++) {
	   		console.log(data.results[i].name.first)
	   		$( "#lista" ).append( "<li>"+data.results[i].name.first+"</li>" ); 	
	    }
	  }
	});
}

//export {Persona}