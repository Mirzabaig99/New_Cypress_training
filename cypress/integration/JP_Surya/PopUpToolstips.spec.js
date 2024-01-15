describe('Popup and Tool tipes', function(){
    it('pop-ups example', function(){
        cy.visit("https://www.amazon.com/")
        cy.get("#nav-flyout-ya-signin").invoke('show')
        // cy.get("#nav-link-accountList").trigger('mouseover')
        cy.contains("sign").click();
    })

    it('tool tips example', function(){
        cy.visit("https://www.google.com")
        cy.get('.goxjub').trigger('mouseover', {force: true});
        cy.xpath("//div[text()='Search by voice']").should('be.visible')
    })
})