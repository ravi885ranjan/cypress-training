const { Then } = require("@badeball/cypress-cucumber-preprocessor")

describe('upload download test suite',()=>{
    beforeEach(()=>{
        cy.visit('https://rahulshettyacademy.com/upload-download-test/index.html')
    })

    it('download and upload test',function(){
        cy.get('#downloadButton').click()
        //wait after download click, causing file not found
        cy.wait(1000)
        const file = Cypress.config("downloadsFolder")+"/download.xlsx"
        cy.task('writeExcelTest',{searchText:"Apple",replaceText:350,change:{rowchange:0,colChange:2},filepath:file,sheetName:"Sheet1"})
        cy.get('#fileinput').selectFile(file)
        cy.contains("Apple").parent().parent().find('#cell-4-undefined').should('have.text',350)
    })
})