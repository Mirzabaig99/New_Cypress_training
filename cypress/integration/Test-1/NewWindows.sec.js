describe("Windows Handling",()=>{
    it("examples for new window without changing attr",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').click();
        cy.xpath("//h3").should('have.text','New Window')
    })

    it.only("examples for new window after changing attr target",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').invoke('attr','target','_self').click();
        cy.xpath("//h3").should('have.text','New Window')
    })
})