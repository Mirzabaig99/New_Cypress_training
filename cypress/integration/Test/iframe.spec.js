/// <reference types = "Cypress"/>
/// <reference types = "Cypress-iframe"/>

import 'cypress-iframe'

describe("iframes", function(){
    it("First iframes", function(){
    cy.visit("https://jqueryui.com/draggable/");
    cy.frameLoaded('.demo-frame')
    cy.iframe().find('#draggable').click();
    })
})