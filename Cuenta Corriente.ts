import { Cuenta } from "./Cuenta";

export class Corriente extends Cuenta{
    protected sobreGiro:number

    constructor(saldo:number, tasaAnual:number) {

        super(saldo,tasaAnual)
        this.sobreGiro = 0
    }

    //Getters:
    public getSubreGiro ():number{
        return this.sobreGiro
    }

    //Metodos:

    R3tirar (numero1:number){
        this.numRetiros += 1

        if (numero1 <= this.saldo){
            super.Retirar(numero1)
        }
        else{
                let numer2 = numero1 - this.saldo
                this.sobreGiro = numer2 + this.sobreGiro
                super.Retirar(this.saldo)
            }
    }

    C0nsignar (numero1:number){
        
        if (this.sobreGiro > 0){
            this.sobreGiro = this.sobreGiro - numero1
            let numero2 = this.sobreGiro - numero1
            super.Consignar(numero2)
            console.log("Se a cobrado su supergiro anterior.");
            
        }
        else{
            super.Consignar(numero1)
        }
    }

    Extr4ctoMesual (){
        super.ExtractoMensual()
        console.log("\nSobregiro: ", this.sobreGiro)
    }

    Imprim1r (){
        super.Imprimir ()
        console.log("\nSobregiro: ", this.sobreGiro)
    }

}
