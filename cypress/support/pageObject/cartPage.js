class cartPage {
    sumOfProducts(){
        let sum = 0
        const promise = new Promise(()=>{
            cy.get('tr td:nth-child(4) strong').each(($e1, index, $list)=>{
                const amount = Number($e1.text().split(' ')[1].trim())
                sum = sum + amount
            }).then(function() {
                return sum
            })
        })
        return promise
    }
}

export default cartPage;