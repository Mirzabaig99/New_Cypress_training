describe("child windows example",()=>{
    it("Test1 ",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').click();
        cy.xpath("//h3").should('have.text',"Opening a new window")
    })

    it.only("Test2 ",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').invoke('attr','target','_self').click();
        cy.xpath("//h3").should('have.text',"New Window")
    })
})