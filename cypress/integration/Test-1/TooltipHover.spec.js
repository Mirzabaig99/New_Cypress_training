describe("Exampme Tool tip and Hover",()=>{
    it("example1", ()=>{
        cy.visit("https://www.amazon.com/")
        cy.get('#nav-link-accountList').trigger('mouseover')
        cy.wait(2000)
        cy.xpath("(//span[text()='Sign in'])[1]").click();
    })

    it.only("example 2", ()=>{
        cy.visit("https://www.google.com/")
        cy.get('.goxjub').trigger('mouseover', {force: true})
        cy.xpath("//div[text()='Search by voice']").should('be.visible')
        cy.get('#APjFqb').click();
        cy.wait(2000)
    })
})