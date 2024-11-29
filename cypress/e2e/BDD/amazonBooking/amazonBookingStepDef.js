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
    cy.getOrderedPriceList().as('priceList')
    cy.get('@priceList').then((pricesInOrder)=>{
        for(let i=0;i<pricesInOrder.length;i++){
            expect(pricesInOrder[i]).to.be.lte(pricesInOrder[i+1])
        }
    })
})

When('adds an item to the cart',function(){
    this.homePageO.addOneRandomItemToCart()
})

When('user clicks on go to cart',function(){
    this.cartPageO = this.homePageO.goToCart()
})

Then('user should see an item in the cart',function(){
    this.cartPageO.itemsInCart().should('have.length',1)
})

When('user clicks on proceed to checkout',function(){
    this.cartPageO.proceedToCheckout()
    this.signupPageO = this.cartPageO.getSignUpPage()
})

Then('signup page should appear',function(){
    this.signupPageO.accountCreationButtonShouldBePresent()
})
