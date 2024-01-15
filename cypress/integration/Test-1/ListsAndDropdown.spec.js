describe("Dropwdown", function () {
    it('Example1-Dropdown', function () {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#country').select('usa') //Using Value attribute
        cy.get('#country').select('United Kingdom')  //Using exact text
        cy.get('#country').select(3) //Using index
        cy.get('#country').select(['usa', 'uk']) //multiple value attribute but will be applicable for muptiple select only
    })

    it('Example1-lists', function () {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#colors').select('Red') //Using exact text
        cy.get('#colors').select('blue') //Using value attribute
        cy.get('#colors').select(2)  //Using 
    })

    it.only('Date Example', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#datepicker').click();
        cy.get('tr:nth-child(4) >td:nth-child(2) > .ui-state-default').click();
    })
})