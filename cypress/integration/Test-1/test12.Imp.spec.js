describe("Assertions", function () {
    it.only("Example-1", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.xpath("//table[@name='BookTable']//tr[2]//td[2]").should('have.text', 'Amit')
        cy.get('#name').should('have.id', 'name').type("MyName",{log:false})
        cy.get('#name').should('have.css', 'font-weight', '400').clear().type("MyAnotherName",{log:false})
        cy.xpath("//table[@name='BookTable']//tr[2]//td[1]").should('contain.text', 'Learn')
        cy.log("This tis just example")
        console.log("This tis just example")
    })

    it("Exaple-2", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.xpath("//table[@name='BookTable']//tr[2]//td[1]").then(($el) => {
            cy.log($el.wrap().text())
            // if($el.wrap().text()=="Learn Selenium"){
            //     cy.log("----------")
            // }
            expect($el.wrap().text()).to.be.equal("Learn Selenium")
        })
    })
    it("Exaple-3", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.xpath("//table[@name='BookTable']//tr[2]//td").then(($el) => {
            cy.log($el.length)
            for (var i = 0; i < $el.length; i++) {
                cy.log($el.wrap().text())
            }
        })
    })
})