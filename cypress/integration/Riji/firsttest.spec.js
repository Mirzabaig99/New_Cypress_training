describe("First Test case for login", function(){
    it("first test case", function(){
        cy.visit("https://testautomationpractice.blogspot.com/")
    })

    it("second test case", function(){
        // cy.get("").type("Rijing");
        cy.get('#name').type("Riji");
        cy.get('#email').type("Email");
        cy.get('#phone').type("1234567899");
    })
})