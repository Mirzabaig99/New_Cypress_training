describe('retries example', () => {
        it('Example 1', () => {
            cy.visit('https://testautomationpractice.blogspot.com/')
            cy.get('#name').type('test')
        })
})