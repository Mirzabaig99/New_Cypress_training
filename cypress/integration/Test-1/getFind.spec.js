describe("GetFind Exapmles", function(){
    it("Get examples", function(){
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('.widget-content > table > tbody > :nth-child(3) > :nth-child(1)').should('have.text','Learn Java')
        cy.reload()
    })

    it.only("Find and Contains examples", function(){
        cy.visit("https://testautomationpractice.blogspot.com/")
        // cy.get('.widget-content > table').find('tr:nth-child(3)').find('td:nth-child(1)').should('have.text','Learn Java')
        cy.get('label').contains('Name:').should('be.visible')
    })
})