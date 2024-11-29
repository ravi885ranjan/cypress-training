import CartPage from "./CartPage"

class HomePage {
    searchByProductByText(searchText){
    cy.get('#twotabsearchtextbox').type(searchText)
    cy.get('#nav-search-submit-button').click()
    }

    sortByPrice(){
    cy.contains('Sort by:').click({force:true})
    cy.get('[aria-labelledby="s-result-sort-select_1"]').trigger('click')
    cy.wait(2000)
    }

    validateItemsPriceInAscOrder(){
        const pricesInOrder = [];
        cy.get('.a-price span.a-offscreen').each(($e1, index, $list)=>{
            cy.wrap($e1).invoke('prop', 'innerText').then(function(text){
                pricesInOrder[index] = Number(String(text).replace('$',''))
            })
        }).then(function(){
            for(let i=0;i<pricesInOrder.length;i++){
                expect(pricesInOrder[i]).to.be.lte(pricesInOrder[i+1])
            }
        })
    }

    addOneRandomItemToCart(){
        cy.contains('button','Add to cart').eq(0).trigger('click')
        cy.wait(2000)
    }

    goToCart(){
        cy.get('a[href*="nav_cart"]').click()
        return new CartPage()
    }
}
export default HomePage;