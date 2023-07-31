// describe("Pop-up Handling", () => {
//     beforeEach(() => {
//         cy.visit("https://www.w3schools.com/js/tryit.asp?filename=tryjs_alert")
//     })
//     it("Popup test1", () => {
//         cy.get('#runbtn').click();
//         cy.get("iframe[id='iframeResult']").then(cy.wrap).get();
//     })
// })


describe('js alert ', () => {
    it.only('Pop-up example', function() {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get(':nth-child(1) > button').click()
        cy.on('window:alert', function(elert){
            expect(elert).eql('I am a JS Alert')
        })
        cy.contains('I am a JS Alert').click()
    })

    it('js confirm', function() {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm', function(confirm){
            expect(confirm).eql('I am a JS Confirm')  // By defau;lt js confirm will on ok buuton
            return false;                             //return false to click on cancel button
        })
    })

    it('js prompy', function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        // cy.get(':nth-child(3) > button').click()
        // cy.on('window:prompt', function(evt){
        //     cy.stub($promptelement, "prompt").returns("Hello");
        // })
        // ??chnage 2

        cy.window().then(function($promptelement){   // for prompt-type alert

            cy.stub($promptelement, "prompt").returns("Hello");
         
            cy.contains('Click for JS Prompt').click()
         
            cy.get('#result').should('contain','You entered: Hello')
         
         })
    })
})