// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const user = Cypress.env('username')
const pwd =  Cypress.env('password')

Cypress.Commands.add('loginToApplication', () => {

    cy.visit('/')
    cy.get('.login').click()

    cy.get('#login_form')
        .find('#email').type(user)
        .parents('form')
        .find('#passwd').type(pwd)
        .parents('form')
        .find('#SubmitLogin').click()

    cy.get('.info-account').should('contain', 'Welcome to your account.')

})