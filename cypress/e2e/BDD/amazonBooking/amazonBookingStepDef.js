const { Given,When,Then } = require("@badeball/cypress-cucumber-preprocessor");
Given('user opens amazon home page',()=>{
    cy.visit(Cypress.env('amazonHomePage'))
})

When('user enters {string} in search criteria and hit apply',function(searchText){
    this.homePageO.searchByProductByText(searchText)
})

Then('search result for {string} should appear',(searchText)=>{
    cy.validateTextInUrl(searchText)
})

When('user selects sort by price',function(){
    this.homePageO.sortByPrice()
})

Then('the user should see products with prices in ascending order',function(){
    this.homePageO.validateItemsPriceInAscOrder()
})