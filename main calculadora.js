var arregloCalculadora;
var arregloPantallas;

function crearCalculadora(){

   var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	//Declaración, Creación e Inicialización de un arreglo
	arregloCalculadora = new Array(
			new Calculadora("blue", 180, 110, 50, 10, 5, 1),
			new Calculadora("black", 200, 120, 50+166, 10, 5, 1),
			new Calculadora("red", 210, 130, 50+320, 10, 5, 1)
		);
	for (var i = arregloCalculadora.length - 1; i >= 0; i--) {
		arregloCalculadora[i].Dibujar(context);
        
}

}

function OrdenarCalculadoraColor(){
   var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	//Declaración, Creación e Inicialización de un arreglo
	arregloCalculadora = new Array(
			new Calculadora("black", 200, 120, 50+166, 10, 5, 1),
			new Calculadora("red", 210, 130, 50+320, 10, 5, 1),
			new Calculadora("blue", 180, 110, 50, 10, 5, 1)
		);
	for (var i = arregloCalculadora.length - 1; i >= 0; i--) {
		arregloCalculadora[i].Dibujar(context);
	}

}
	





  function crearBotones(){  	
  var myCanvas = document.getElementById("myCanvas");
  var context = myCanvas.getContext("2d");

  var objBotones = new Botones("red",
							90,
							10,
							50,10);
	objBotones.Dibujar(context);

	var objBotones = new Botones("red",
							90,
							10,
							80,10);
	objBotones.Dibujar(context);

	var objBotones = new Botones("red",
							90,
							10,
							110,10);
	objBotones.Dibujar(context);

	var objBotones = new Botones("red",
							90,
							10,
							110,40);
	objBotones.Dibujar(context);

	var objBotones = new Botones("red",
							90,
							10,
							80,40);
	objBotones.Dibujar(context);
	
	var objBotones = new Botones("red",
							90,
							10,
							50,40);
	objBotones.Dibujar(context);

	var objBotones = new Botones("white",
							90,
							10,
							225,40);
	objBotones.Dibujar(context);

	var objBotones = new Botones("white",
							90,
							10,
							255,40);
	objBotones.Dibujar(context);

	var objBotones = new Botones("white",
							90,
							10,
							285,40);
	objBotones.Dibujar(context);

	var objBotones = new Botones("white",
							90,
							10,
							285,70);
	objBotones.Dibujar(context);
	
	var objBotones = new Botones("white",
							90,
							10,
							255,70);
	objBotones.Dibujar(context);

	var objBotones = new Botones("white",
							90,
							10,
							225,70);
	objBotones.Dibujar(context);

	var objBotones = new Botones("white",
							90,
							10,
							285,10);
	objBotones.Dibujar(context);
	
	var objBotones = new Botones("white",
							90,
							10,
							255,10);
	objBotones.Dibujar(context);

	var objBotones = new Botones("white",
							90,
							10,
							225,10);
	objBotones.Dibujar(context);
	
	var objBotones = new Botones("blue",
							90,
							10,
							380,70);
	objBotones.Dibujar(context);
	
	var objBotones = new Botones("blue",
							90,
							10,
							420,70);
	objBotones.Dibujar(context);

	var objBotones = new Botones("blue",
							90,
							10,
							460,70);
	objBotones.Dibujar(context);

	var objBotones = new Botones("blue",
							90,
							10,
							380,105);
	objBotones.Dibujar(context);
	
	var objBotones = new Botones("blue",
							90,
							10,
							420,105);
	objBotones.Dibujar(context);

	var objBotones = new Botones("blue",
							90,
							10,
							460,105);
	objBotones.Dibujar(context);

	var objBotones = new Botones("blue",
							90,
							10,
							380,40);
	objBotones.Dibujar(context);
	
	var objBotones = new Botones("blue",
							90,
							10,
							420,40);
	objBotones.Dibujar(context);

	var objBotones = new Botones("blue",
							90,
							10,
							460,40);
	objBotones.Dibujar(context);

	var objBotones = new Botones("blue",
							90,
							10,
							380,10);
	objBotones.Dibujar(context);
	
	var objBotones = new Botones("blue",
							90,
							10,
							420,10);
	objBotones.Dibujar(context);

	var objBotones = new Botones("blue",
							90,
							10,
							460,10);
	objBotones.Dibujar(context);


	
	
	}

	


        
	


	


  function ordenarCalculadoraTamaño(){
 var n = arregloCalculadora.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloCalculadora[j].Altura > arregloCalculadora[j+1].Altura){
				//Intercambio
				aux = arregloCalculadora[j];
				aux_x_j = arregloCalculadora[j].X;
				aux_y_j = arregloCalculadora[j].Y;
				aux_x_j_1 = arregloCalculadora[j+1].X;
				aux_y_j_1 = arregloCalculadora[j+1].Y;
				
				arregloCalculadora[j] = arregloCalculadora[j+1];
				arregloCalculadora[j+1] = aux;

				arregloCalculadora[j].X = aux_x_j;
				arregloCalculadora[j].Y = aux_y_j;

				arregloCalculadora[j+1].X = aux_x_j_1;
				arregloCalculadora[j+1].Y = aux_y_j_1;
			}
		}
	}

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "green";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	for (var i = arregloCalculadora.length - 1; i >= 0; i--) {
		arregloCalculadora[i].Dibujar(context);
	}

	
}



	