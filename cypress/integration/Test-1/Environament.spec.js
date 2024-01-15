describe("Environment example", function(){
    it.only("test1", function(){
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get('#n').type(Cypress.env('UName'),{log:false});
        cy.get('#email').type(Cypress.env('Password'),{log:false});
    })

    it("test Fixtures", function(){
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.fixture("test1.json").then((data1) => {
            cy.get('#name').type(data1.name)
            cy.get('#email').type(data1.description)
        })
    })

    it("test Fixtures", function(){
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.PageinationClick("1")
        cy.PageinationClick("2")
        cy.PageinationClick("3")
        cy.PageinationClick("4")

    })
})