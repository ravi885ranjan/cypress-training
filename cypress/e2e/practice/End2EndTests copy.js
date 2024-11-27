describe('End to End ecommerce Test',function(){
    before(() => {
        cy.fixture('example').then((data) => {
            globalThis.data = data
        })
    })
    it('Submit Order',() => {
        
        const productName = globalThis.data.productName
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#')
        cy.get('#username').type(globalThis.data.username)
        cy.get('#password').type(globalThis.data.password)
        cy.get('#terms').click()
        cy.contains('Sign In').click()
        cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.length',4)
        cy.get('app-card').filter(`:contains("${productName}")`)
        .then($el=>{
            cy.wrap($el).find('button').click()
            cy.contains(" Checkout ( 1 )").should('be.visible')
        })
        cy.get('app-card').eq(0).contains('button','Add').click()
        cy.contains('a','Checkout').click()
        let sum = 0
        cy.get('tr td:nth-child(4) strong').each(($e1, index, $list)=>{
            const amount = Number($e1.text().split(' ')[1].trim())
            sum = sum + amount
        }).then(()=>{
            expect(sum).to.be.lessThan(200000)
        })
        cy.contains('button','Checkout').click()
        cy.get('#country').type("United Kingdom")
        cy.contains('a','United Kingdom').click()
        cy.get('.btn-success').click()
        cy.get('.alert-success').should('contain','Success')
        })

})