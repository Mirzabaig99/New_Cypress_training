describe('hooks', function(){

    // beforeEach(()=>{
    //     cy.visit("https://testautomationpractice.blogspot.com/")
    // })
    this.beforeAll(()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
    });
    this.beforeEach(()=>{
        cy.get("[type='radio']").check('female')
    })
    before(()=>{
        cy.log('-----Before--------------------')
    })
    it('hokks example1', function(){
       
        cy.InputFunction('#name','Anand')
    })

    it('hokks example2', function(){
        // cy.visit("https://testautomationpractice.blogspot.com/")
        cy.InputFunction('#email','XYZ@gmaill.com')
    })

    it('hokks example3', function(){
        // cy.visit("https://testautomationpractice.blogspot.com/")
        cy.InputFunction('#phone','123456789')
    })

    this.afterAll(()=>{
        cy.log('-----------Testimng is finished!------------')
    })

    this.afterEach(()=>{
        cy.log('-----------Testing resumes...------------')
    })

    after(()=>{
        cy.log('---After----------------------------------------------------------------')
    })

})