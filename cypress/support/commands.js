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
Cypress.Commands.add('submitFormDetails',()=>{
    //body
    cy.get('#country').type("United Kingdom")
        cy.contains('a','United Kingdom').click()
        cy.get('.btn-success').click()
})
Cypress.Commands.add('getIframeBody',()=>{
    return cy.get('#courses-iframe')
    .its('0.contentDocument.body').should('not.be.undefined')
    .then(cy.wrap)
})
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })