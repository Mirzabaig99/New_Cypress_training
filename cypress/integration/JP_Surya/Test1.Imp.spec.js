describe("Quick Example", function(){
    it('test1',()=>{
        cy.visit("https://mindmajix.com/cypress-training")
        cy.get('#login').click()
        cy.get('#email').type('abc@gmail.com', { log: false })
        cy.get('#password').type('password', { log: false })
        cy.wait(2000)
        cy.log("Please enter")
    })

    it('test2',()=>{
        cy.visit("https://mindmajix.com/cypress-training")
        cy.get('#login').click()
        cy.get('#email').type('abc@gmail.com', { log: false })
        cy.get('#password').type('password', { log: false })
    })

    it('test3',()=>{
        cy.visit("https://mindmajix.com/cypress-training")
        cy.get('#login').click()
        cy.get('#email').type('abc@gmail.com')
        cy.get('#password').type('password')
    })
})