describe('getting text', function(){
    it('test1',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('.widget-content > table > tbody > :nth-child(2) > :nth-child(1)').then(($el)=>{
            cy.log($el.wrap().text());
            expect($el.wrap().text()).is.equal('Learn Selenium')
        })
    })

    it.only('test2',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("input[type='text']").each(($el,index)=>{
            cy.wrap($el).type('test1')
        })
        // cy.get("input[type='text']").then(($el)=>{
        //     for(var i=0;i<$el.length;i++) {
        //         cy.wrap($el[i]).type('testing')
        //     }
        // })
    })
})