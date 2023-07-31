describe("Environments", function () {
    it("Golbal variables", function () {
        cy.visit(Cypress.env('Url'))  
        cy.log(Cypress.env('UName'))   //Cypress.env uses golbal values, pass key from cypress.env,json file
    })
})