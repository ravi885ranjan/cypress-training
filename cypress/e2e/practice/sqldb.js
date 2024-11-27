describe("test suite sql server",()=>{
    let data
    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/waiting')
        cy.sqlServer('select * from Persons').then(function(result){
            //its 2-D array
            data = result
        })
    })
    it("make query to sql server",()=>{
        cy.get('.form-control.wait-input1').type(data[0][1])
        cy.get('.form-control.wait-input2').type(data[0][2])
        cy.get('.form-control.wait-input3').type(data[0][3])
    })
})