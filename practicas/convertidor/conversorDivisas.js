

//Tras cargarse la página ...
countryStars = ["starCRC","starUSD","starCAD","starMXN","starVEF","starEUR","starRUB","starZAR","starKRW","starJPY"];

window.onload = function(){
	hideChecks();	
}

function hideChecks(){
	for(var i=0; i<countryStars.length; i++){
		document.getElementById(countryStars[i]).style.visibility="hidden";
    }
}

function check(name){
	if(document.getElementById(name).style.visibility == "hidden"){
        document.getElementById(name).style.visibility="visible"
    }
    else{document.getElementById(name).style.visibility="hidden";}
}

function clearInfo(){
	hideChecks();
	document.getElementById("inputCRC").value="";
  	document.getElementById("inputUSD").value="";
	document.getElementById("inputCAD").value="";
	document.getElementById("inputMXN").value="";
	document.getElementById("inputVEF").value="";
	document.getElementById("inputEUR").value="";
	document.getElementById("inputRUB").value="";
	document.getElementById("inputZAR").value="";
	document.getElementById("inputKRW").value="";
	document.getElementById("inputJPY").value="";
 }

function exchangeCurrency(){
	ingresado=[0,0,0,0,0,0,0,0,0,0];

	for(var i=0; i<countryStars.length; i++){
		document.getElementById(countryStars[i]).value;
    }
    
	if (document.getElementById("checkboxBRL").checked == true){
		ingresado[0] = document.getElementById("cantidadBRL").value;
	}
	if (document.getElementById("checkboxCAD").checked == true){
		ingresado[1] = document.getElementById("cantidadCAD").value;
	}
	if (document.getElementById("checkboxCLP").checked == true){
		ingresado[2] = document.getElementById("cantidadCLP").value;
	}
	if (document.getElementById("checkboxCOP").checked == true){
		ingresado[3] = document.getElementById("cantidadCOP").value;
	}
	if (document.getElementById("checkboxCRC").checked == true){
		ingresado[4] = document.getElementById("cantidadCRC").value;
	}
	if (document.getElementById("checkboxUSD").checked == true){
		ingresado[5] = document.getElementById("cantidadUSD").value;
	}
	if (document.getElementById("checkboxHNL").checked == true){
		ingresado[6] = document.getElementById("cantidadHNL").value;
	}
	if (document.getElementById("checkboxMXN").checked == true){
		ingresado[7] = document.getElementById("cantidadMXN").value;
	}
	if (document.getElementById("checkboxPEN").checked == true){
		ingresado[8] = document.getElementById("cantidadPEN").value;
	}
	if (document.getElementById("checkboxVEF").checked == true){
		ingresado[9] = document.getElementById("cantidadVEF").value;
	}
	
	Colones=[134.91,418.58,0.79,0.17,1,556.86,23.1,27.87,167.79,0.043];
	
	cantidad = 0;
	for(i=0;i<10;i++){
		if(ingresado[i] > 0){
			cantidad =i;
			break;
		}
	}
	
	ConvertidoAColones = ingresado[cantidad]*Colones[cantidad];


	if (document.getElementById("checkboxBRL").checked == true){
		/*var prueba = document,getElementById("cantidadBRL");*/
		
		document.getElementById("cantidadBRL").value = ConvertidoAColones/Colones[0];
	}
	if (document.getElementById("checkboxCAD").checked == true){
		document.getElementById("cantidadCAD").value = ConvertidoAColones/Colones[1];
	}
	if (document.getElementById("checkboxCLP").checked == true){
		document.getElementById("cantidadCLP").value = ConvertidoAColones/Colones[2];
	}
	if (document.getElementById("checkboxCOP").checked == true){
		document.getElementById("cantidadCOP").value = ConvertidoAColones/Colones[3];
	}
	if (document.getElementById("checkboxCRC").checked == true){
		document.getElementById("cantidadCRC").value = ConvertidoAColones/Colones[4];
	}
	if (document.getElementById("checkboxUSD").checked == true){
		document.getElementById("cantidadUSD").value = ConvertidoAColones/Colones[5];
	}
	if (document.getElementById("checkbox").checked == true){
		document.getElementById("cantidadBRL").value = ConvertidoAColones/Colones[6];
	}
	if (document.getElementById("checkboxBRL").checked == true){
		document.getElementById("cantidadBRL").value = ConvertidoAColones/Colones[7];
	}
	if (document.getElementById("checkboxBRL").checked == true){
		document.getElementById("cantidadBRL").value = ConvertidoAColones/Colones[8];
	}
	if (document.getElementById("checkboxBRL").checked == true){
		document.getElementById("cantidadBRL").value = ConvertidoAColones/Colones[9];
	}
}