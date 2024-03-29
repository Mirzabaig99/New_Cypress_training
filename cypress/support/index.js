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
import 'cypress-mochawesome-reporter/register';
let isError = false;
let firstTime = true;
require('cypress-xpath');
// before(()=>{
//     cy.visit("https://testautomationpractice.blogspot.com/");
// })

// after(()=>{
//     cy.log("Hooks Example is finisned")
// })

// beforeEach(()=>{
//     cy.log("Before each Example from index file")
//    })
// beforeEach(function () {

//     cy.log('--This is index.js')
//     // cy.visit("https://testautomationpractice.blogspot/")
// })

// Alternatively you can use CommonJS syntax:
// require('./commands')
