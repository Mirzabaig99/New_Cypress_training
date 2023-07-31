//This is our first test case in jasmine framework 
describe("Cypress Course", function () {
    it("Launch Cypress course - Mindmagix", function () {
        cy.visit("https://mindmajix.com/cypress-training")
    })
    it("Click on Get Details ", function(){   
        cy.clickdetails();
    })

    it("Click on Get Details -1", function(){   
        cy.clickdetails();
    })

    it("Click on Get Details -2", function(){   
        cy.clickdetails();
    })

    it('invoke test', function(){
        cy.get('#register-now').invoke('val').should('eq','');
        cy.get('#register-now').invoke('show').click();
    })
})