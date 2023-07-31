class AutomationTestingPractice {                   // class for pages -- defined at top starting

    visit(){                    //function inside class
        cy.visit('https://testautomationpractice.blogspot.com/')
    }

    EnterName(name){
        return cy.get('#name').type(name)
    }
}

module.exports = AutomationTestingPractice              //export the class