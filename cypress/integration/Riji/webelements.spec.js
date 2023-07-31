describe("WebElements tests", function () {
    it("By id", function () {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("#name").type("Riji")  // for css with id attribute  
        // cy.get(".form-control").type("Riji")                                          
        cy.get(".hasDatepicker").click();  // for css with class
        cy.get("table[name^='BookTable']>tbody>tr:nth-child(5)>td:nth-child(3)")// foe css with attribute
        cy.get("div[class^='post']").should('have.length', "10")// for css with substrig

    })
})