describe("invoke tests", function () {
    it("Invoke Example", function () {
        cy.visit("https://www.amazon.com/")
        cy.get("#nav-flyout-ya-signin").invoke('show') // invoke will invoke anyt property that is defined ex-show
        cy.contains("Sign").click({ force: true }); //force true is use to click forceflly on element
        cy.log("Test is finished")
        console.log("Test is finished");
    })

    it('example 2', () => {
        cy.visit("https://www.amazon.com/")
        // cy.xpath('//*[@id="nav-flyout-ya-signin"]').invoke('show').wait(2000);
        // cy.contains("Sign").click({ force: true });
        // cy.xpath('//*[@id="icp-nav-flyout"]/span/span[2]/span[2]').invoke()
        cy.get('#nav-flyout-icp').invoke('trigger')
    })

    it('Scenario 2', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').invoke('attr','target','_self').click();
        
    })
})