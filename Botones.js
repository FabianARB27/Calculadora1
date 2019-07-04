class Botones{
	constructor(c, al, an, x, y){
		
		
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;

	}



Dibujar(contextoDeDibujo){

		//Crear una pluma con el color
		contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue


 //Circulo
    var radio = this.Ancho/1;
    contextoDeDibujo.beginPath();
        contextoDeDibujo.arc(this.X+50, 
                   this.Y+190,
                     radio,
                     0,
                     2*3.1416,
                     true);
        
        contextoDeDibujo.fill();

        //Botones
        	contextoDeDibujo.fillStyle = "red";
        	                          //X  , Y
        	contextoDeDibujo.beginPath();
        	contextoDeDibujo.moveTo(50,50);
        	contextoDeDibujo.lineTo(80,80);
        	contextoDeDibujo.lineTo(100,100);
        	contextoDeDibujo.lineTo(90,90);
        	contextoDeDibujo.lineTo(90,90);
        	contextoDeDibujo.closePath();
        	contextoDeDibujo.fill(); 


        	
       

 }

}