/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('test suite',()=>{

    it('web table test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com',()=>{
            cy.get('.navbar-nav a[href="about.html"]').click()
            cy.get(".mt-50 h2").should('contain','QAClick Academy');
        })
    
    })

    it('mouse hover test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')
        //cy.get('[href="#top"]').click()
        cy.contains('Top').click()
        cy.url().should('include','top')
    })

    it('another test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then($e1=>{
            const url = $e1.prop('href')
            cy.visit(url)
            cy.origin("https://www.qaclickacademy.com",()=>{
            cy.get('.navbar-nav a[href="about.html"]').click()
            cy.get(".mt-50 h2").should('contain','QAClick Academy')
            })
        })
    })

    it('frames test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.getIframeBody().find("a[href*='mentorship']").eq(0).click({force:true})
        //cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").as("mentorship")
        //reload of iframe after click takes time
        cy.wait(2000)
        //cy.get("@mentorship").eq(0).click({force:true})
        cy.iframe().find(".pricing-header").should('have.length',2)
    })

})