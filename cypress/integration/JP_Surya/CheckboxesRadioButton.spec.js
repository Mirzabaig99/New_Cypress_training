describe('Checkboxes and Radio Button', function(){
    it('checkboxes',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        // cy.get("#sunday").click();
        // cy.get("[type='checkbox']").check();
        // cy.get("[type='checkbox']").check("thursday");
        cy.get("[type='checkbox']").check(["sunday","monday","tuesday"]);
        // cy.get("[type='checkbox']").uncheck("sunday");
        cy.get("#sunday").should('be.checked').uncheck();
    })

    it.only('RadioButton',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("[type='radio']").check("male")
        // cy.get("[type='radio']").check(["male","female"])
        // cy.get("#male").unchecked()
        // cy.get("[type='radio']").uncheck("male")  // cannot be used

    })
})