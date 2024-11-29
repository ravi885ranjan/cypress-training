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
Cypress.Commands.add('interceptGetBook',()=>{
    const request = {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
    }
    const response = {
        statusCode: 200,
        body: [{
                              "book_name": "abc",
                              "isbn": "ABC",
                              "aisle": "2222"
                          }]
    }
    return cy.intercept(request,response)
})
Cypress.Commands.add('loginApi',()=>{
    cy.request('POST',"https://rahulshettyacademy.com/api/ecom/auth/login",{
        "userEmail": "ravi885ranjan@gmail.com",
        "userPassword": "Demo@123"
    }).then((res)=>{
        expect(res.status).to.equal(200)
        Cypress.env('token',res.body.token)
    })
})
Cypress.Commands.add('validateTextInUrl',(searchText)=>{
    cy.url().then((url)=>{
        expect(url).to.include(searchText)
    })
})
Cypress.Commands.add('getOrderedPriceList',()=>{
    const pricesInOrder = [];
        cy.get('.a-price span.a-offscreen').each(($e1, index, $list)=>{
            cy.wrap($e1).invoke('prop', 'innerText').then(function(text){
                pricesInOrder[index] = Number(String(text).replace('$',''))
            })
        }).then(function(){
            return pricesInOrder
        })
})
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })