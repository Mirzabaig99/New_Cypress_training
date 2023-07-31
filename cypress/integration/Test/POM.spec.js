import AutomationTestingPractice from '../../pages/AutomationTestingPractice.pom'  //../ to paremt folder path

const ATPrct = new AutomationTestingPractice()                                      // create object of class

describe('POM', () => {
    it('test1', () => {
        ATPrct.visit();
        ATPrct.EnterName('POM Test 1');
    })
})