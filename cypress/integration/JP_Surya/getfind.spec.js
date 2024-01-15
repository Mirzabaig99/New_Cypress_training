describe("Get and find example", function(){
    it("get example", function(){
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('.widget-content > table > tbody > :nth-child(3) > :nth-child(1)').should('have.text',"Learn Java")
    })

    it.only('find example',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('.widget-content > table').find('tr:nth-child(3)').find('td:nth-child(1)').should('have.text','Learn Java') //example for find elemnets
        cy.get('label').contains('Name:').should('be.visible')  //example for contains with text
    })
})