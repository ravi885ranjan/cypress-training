import productPage from "./productPage"

class homePage {
    login(username, password){
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#terms').click()
        cy.contains('Sign In').click()
        return new productPage()
    }

    goto(url){
        cy.visit(url)
    }
}
export default homePage;
