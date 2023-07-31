describe("wait", function () {
    it("wait example", function () {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.wait(5000)
        cy.get(".pagination>li").first().click()
        // cy.wait(5000)
        cy.PageinationClick(2);
        // cy.get(".pagination>li:nth-child(2)").pause().click()
    })

    it("wait example", function () {
        cy.PageinationClick(3);
        // cy.get(".pagination>li:nth-child(2)").pause().click()
    })

    it("wait example", function () {
        cy.PageinationClick(4);
        // cy.get(".pagination>li:nth-child(2)").pause().click()
    })
})