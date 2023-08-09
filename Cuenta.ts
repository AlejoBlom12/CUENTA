

export class Cuenta {

    protected saldo:number
    protected numConsignacion: number
    protected tasaAnual: number
    protected numRetiros: number 
    protected comisionMensual: number 
    
    constructor(saldo:number, tasaAnual: number) {
        this.saldo = saldo
        this.numConsignacion = 0
        this.numRetiros = 0
        this.tasaAnual = tasaAnual
        this.comisionMensual = 0
    }

    //Getter:

    public getSaldo ():number{
        return this.saldo
    }

    public getNumConsignacion ():number{
        return this.numConsignacion
    }

    public getTasaAnual (): number{
        return this.tasaAnual
    }

    public getNumRetiros (): number{
        return this.numRetiros
    }

    public getComisionMensual (): number{
        return this.comisionMensual
    }

    //Setters:

    public setSaldo (saldo:number){
        this.saldo = saldo
    }
    
}