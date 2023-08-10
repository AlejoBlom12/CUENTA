

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

    //Metodos:

    Consignar (number1:number){
        let consignar = this.saldo + number1
        this.saldo += consignar
        this.numConsignacion = this.numConsignacion + 1
        console.log("========== CONSIGNACION ========" 
        , "\nSaldo: " + this.saldo)
         
    }

    Retirar (number1:number){
        if (number1 > this.saldo){
            console.log("\nRetiro invalido, el retiro es mayor al saldo.")}
            else{
        let retirar = this.saldo - number1
        console.log("\n==========  RETIRO ================");
        console.log("\nCantidad retirada: ", number1)
        console.log("\nLa cantidad de saldo restante es de: ", retirar , "\n")
        this.saldo -= retirar
        this.numRetiros = this.numRetiros + 1}
    }

    CalcularInteres (){
        let tasaMensual = ((this.tasaAnual / 100) / 12)
        let interesMesual = (this.saldo * tasaMensual)
        return interesMesual
        
    }

    ExtractoMesual(){
        this.saldo = this.saldo - this.comisionMensual
        this.CalcularInteres()
        console.log("\n============== El extracto mensual ===================== "
        + "\nComision mensual: ", this.comisionMensual
        + "\nNumero de transacciones: ", (this.numConsignacion + this.numRetiros)
        + "\n")
    }

    Imprimir (){
    console.log("=============== Atributos =============== "
    + "\nSaldo: ", this.saldo
    + "\nNumero de consignaciones: ", this.numConsignacion
    + "\nNumero de retiros: ", this.numRetiros
    + "\nTasa anual: ", this.tasaAnual
    + "\nComision mensual: ", this.comisionMensual)
    }

    
}