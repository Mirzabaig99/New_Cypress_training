describe("examples", function(){
    it("Assertion - 1",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('.widget-content > table > tbody > :nth-child(2) > :nth-child(1)').should('have.text','Learn Selenium')
        cy.get('.widget-content > table > tbody > :nth-child(2) > :nth-child(1)').should('contain.text','Selenium')
        cy.get('#name').should('be.visible').type('text')
        cy.get('#datepicker').should('have.attr','class','hasDatepicker')
        cy.get('#datepicker').should('have.class','hasDatepicker')
        cy.get('#name').should('have.css','font-weight','400').clear().type('text Again')
    })

    it.only("Exaple-2", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.xpath("//table[@name='BookTable']//tr[2]//td[1]").then(($el) => {
            cy.log($el.wrap().text())
            expect($el.wrap().text()).to.be.equal("Learn Selenium")
        })
    })
})