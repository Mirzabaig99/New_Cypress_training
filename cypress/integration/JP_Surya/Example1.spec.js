describe("test",()=>{

    it("Test12",()=>{
        cy.visit("https://www.jeep-india.com/new-compass.html")
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          cy.get('.model-info-msrp__finance > div > sup > .disclosure-bubble-wrapper > .bubble').click();
          cy.wait(2000)
        //   cy.pause();
          cy.xpath("//*[contains(text(),'EMI is only')]").should('be.visible')
          cy.xpath("//a[@data-lid='disclosure-close']").click();
    })
})