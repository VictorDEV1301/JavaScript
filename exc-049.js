//Crie um validador de CPF utilizando classes

class ValidaCPF {
  constructor(CPF) {
    this.CPF = CPF;
    this.status = false;
    Object.defineProperty(this, 'CPF_Numerico', {
      value: this.CPF.replace(/\D+/g, ''),
      enumerable: false,
      writable: false,
      configurable: false,
    })
  }

  static geraDigitos(CPF) {
    let reverse = CPF.length + 1;
    let digito = CPF.split('').reduce((ac, valor) => {
      ac += valor * reverse;
      reverse--;
      return ac;
    }, 0)
    digito = 11 - (digito % 11);
    console.log(digito);
    return digito >= 9 ? 0 : digito;
  }

  static sequencia(CPF) {
    return CPF[0].repeat(CPF.length) === CPF ? true : false;
  }

  validaCPF() {
    if (this.CPF_Numerico === undefined) return this.status = false;
    if (this.CPF_Numerico.length !== 11) return this.status = false;
    if (ValidaCPF.sequencia(this.CPF_Numerico)) return this.status = false;

    const digito1 = ValidaCPF.geraDigitos(this.CPF_Numerico.slice(0,-2));
    const digito2 = ValidaCPF.geraDigitos(this.CPF_Numerico.slice(0,-2)+digito1);

    if((this.CPF_Numerico.slice(0,-2)+digito1+digito2) !== this.CPF_Numerico) return this.status = false;

    this.status = true;
  }

}

let NovoCPF = new ValidaCPF('593.529.110-08');
NovoCPF.validaCPF();
console.log(NovoCPF);
