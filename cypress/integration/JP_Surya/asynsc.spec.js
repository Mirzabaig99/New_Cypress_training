describe("Async code generation", function () {
    it('async code example', function () {
        cy.visit("https://testautomationpractice.blogspot.com/")
        //click on the technology option
        cy.get('.widget-content > table > tbody > :nth-child(2) > :nth-child(1)').should('have.text','Learn Selenium')
        cy.url() // No commands executed here too
            .should('include', 'blogspot') // No, nothing.
        console.log("This is console to check the log before promise --- to check")  // Log to check the async behaviour // is not a part of cyp cmd 
        cy.log("This is to check the log") // Log to check the sync behaviour // is part of cyp cmd 
    })

    it('test1',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('.widget-content > table > tbody > :nth-child(2) > :nth-child(1)').then(($el)=>{
            cy.log($el.wrap().text());
            cy.wait(2000)
            expect($el.wrap().text()).is.equal('Learn Selenium')
        })
    })

    it('async code example - sync code', async function () {
        cy.visit("https://testautomationpractice.blogspot.com/")
        //click on the technology option
        cy.get('.widget-content > table > tbody > :nth-child(2) > :nth-child(1)').should('have.text','Learn Selenium')
        await cy.url() // No commands executed here too
            .should('include', 'blogspot') // No, nothing.
      console.log("This is console to check the log before promise --- to check")  // Log to check the async behaviour // is not a part of cyp cmd 
        cy.log("This is to check the log") // Log to check the sync behaviour // is part of cyp cmd 
    })

    it.only('test1 - async code',async ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        await cy.get('.widget-content > table > tbody > :nth-child(2) > :nth-child(1)').then(async($el)=>{
            await cy.log($el.wrap().text());
            await cy.wait(2000).then(()=>{
                expect($el.wrap().text()).is.equal('Learn Selenium')
            })
            
        })
    })
})