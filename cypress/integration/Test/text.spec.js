describe("text", function(){
    let a = ["Learn Selenium", "Amit", "Selenium"]
    let items =[]
    it("text from multiple lines", function(){
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get("table[name='BookTable']>tbody>tr>td").each(($el)=>cy.log($el.text()))
    cy.reload();

    // cy.get("table[name='BookTable']>tbody>tr>td").each(($el)=>{
    //     items.push($el.text());
    // })

    // for(let i=0; i<items.length; i++){
    //     // expect(items[i].equal(a[i]))  //chai assertion
    //     cy.log(items[i])    }

    })
    
})