class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this._saldo = saldo; //qdo formos criar get e set, colocamos o _na frente para que as funções tenham nome saldo mas a propriedade não. 
    }
    
}