describe("Quick Example", function(){
    it.only('test1',()=>{
        cy.visit("https://mindmajix.com/cypress-training")
        cy.get('#login').click()
        cy.get('#email').type('abc@gmail.com')
        cy.get('#password').type('password')
    })

    it.only('test2',()=>{
        cy.visit("https://mindmajix.com/cypress-training")
        cy.get('#login').click()
        cy.get('#email').type('abc@gmail.com')
        cy.get('#password').type('password')
    })

    it('test3',()=>{
        cy.visit("https://mindmajix.com/cypress-training")
        cy.get('#login').click()
        cy.get('#email').type('abc@gmail.com')
        cy.get('#password').type('password')
    })
})