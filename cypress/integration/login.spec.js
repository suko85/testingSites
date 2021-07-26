/// <reference types="cypress" />
import { onFillNewAccountPage } from "../support/page_object/fillNewAccountformPage"



describe('Login in the website', () => {

    beforeEach('execute before each test', () => {
        cy.visit('/')
    })

    // Validating two buttons 
    it('Validating the index page', () => {

        cy.get('#home-page-tabs')
            .parents('div')
            .find('a')
            .should('contain', 'Popular')
            .parents('div')
            .find('a')
            .should('contain', 'Best Sellers')
    })

    it('create a new account', () => {
        cy.get('.login').click()
        cy.get('.page-heading').should('contain', 'Authentication')

        onFillNewAccountPage.createAccount()

        cy.get('.info-account').should('contain', 'Welcome to your account.')
    })

    it('unsuccessful login', () => {

        cy.get('.login').click()
        cy.get('.page-heading').should('contain', 'Authentication')

        cy.get('#login_form')
        .find('#email').type('abcdetest123@test.com')
        .parents('form')
        .find('#passwd').type('12345')
        .parents('form')
        .find('#SubmitLogin').click()

        cy.get('#center_column.center_column')
        .find('li').should('contain', 'Authentication failed.')

    })

    it('successful login and logout', () => {
        cy.loginToApplication()
        cy.get('.logout').click()
        cy.get('.login').should('contain', 'Sign in')
    })


})