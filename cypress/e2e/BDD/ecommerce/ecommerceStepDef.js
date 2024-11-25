const { Given,When,Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I am on e-commerce page",function(){

    this.homePageO.goto(Cypress.env('url')+"loginpagePractise/#")
})

When("I login to the application",function(){
    this.productPageO = this.homePageO.login(this.data.username, this.data.password)
    this.productPageO.pageValidation()
    this.productPageO.verifyProductCardLimit().should('have.length',4)
})

When("I login to the application",function(){
    this.productPageO = this.homePageO.login(this.data.username, this.data.password)
    this.productPageO.pageValidation()
    this.productPageO.verifyProductCardLimit().should('have.length',4)
})

When("I login to the application using",function(datatable){
    this.productPageO = this.homePageO.login(datatable.rawTable[1][0], datatable.rawTable[1][1])
    this.productPageO.pageValidation()
    this.productPageO.verifyProductCardLimit().should('have.length',4)
})

When("I login to the application using {string} and {string}",function(username,password){
    this.productPageO = this.homePageO.login(username, password)
    this.productPageO.pageValidation()
    this.productPageO.verifyProductCardLimit().should('have.length',4)
})

When("I add items to the cart and checked out",function(){
    this.productPageO.selectProduct(this.data.productName)
    this.productPageO.selectFirstProduct()
    this.cartPageO = this.productPageO.goToCart()
})

When("validate total price limit", function(){
    this.cartPageO.sumOfProducts().then(($e)=>{
        expect($e).to.be.lessThan(200000);
    })
})

Then("select country submit and verify thank you.",function(){
    this.cartPageO.submitCartItems()
})
