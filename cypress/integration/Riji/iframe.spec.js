// iframe[id='frame-one796456169']
/// <reference types = "Cypress"/>
/// <reference types = "Cypress-iframe"/>

import 'cypress-iframe'

describe('iframe', function () {
    it.only('test1', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.frameLoaded('#frame-one796456169')
        cy.iframe().find("input[name='RESULT_TextField-0']").type('text2');
        // cy.get("input[name='RESULT_TextField-0']").type('text2');
    })

    it('test2', () => {

        cy.visit('https://iframetester.com/?url=https://www.lambdatest.com/blog')
        //let's test iframe
        cy.get('#iframe-window')
            .should('be.visible')
            .should('not.be.empty')
            .then(($iframexyz) => {
                const $body = $iframexyz.contents().find('body')

                cy.wrap($body)
                    .find(`input[name='s']`)
                    .type('Cypress{enter}')

            })
    })
})