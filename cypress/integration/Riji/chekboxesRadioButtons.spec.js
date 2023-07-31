describe("Checkboxes & RadioButton", function () {
    it("Checkboxes", function () {
    
        cy.visit("https://testautomationpractice.blogspot.com/");
        // cy.get('#sunday').click();
        cy.get("[type='checkbox']").check()
        // cy.get("[type='checkbox']").check('thursday')
        cy.get("[type='checkbox']").first().check();
        cy.get("[type='checkbox']").check(['monday','thursday', 'wednesday']);
        cy.get("[type='checkbox']").uncheck('monday')
        
    })

    it.only("radioButton", function(){
        cy.visit("https://testautomationpractice.blogspot.com/");
        // cy.get('#sunday').click();
        cy.get("[type='radio']").check('female')
        cy.get("[type='radio']").first().check();
        cy.get("[type='radio']").check(['female', 'male']);
    })
})