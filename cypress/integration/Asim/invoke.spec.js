describe("Invoke tests", function(){
    it("Invoke example", function(){
    cy.visit("https://www.amazon.com/")
    cy.get("#nav-flyout-ya-signin").invoke('show')
    cy.contains('Sign').click({force: true});
    })
})