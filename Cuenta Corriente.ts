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
}
