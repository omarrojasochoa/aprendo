class App{
    constructor(descargas,puntuacion,peso){
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.iniciada=false;
        this.instalada=false;
    }

    instalar(){
        if(this.instalada==false){
            this.instalada=true;
            return alert("App Instalada");
        }
    }
    desinstalar(){
        if(this.instalada==true){
            this.instalada=false;
            return alert("App Desinstalada");
        }
    }
    abrir(){
        if(this.iniciada==false && this.instalada==true){
            this.iniciada=true;
            return alert("App Iniciada");
        }
    }
    cerrar(){
        if(this.iniciada==true && this.instalada==true){
            this.iniciada=false;
            return alert("App Cerrada");
        } 
    }
    info(){
        return `Descargas: <b>${this.descargas}</b><br>
			Puntuación: <b>${this.puntuacion}</b><br>
			Peso: <b>${this.peso}</b><br>`
    }
}   
const app= new App (16000,4.5,"900MB");
app.instalar()
app.abrir()
app.cerrar()
app.desinstalar()
document.write(app.info());

	
	