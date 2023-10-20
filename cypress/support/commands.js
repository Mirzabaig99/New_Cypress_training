// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('clickdetails', () => {
    cy.wait(1000);
    cy.get('#more-info').click();
    // cy.get('span.MuiButton-label').first().click();
})

Cypress.Commands.add('PageinationClick', (number) => {
    cy.wait(1000);
    cy.get(".pagination>li:nth-child(" + number + ")").click()
})

////////////////////////////////create a funxtion for input fields//////////////////////////////// -- 10-07-23
Cypress.Commands.add('InputFunction', function (locater, value) {
    cy.get(locater).type(value)
})

Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self');
    });
});

Cypress.Commands.add('InputValues',(Textboxname, value) => {
    cy.xpath("//*[@id='"+Textboxname+"']").type(value);
})