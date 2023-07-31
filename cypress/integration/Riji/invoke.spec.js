describe("Invoke tests", function(){
    it("Invoke Example1", function(){
        cy.visit("https://www.amazon.com/")
        cy.get('#nav-link-accountList').invoke('mouseover').wait(2000).click();

    })

    it.only("invoke Example2", function(){
        cy.visit('https://www.amazon.com/')
        cy.get('#nav-flyout-ya-signin').invoke('show')
        cy.contains('Sign in').click({force: true})
    })

    it("Contains example", function () {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("table[name^='BookTable']>tbody>tr>td").contains('Selenium')
        cy.get("div[class^='post']").should('have.length', "10")// for css with substrig

    })
})