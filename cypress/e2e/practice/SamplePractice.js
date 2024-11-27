describe('this is a suite',function() {
    it('its a test case', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.product').should('have.length',5)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list)=>{
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })

        //promise example
        //const logo = cy.get('.brand')
        //cy.log(logo.text())
        //here promise has to be resolved as const is not from cypress
        cy.get('.brand').then(logo=>{
            cy.log(logo.text())
        })
        cy.get('.brand').should('have.text','GREENKART')
    })
})