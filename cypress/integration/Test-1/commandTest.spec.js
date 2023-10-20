describe('Commands example', function(){
    it('Test1',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.InputValues("name","Test1")
        cy.InputValues("email","TestEmail")
        cy.InputValues("phone","123456")
        cy.InputValues("textarea","Descriptions")

    })
})