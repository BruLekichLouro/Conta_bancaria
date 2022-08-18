class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this._saldo = saldo; //qdo formos criar get e set, colocamos o _na frente para que as funções tenham nome saldo mas a propriedade não. 
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo=valor;
    }
    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito=valor; //vai dizer se é true ou false
    }
}

class ContaPoupanca {
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria {
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'universitaria';
    }
    sacar(valor){
        if(valor >500){
            return "Operação negada";
        } else if(this._saldo > valor){
            this._saldo = this._saldo - valor;
            return this._saldo;
        }
    }
}

