describe("class adn attribute", function(){

    it("class attribute", function(){
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get(".pagination>li").first().click();
        cy.get(".pagination>li:nth-child(2)").click()
    })
})