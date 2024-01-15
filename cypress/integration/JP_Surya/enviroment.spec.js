describe("Environment example", function(){
    it("Test1", function(){
        cy.visit(Cypress.env('Url'))
        cy.get('#name').type(Cypress.env('UName'),{log:false})
        cy.get('#email').type(Cypress.env('Password'),{log:false})
    })

    it("Test1", function(){
        cy.visit(Cypress.env('Url'))
        cy.fixture('test2.json').then((data) => {
            cy.get('#name').type(data.Name)
            cy.get('#email').type(data.Email,{log:false})
        })
    })

    it.only("Test1", function(){
        cy.visit(Cypress.env('Url'))
        cy.get('#name').type(Cypress.env('UName'),{log:false})
        cy.get('#email').type(Cypress.env('Password'),{log:false})
        cy.PageinationClick("1")
        cy.PageinationClick("2")
        cy.PageinationClick("3")
        cy.PageinationClick("4")

    })
})