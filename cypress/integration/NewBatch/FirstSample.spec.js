describe("My First Test", function () {   // describe will have 2 things

    it("TC01", function () {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#name').type('My Name')
        cy.get('#email').type('My Email')
        cy.get('#phone').type('My Phone Number')
    })
    it("TC02", function(){
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#name').type('My other Name')
        cy.get('#email').type('My other Email')
        cy.get('#phone').type('My other Phone Number')
    })
    // it("test3", function(){

    // })
})

//describe is test case just like your excel sheet
//it are scrnarios like TC01, TC02 etc , some of the, are +ve and some are -ve