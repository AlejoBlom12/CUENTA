import { Cuenta } from "./Cuenta";

export class Ahorros extends Cuenta {
    protected cuentaActiva:boolean
    
    constructor(saldo:number, tasaAnual:number) {
    super(saldo,tasaAnual)
    this.cuentaActiva = saldo >= 10000
    }

    //Getter:

    public getCuentaActiva():boolean{
        return this.cuentaActiva
    }

    //Metodos:
    
    consignar (numero1: number){
        if (this.cuentaActiva){
            super.Consignar(numero1)
        }
        else{
            console.log("\nLa cuenta de ahorros esta inactiva");
        }
    }

    retirar (numero1: number){
        if(this.cuentaActiva){
            super.Retirar(numero1)
            if (this.numRetiros > 4){
                this.comisionMensual = this.comisionMensual + 1000
            }
        }
        else{
            console.log("\nLa cuenta esa inactiva.") 
        }
    }


    extractoMesual(){
        if (this.saldo < 1000){
            this.cuentaActiva = false
        }
            super.ExtractoMensual()
            console.log("\nLa cuenta esta activa: " + this.cuentaActiva)
        }
    
    imprimir (){
        super.Imprimir()
        console.log("Cuenta activa: ", this.cuentaActiva)
    }
}

