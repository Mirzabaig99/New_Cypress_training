describe('Windows', function() {

    it('problem opening new window', function() {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('h3').should('have.text','Opening a new window')
        cy.get('.example > a').click();
        cy.get('h3').should('have.text','New Window')
    })

    it('Solution for new windows - removing target attribute', function(){
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('h3').should('have.text','Opening a new window')
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.get('h3').should('have.text','New Window')
    })

    it.only('Solutions for new windiws - changing target attributre values', function() {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('h3').should('have.text','Opening a new window')
        cy.get('.example > a').invoke('attr','target','_self').click()
        cy.get('h3').should('have.text','New Window')
        
    })
})