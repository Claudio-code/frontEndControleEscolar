import GenericPeople from './GenericPeople';

class Teacher extends GenericPeople {
  constructor(name, email, rg, cpf, cnh, age) {
    super();
    this.name = name;
    this.email = email;
    this.rg = rg;
    this.cpf = cpf;
    this.cnh = cnh;
    this.age = age;
  }

  setId(id) {
    this.id = id;
  }
}

export default Teacher;
