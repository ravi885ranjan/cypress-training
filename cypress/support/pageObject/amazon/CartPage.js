class CartPage{
    proceedToCheckout(){
        cy.get('input[value="Proceed to checkout"]').click()
    }

    itemsInCart(){
        return cy.get('.sc-list-item-content')
    }
}
export default CartPage