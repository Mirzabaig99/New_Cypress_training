// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
let isError = false;
let firstTime = true;

beforeEach(function () {

    cy.log('--This is index.js')
    cy.visit("https://testautomationpractice.blogspot/");

    cy.once('fail', (err) => {
        isError = true;
        throw err;
    });
    if (isError) {
        cy.resetAll();
    }
    if (firstTime || isError) {
        firstTime = false;
        isError = false;
        // setupMyBackend()
    }
})

// Alternatively you can use CommonJS syntax:
// require('./commands')
