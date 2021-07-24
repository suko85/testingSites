
    const faker = require('faker');

    let emailAddress = faker.internet.email();
    let firstName  = faker.name.firstName();
    let lastName = faker.name.lastName();
    let personalAdress = faker.address.streetAddress(); 
    let cityHome = faker.address.cityName(); 
    let addressAlias = faker.address.streetPrefix();

export class FillNewAccountPage{
    
    createAccount() {
        cy.get('#email_create').type(emailAddress)
        cy.get('#SubmitCreate').click()

        cy.get('.radio-inline')
        .find('#id_gender1')
        .check('1')
        .parents('form')
        .find('#customer_firstname').type(firstName)
        .parents('form')
        .find('#customer_lastname').type(lastName)
        .parents('form')
        .find('#passwd').type('123456')
        .parents('form')
        .find('input[name="firstname"]').type(firstName)
        .parents('form')
        .find('input[name="lastname"]').type(lastName)
        .parents('form')
        .find('input[name="address1"]').type(personalAdress)
        .parents('form')
        .find('#city').type(cityHome)
        .parents('form')
        .find('#id_state').select('Alaska').should('have.value','2')
        .parents('form')
        .find('#postcode').type('10400')
        .parents('form')
        .find('#phone_mobile').type('11123445667')
        .parents('form')
        .find('#alias').type(addressAlias)
        .parents('form')
        .find('#submitAccount').click()
    }
}

export const onFillNewAccountPage = new FillNewAccountPage()
