/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('calender test suite',()=>{
    it('calender test',function(){
        const year = '2028'
        const month = '6'
        const day = '16'
        const expectedList = [month,day,year]
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains("button",year).click()
        cy.get('.react-calendar__year-view__months__month').eq(Number(month)-1).click()
        cy.contains('abbr',day).click()
        cy.get('.react-date-picker__inputGroup__input').each(($e1, index, $list)=>{
            cy.wrap($e1).invoke('val').should('eq',expectedList[index])
        })
    })
})