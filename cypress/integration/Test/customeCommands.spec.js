describe('Custome', function(){
    it("Custome example", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.InputFunction('#name','Anand')
        cy.InputFunction('#email','XYZ@gmaill.com')
        cy.InputFunction('#phone','123456789')
    })
})