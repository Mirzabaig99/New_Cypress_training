
describe('Fixture', function () {
    it('reads the fixture', function () {
        cy.fixture('data').then((fixtures)=>{
            cy.log(fixtures.Usname);
            cy.log(fixtures.Url);
            cy.log(fixtures.Password);
            cy.visit(fixtures.Url);

        })
    })
})