describe('alert test suite',()=>{

    it('trigger alert test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($e1, index, $list)=>{
            const text = $e1.text()
            if(text.includes('Python')){
                //next can only be applied on get method
                cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
                    const pricevalue = price.text();
                    expect(pricevalue).to.equal('25')
                })
            }
        })
    
    })
})