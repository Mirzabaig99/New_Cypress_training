describe("Assertion", function () {
    it("not assertions", function () {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("table[name='BookTable']>tbody>tr:nth-child(2)>td:nth-child(2)").should('have.text','Amit')   //chai simple assertion
        cy.get("table[name='BookTable']>tbody>tr:nth-child(5)>td:nth-child(1)").should('contain.text', 'Selenium')
        cy.get('[value="red"]').should('have.value', 'red')
        cy.get('[value="red"]').should('have.text', 'Red')
        cy.get('#name').should('have.attr','class','form-control')
        cy.get("table[name='BookTable']>tbody>tr:nth-child(4)>td").should('have.length', '4')
        cy.get('#male').should('be.visible').click()                    //Chaining assertion 
        cy.get('#sunday').should('not.be.checked').click();             //Chaining assertion

        //-------work to do -- get submit button and so chaing assertion-----//

        cy.get('.widget-content > table > tbody > :nth-child(2) > :nth-child(1)').invoke('text').then((text) => {
                cy.log(text);
                expect(text).equal('Learn Selenium')   //chai promise assertion 
            })
    })
})