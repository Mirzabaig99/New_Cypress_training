describe("Variables", function () {
    it("Variables Example", function () {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get(".pagination>li:nth-child(1)").then(($el) => {
            const txt = $el.text();
            cy.log(txt);
            cy.screenshot('fullPage');
        })
    })

    it("varibale for multiple elements", function () {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get(".pagination>li").then(($el)=>{
            cy.log($el.length);
           
        })
    })
})