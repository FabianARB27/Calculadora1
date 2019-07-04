class Pantalla{
	constructor(c, al, an, x, y){
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
		 var radio = this.Ancho/2;
        this.RadioCopa = radio;
		 


        }
        Dibujar(contextoDeDibujo){

        	 //Poligono irregular
        	contextoDeDibujo.fillStyle = "green";
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

    