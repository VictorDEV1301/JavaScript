// Crie uma classe chamada Person que possua os seguintes atributos: name, age e email. A classe deve ter um método getInfo que retorna uma string contendo o nome, a idade e o email da pessoa.

// Em seguida, crie uma classe chamada Employee que possui os seguintes atributos: id, salary e position. A classe deve ter um método getSalary que retorna o salário do funcionário.

// Finalmente, crie um objeto person da classe Person e um objeto employee da classe Employee. Atribua valores aos atributos de cada objeto e chame o método getInfo para o objeto person e o método getSalary para o objeto employee. 
// Exiba os resultados na tela.

class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  getInfo() {
    console.log(`Oi meu nome é ${this.name} e eu tenho ${this.age} anos. Meu email de contato é ${this.email}`);
  }
}

const p1 = new Person('João Victor', 24, '@gmail.com');
p1.getInfo();

class Employee {
  constructor(id, salary,position){
    this.id = id;
    this.salary = salary;
    this.position = position;
  }
  getSalary(){
    return this.salary;
  }
}

const E1 = new Employee('123',2500,'Junior');
console.log(E1.getSalary());