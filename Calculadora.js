  class Calculadora{
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

        	 //Dibujar Botones


         //Dibujar el tronco del arbol
        
        var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;

        var x_esi = xc - (1/2)*this.RadioCopa;
        var y_esi = yc + (3/4)*this.RadioCopa;

        var ancho_rect = this.Ancho;;
        var altura_rect = this.Altura - (1/4)*this.RadioCopa;

        contextoDeDibujo.fillRect(x_esi,y_esi,ancho_rect,altura_rect);

        contextoDeDibujo.fill();

    }

    
    }


