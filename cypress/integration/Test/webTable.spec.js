describe("Working on Webtabless", function () {
    it("webTables", function () {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("table[name='BookTable']>tbody>tr:nth-child(4)>td:nth-child(2)").contains("Animesh")

    })
})