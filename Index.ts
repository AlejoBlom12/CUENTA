
import { Corriente } from "./Cuenta Corriente";
import { Ahorros } from "./Cuenta Ahorros";
import { Cuenta } from "./Cuenta";

let cuenta1: Cuenta = new Cuenta(20000, 2)
let ahorro1: Ahorros = new Ahorros (12000,4)
let corrient1: Corriente = new Corriente(20000, 5)

//Cuenta 

cuenta1.Retirar(10000)
cuenta1.Consignar(20000)
cuenta1.CalcularInteres()
cuenta1.ExtractoMesual()
cuenta1.Imprimir()

//Ahorros:

ahorro1.consignar(100)
ahorro1.retirar(2000)
ahorro1.extractoMesual()
ahorro1.imprimir()

//Corriente:
corrient1.R3tirar(21000)
corrient1.C0nsignar(6000)
corrient1.Extr4ctoMesual()
corrient1.Imprim1r()