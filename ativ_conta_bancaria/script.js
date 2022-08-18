class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = 0; //qdo formos criar get e set, colocamos o _na frente para que as funções tenham nome saldo mas a propriedade não. 
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
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
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

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
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
//Testes:
const minhaConta = new ContaCorrente(11,222, true);
console.log("conta corrente")
console.log(minhaConta.saldo);
console.log(minhaConta.depositar(1000));
console.log(minhaConta.sacar(600));
console.log(minhaConta.saldo);

const minhaPoup = new ContaPoupanca( 12, 222, true);
console.log("conta poupança");
console.log(minhaPoup.saldo);
console.log(minhaPoup.depositar(1000));
console.log(minhaPoup.sacar(500));
console.log(minhaPoup.saldo);

const minhaUni = new ContaUniversitaria(13,23,true);
console.log("conta Universitária");
console.log(minhaUni.saldo);
console.log(minhaUni.depositar(1000));
console.log(minhaUni.sacar(600));

