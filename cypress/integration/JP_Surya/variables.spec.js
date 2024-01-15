describe("Variables", function () {

    var text
    it.only("Test1", function () {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get(':nth-child(9) > :nth-child(3) > .form-check-labe').then(($el) => {
            
            text = $el.text();
            cy.log(text)

        })

        cy.screenshot('My_screenshot');
    })

    it.only("test2", () => {
        cy.log(text)
        text = "This is new text"

    })

    it.only("test3", () => {
        cy.log(text)

    })
})