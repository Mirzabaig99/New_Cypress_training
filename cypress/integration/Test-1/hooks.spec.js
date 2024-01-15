describe('Hooks Example',()=>{

   before(()=>{
    cy.log("Insides example")
   })

   beforeEach(()=>{
    cy.log("Before each Example")
   })

   afterEach(()=>{
    cy.screenshot();
   });

    it("test1", function(){
        
        cy.get('#name').type(Cypress.env('UName'),{log:false});
        cy.get('#email').type(Cypress.env('Password'),{log:false});
    })

    it("test Fixtures", function(){
        cy.fixture("test1.json").then((data1) => {
            cy.get('#name').type(data1.name)
            cy.get('#email').type(data1.description)
        })
    })
})