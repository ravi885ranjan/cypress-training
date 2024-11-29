
import SignupPage from "./SignupPage"
class CartPage{
    proceedToCheckout(){
        cy.get('input[value="Proceed to checkout"]').click()
    }

    itemsInCart(){
        return cy.get('.sc-list-item-content')
    }

    getSignUpPage(){
        return new SignupPage()
    }
}
export default CartPage