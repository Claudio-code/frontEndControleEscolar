/* eslint-disable camelcase */
import cepPromise from 'cep-promise';

export default class Address {
  constructor(city, cep, country, public_place, number, status = true) {
    this.city = city;
    this.cep = cep;
    this.country = country;
    this.publicPlace = public_place;
    this.number = number;
    this.status = status;
  }

  setId(id) {
    this.id = id;
  }

  setStudentId(id) {
    this.student_id = id;
  }

  static validateAllData(attributes) {
    for (let index = 0; index < attributes.length; index++) {
      const element = attributes[index];
      if (element === '') {
        return false;
      }
    }

    return true;
  }

  static async validarCep(cep) {
    try {
      const response = await cepPromise(cep);
      response.statusResponse = false;

      return response;
    } catch (error) {
      console.log(error);
      return true;
    }
  }
}
