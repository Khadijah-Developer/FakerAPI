const { faker } = require('@faker-js/faker');

module.exports = class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.first_name = faker.name.firstName();
        this.last_name = faker.name.lastName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.phoneNumber = faker.phone.phoneNumber();
    }
}