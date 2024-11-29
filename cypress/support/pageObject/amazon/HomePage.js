import CartPage from "./CartPage"

class HomePage {
    searchByProductByText(searchText){
    cy.get('#twotabsearchtextbox').type(searchText)
    cy.get('#nav-search-submit-button').click()
    }

    sortByPrice(){
    cy.contains('Sort by:').click({force:true})
    cy.get('[aria-labelledby="s-result-sort-select_1"]').trigger('click')
    cy.wait(3000)
    }

    addOneRandomItemToCart(){
        cy.contains('button','Add to cart').eq(0).trigger('click')
        cy.wait(3000)
    }

    goToCart(){
        cy.get('a[href*="nav_cart"]').click()
        return new CartPage()
    }
}
export default HomePage;