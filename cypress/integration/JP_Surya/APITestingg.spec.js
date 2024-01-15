describe('API Testing', () => {
    it('GET API', () => {
        cy.request('GET', 'https://reqres.in/api/users').then((response) => {
            cy.log(response)
            // cy.log(JSON.stringify(response))
            cy.log(JSON.stringify(response.body.data[0].email))
            expect(response.body.data[0].email).to.equal('george.bluth@reqres.in')

        })
    })

    it.only('POST example', () => {
        cy.request('POST', 'https://reqres.in/api/users/2', {
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