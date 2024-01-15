describe('WebTables Example',()=>{
    it('example 1',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        // .widget-content > table > tbody > :nth-child(2) > :nth-child(1)
        //table[@name='BookTable']//td
        cy.xpath("//table[@name='BookTable']//tr[2]//td[1]").should('have.text','Learn Selenium')
    })

    it.only('example 2', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('.widget-content > table > tbody > tr:nth-child(2) > td').each(($el)=>{
            cy.log($el.text());
            const t = $el.text();
            // cy.get('#name').clear().type(t)
            cy.wrap($el).click();
        })
    })

    // it('examples 3',()=>{
    //     cy.visit('https://testautomationpractice.blogspot.com/')
    //     cy.xpath("//div[@class='form-group']//input[@type='text']").each(($el)=>{
    //         cy.wrap($el).fixture('data').then()
    //     })
    // })
})