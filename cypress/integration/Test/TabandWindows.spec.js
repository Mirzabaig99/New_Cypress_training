describe("NewTab", function(){
    it("should create a new", function(){
        cy.visit("https://the-internet.herokuapp.com/windows");
        // cy.get('.example > a').invoke('removeAttr','target').click();
        cy.get('.example > a').invoke('attr','target','_self').click();
    })
})