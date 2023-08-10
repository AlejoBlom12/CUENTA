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
        if (numero1 <= this.saldo + this.sobreGiro){

            if (numero1 <= this.saldo){
                super.Retirar(numero1)
            }
            else{
                this.sobreGiro -= (numero1 - this.saldo)
            }
        }else{
                console.log("No hay suficiente saldo.")
            }
    }

    C0nsignar (numero1:number){
        super.Consignar(numero1)

        if (this.sobreGiro > 0){
            this.sobreGiro = Math.max (0, this.sobreGiro - numero1)
        }
    }
    
    Extr4ctoMesual (){
        super.ExtractoMesual()
        console.log("Sobregiro: ", this.sobreGiro)
    }

    Imprim1r (){
        super.Imprimir
        console.log("Sobregiro: ", this.sobreGiro)
    }

}
