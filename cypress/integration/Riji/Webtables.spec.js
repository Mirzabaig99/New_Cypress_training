describe("WebTable", function(){
    it("Webtable", function(){
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("table[id='productTable']>tbody>tr:nth-child(1)>td:nth-child(4)>input").click();
        cy.get("table[id='productTable']>tbody>tr:nth-child(1)>td").contains('$10.99')
        // cy.get("label[class='form-check-label']").contains('Sunday').check();
    })
})