describe("test suite apis",()=>{
    it("mocking http response",()=>{
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.interceptGetBook().as("bookRetrieval")
        cy.get(".btn-primary").click()
        cy.wait("@bookRetrieval").then(({response})=>{
            //1 for the header
            cy.get("tr").should("have.length",response.body.length+1)
        })
        cy.get("p").should("have.text","Oops only 1 Book available")
    })

    it("mocking http request",()=>{
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>{
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
            req.continue((res)=>{
                expect(res.statusCode).to.equal(200)
            })
        }).as("requestAlter")
        cy.get("button[class='btn btn-primary']").click()
        cy.wait("@requestAlter")
    })

    it("api call",()=>{
        cy.request('POST',"http://216.10.245.166/Library/Addbook.php",{
            "name": "test-book3",
            "isbn": "dfgsdg3",
            "aisle": "8803",
            "author": "testing-author"
        }).then((res)=>{
            expect(res.body).to.have.property("Msg","successfully added")
            expect(res.status).to.equal(200)
        })
    })
})