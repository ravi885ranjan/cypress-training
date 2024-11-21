import homePage from "../../../support/pageObject/homePage"
beforeEach(function() {
    cy.fixture('example').then(function(data) {
        this.homePageO = new homePage()
        this.data = data
    })
})