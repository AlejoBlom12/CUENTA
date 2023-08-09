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

}
