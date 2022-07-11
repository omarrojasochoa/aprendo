class Celular{
    constructor(color,peso,rp,rc,ram){
        this.color=color;
        this.peso=peso;
        this.rp=rp;
        this.rc=rc;
        this.ram=ram;
        this.encendido==true;
    }

    encendido(){
        if(this.encendido !==false){
            alert("El Celular esta Prendido")
            this.encendido=true;
        }
        else{
            alert("El Celular esta Apagado")
            this.encendido=false;
        }
    }
    reinicio(){
        if(this.encendido ==true){
            alert("Reiniciar celular")
            this.encendido=false;
        }
        else{
            alert("El Celular esta Apagado")
            this.encendido=false;
        }
    }
    foto(){
        alert(`foto tomada en una resolución de: ${this.rc}MP`)
    }  
    grabar(){
        alert(`grabando video en: ${this.rc}`);
    } 
    mostrarInfo(){
        return `
        Color:${this.color}<br>
        Peso:${this.peso}<br>
        Tamaño:${this.rp}<br>
        Resolucion de camara: ${this.rc}<br>
        RAM: ${this.ram}GB<br>
        `
    }
}

class altaGama extends Celular{
    constructor(color,peso,rp,rc,ram,rcExtra){
        super(color,peso,rp,rc,ram);
        this.rcExtra=rcExtra;
    }

    camaraSuperLenta(){
        alert("Camara Super Lenta activado.");
    }
    reconocimientoFacial(){
        alert("Reconocimiento Facial activado");
    }
    infoAltaGama(){
        return this.mostrarInfo() + `Resolucion Camara Extra: ${this.rcExtra}K<br><br>`
    }
}

const a = new altaGama ("rojo",150,5,20,2,4);
const b = new altaGama ("azul",160,6,30,4,4);
document.write(a.infoAltaGama());   
document.write(b.infoAltaGama());

