import productPage from "../support/pageObject/productPage"
//const neatCSV = require('neat-csv')
import neatCSV from 'neat-csv'

let productName
describe("test suite apis",()=>{

    it("complete end to end purchase order with jwt",function(){
        cy.loginApi().then(function(){
            cy.visit('https://rahulshettyacademy.com/client',{
                onBeforeLoad: function(window)
                {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
        cy.contains('button','Sign Out').should('be.visible')
        cy.get('.card-body button:last-of-type').eq(0).click()
        cy.get('.card-body b').eq(0).then(function($e1){
            productName = $e1.text()
        })
        cy.get("[routerlink*='cart']").click()
        cy.contains("Checkout").click()
        cy.get("[placeholder*='Country']").type("United Kingdom")
        cy.contains('span','United Kingdom').click()
        //cy.get('div.field input.txt.text-validated').type('4542 9931 9292 2293')
        cy.contains('div','Credit Card Number').next().type('4542 9931 9292 2293')
        cy.contains('div','Name on Card').next().type('Random Card User')
        cy.contains('div','CVV Code').next().type('543')
        cy.contains('div','Expiry Date').next().select('06')
        cy.contains('div','Expiry Date').next().next().select('31')
        cy.contains('Place Order').click()
        cy.wait(2000)
        cy.contains('button','Click To Download Order Details in Excel').click()
        const filepath = Cypress.config("downloadsFolder")+"/order-invoice_ravi885ranjan.xlsx"
        cy.task('excelToJsonTask',filepath).then(function(result){
            cy.log(result)
            const actual = result.data[1].B
            expect(productName).to.equal(actual)
            //for column's name without space
            expect('United Kingdom').to.equal(result.data[1].E)
        })
        //to just check if a certain value exists but not concerned with the position, below returns a text promise
        //can be used for any text based files like csv, ssv etc
        cy.readFile(filepath).then(function(text){
            expect(text).to.include(productName)
        })
    })
})