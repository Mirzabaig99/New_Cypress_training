describe("select", function () {
    // it("Should select the value", function () {
    //     cy.visit("https://www.bstackdemo.com/")
    // })

    // it("Should select the value", function () {
    //     cy.visit("https://www.bstackdemo.com/")
    // })
    // it("Should select the value", function () {
    //     cy.visit("https://www.bstackdemo.com/")
    // })
    it("Should select the value", function () {
        cy.visit("https://www.bstackdemo.com/")
        cy.get('select').select(1)
    })
})