describe("Dropdown and list", ()=>{

    it('dropdown',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        // cy.get("#country").select('United States')  //visible text
        // cy.get("#country").select('usa')            //value attribute
        cy.get("#country").scrollIntoView().select(1)                   //index
        // cy.get("#country").select(['usa','canada'])

    })
})