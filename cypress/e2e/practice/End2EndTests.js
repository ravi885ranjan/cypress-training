import homePage from "../../support/pageObject/homePage"

describe('End to End ecommerce Test',function(){
    before(() => {
        cy.fixture('example').then(function(data) {
            this.data = data
            this.homePageO = new homePage()
        })
    })
    it('Submit Order',function(){
        const productName = this.data.productName
        this.homePageO.goto(Cypress.env('url')+"loginpagePractise/#")
        const productPageO = this.homePageO.login(this.data.username, this.data.password)
        productPageO.pageValidation()
        productPageO.verifyProductCardLimit().should('have.length',4)
        productPageO.selectProduct(productName)
        productPageO.selectFirstProduct()
        const cartPageO = productPageO.goToCart()
        cartPageO.sumOfProducts().then(($e)=>{
            expect($e).to.be.lessThan(200000);
        })
        
        //will be applied from this point onwards
        Cypress.config('defaultCommandTimeout',10000)
        cy.contains('button','Checkout').click()
        cy.submitFormDetails()
        cy.get('.alert-success').should('contain','Success')
        })

})