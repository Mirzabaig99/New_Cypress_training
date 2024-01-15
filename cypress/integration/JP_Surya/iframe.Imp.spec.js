/// <reference types = "Cypress"/>
/// <reference types = "Cypress-iframe"/>


import 'cypress-iframe'

describe("Frames", function(){
    it("TEst1",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        // cy.get("#RESULT_TextField-0").type("MyName")
        cy.frameLoaded("#frame-one796456169")
        cy.iframe().find("input[name='RESULT_TextField-0']").type("MyName")
        cy.iframe().find("span[class='icon_calendar']").click()
        cy.iframe().find("td[data-month='10']>a[data-date='15']").click()
    })
})