describe('API Testing', function () {
    it('Get Example', function () {
        cy.request('GET', 'https://reqres.in/api/users').then(async (Response) => {
            expect(Response.status).to.eq(200)
            await cy.log(JSON.stringify(Response.body.data[1].email))
            expect(Response.body.data[1].email).equal('janet.weaver@reqres.in')
        })
    })
    it.only('POST example', () => {
        cy.request('POST', 'https://reqres.in/api/users', {
            "name": "Bingo",
            "job": "Team lead"
        }).then((response) => {
            //Asserting the status code to be 201 for successful execution
            expect(response.status).to.eq(201)
            //Asserting the name which we have inserted into
            expect(response.body.name).to.eq("Bingo")
            //Asserting the status text to confirm whether it is created
            expect(response.statusText).to.eq("Created")
        })
    })
})