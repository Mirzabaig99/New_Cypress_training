describe('Test Cases add', () => {

    it.only('SCenario 1', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        // cy.forceVisit("https://mindmajix.com/cypress-training")
        // cy.wait(2000)
        cy.get('#name').type('text')
    })

    it('Scenario 2', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').invoke('attr','target','_self').click();
        
    })
})