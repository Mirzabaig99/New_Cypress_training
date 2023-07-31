describe("select", function () {
    it("Should select the value", function () {
        cy.visit("https://www.bstackdemo.com/")
        cy.get('select').select("Lowest to highest")  // select a dropdown by text
        cy.wait(2000)
        cy.get('select').select("Highest to lowest")  // select a dropdown by  text
        cy.wait(2000)
        cy.get('select').select("Select")             // select a dropdown by  text
        cy.wait(2000)
        cy.get('select').select("lowestprice")        // select a dropdown by  Value
        cy.wait(2000)
        cy.get('select').select("highestprice")       // select a dropdown by  Value
        cy.wait(2000)
        cy.get('select').select(1)                    // select a dropdown by  Index
        cy.wait(2000)
        cy.get('select').select(2)                    // select a dropdown by  Index
        cy.wait(2000)
        cy.get('select').select(0)                     // select a dropdown by  Index


    })

    it.only("dropdown with checkboxes",()=>{
        cy.visit("https://codepen.io/RobotsPlay/pres/pyNLdL")//visit and select a checkbox by geeting its locater
    })
})