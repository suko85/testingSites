
    const faker = require('faker');
    //const faker = require('faker/locale/ru'); < --- you can localized data in specific languages

    let emailAddress = faker.internet.email();
    let firstName  = faker.name.firstName();
    let lastName = faker.name.lastName();
    let company = faker.company.companyName();
    let personalAdress = faker.address.streetAddress(); 
    let cityHome = faker.address.cityName(); 
    let postalCode = faker.address.zipCode();
    let phone = faker.phone.phoneNumber();
    let addressAlias = faker.address.streetPrefix();
