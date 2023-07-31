describe("Test Myntra", function () {
    it("Test 1", function () {
        cy.visit("https://demo.guru99.com/test/radio.html");
        cy.get("[type='checkbox']").check(['checkbox1']);
        cy.wait(1000)
        cy.get("[type='checkbox']").uncheck("checkbox1");
        cy.wait(1000)
        cy.get("[type='checkbox']").first().check();
        cy.wait(1000)
        cy.get("[type='checkbox']").check(['checkbox1','checkbox2']);
        cy.get('#vfb-7-2').check();

        
    })
})