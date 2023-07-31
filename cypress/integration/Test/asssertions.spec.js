// const { should } = require("chai");

describe("Assertion", function () {
    it("not assertions", function () {
        cy.visit("https://testautomationpractice.blogspot.com/");
        // cy.get("table[name='BookTable']>tbody>tr:nth-child(2)>td:nth-child(2)").should('have.text', 'Amit');
        // cy.get('.titlewrapper > .title').should('contain.text', 'Automation').and('contain.text', 'Practice');
        // cy.get("table[name='BookTable']>tbody>tr:nth-child(4)>td").should('have.length', '4')
        // cy.get('#HTML1 > .title').should('have.attr', 'class', 'title')
        // cy.get('#sunday').check().should('be.checked')
        // cy.get('.widget-content > table > tbody > :nth-child(2) > :nth-child(1)').invoke('text').then((text) => {
        //     cy.log(text);
        //     cy.get('#Wikipedia1_wikipedia-search-input').type(text)
        //     cy.get('.wikipedia-search-button').should('be.visible').click();
        // })
        cy.get('#email').should('have.css','font-weight','600')
    })
})