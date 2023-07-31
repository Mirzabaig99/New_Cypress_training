describe("Tool tip", function(){
    it("Tooltip test", function(){
    cy.visit("https://www.google.com/");
    cy.wait(2000)
    cy.get('.goxjub').trigger('mouseover', {force: true})
    cy.get('[style="background: rgb(45, 45, 45); border: 1px solid rgb(255, 255, 255); color: rgb(255, 255, 255); display: block; font-size: 11px; font-weight: bold; height: 29px; left: 670.7px; line-height: 29px; padding: 0px 10px; position: absolute; text-align: center; top: 235.8px; white-space: nowrap; visibility: visible; z-index: 2000; box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px; box-sizing: border-box; transition: opacity 0.13s ease 0s;"]').should('have.text', "Search by voice")

    })
})