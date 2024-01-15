describe.only('example',()=>{
    it.only('test1',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#name').type("my name")
        // cy.pause();
        cy.get('#name').type("my name1")
        cy.get('#textarea').type("my textarea")
        // .form-control
        cy.reload();
    })

    it('test2',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.xpath("//input[@id='name']").type("my name")
        cy.xpath("//textarea[@id='textarea']").type("my textarea")
    })
})