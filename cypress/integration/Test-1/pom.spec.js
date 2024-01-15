import AutomationTestingPractice from '../../pages/AutomationTestingPractice.pom'
describe('POM', function() {

    let Ob_AT = AutomationTestingPractice()
    it('test1', function() {
        Ob_AT.EnterName('test1')
    })
})