describe("invoke tests", function(){
    it("Invoke Example", function(){
        cy.visit("https://www.amazon.com/")
        cy.get("#nav-flyout-ya-signin").invoke('show') // invoke will invoke anyt property that is defined ex-show
        cy.contains("Sign").click({force: true}); //force true is use to click forceflly on element
        cy.log("Test is finished")
        console.log("Test is finished");
    })
})