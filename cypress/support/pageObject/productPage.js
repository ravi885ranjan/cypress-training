import cartPage from "./cartPage"

class productPage {
    pageValidation(){
        cy.contains('Shop Name').should('be.visible')
    }

    verifyProductCardLimit(){
        return cy.get('app-card')
    }

    selectProduct(productName){
        cy.get('app-card').filter(`:contains("${productName}")`)
        .then($el=>{
            cy.wrap($el).find('button').click()
            cy.contains(" Checkout ( 1 )").should('be.visible')
        })
    }

    selectFirstProduct(){
        cy.get('app-card').eq(0).contains('button','Add').click()
    }

    goToCart() {
        cy.contains('a','Checkout').click()
        return new cartPage()
    }
}
export default productPage