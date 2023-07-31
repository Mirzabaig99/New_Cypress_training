describe("Find Examples", function () {
    it("Find Examples", function () {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("table[name='BookTable']>tbody").find("tr").should('have.length', '7')
        cy.get("table[name='BookTable']>tbody").find("tr").find("td").should('have.length', '24')
        cy.get("table[name='BookTable']>tbody").find("tr:nth-child(3)").find("td:nth-child(2)").should('have.text', 'Mukesh')


    })

    it("within", function () {
        cy.get("table[name='BookTable']>tbody").within(() => {
            cy.get("tr").should('have.length', '7').within(()=>{
                cy.get('td').should('have.length','24')
            })
        })
    })
})