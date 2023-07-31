const cypress = require("cypress")

describe("Async code generation", function () {
    it('async code example', function () {
        cy.visit(Cypress.env('url'))
        //click on the technology option
        cy.get(':nth-child(3) > .wp-block-columns > :nth-child(1) > .wp-block-buttons > .wp-block-button > .wp-block-button__link')
            .click()
        cy.url() // No commands executed here too
            .should('include', '/biology') // No, nothing.
        console.log("This is console to check the log before promise")  // Log to check the async behaviour // is not a part of cyp cmd 
        cy.log("This is to check the log") // Log to check the sync behaviour // is part of cyp cmd 
    })

    it('async resolve promise', function () {
        let x = 5
        cy.visit('https://lambdageeks.com/')
        //click on the technology option
        cy.get(':nth-child(3) > .wp-block-columns > :nth-child(1) > .wp-block-buttons > .wp-block-button > .wp-block-button__link')
            .click()
        cy.url() // No commands executed here too
            .should('include', '/biology').then(async function () {  // async function will create a asyncr function
                console.log('this is to check log after promise execution');
                await cy.log(x + 1)  // await is used with async eyword to wait for promise execution
                return x = x + 1
            })
        cy.log("This is to check the log") // Log to check the sync behaviour // is part of cyp cmd 
        cy.log(x)
    })
})