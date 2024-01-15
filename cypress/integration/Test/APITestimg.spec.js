describe('template spec', () => {
    it('passes', () => {

        cy.request('GET', 'https://www.thunderclient.com/welcome').then((response) => {
            expect(response.status).to.eq(200)
            // expect(response.body).to.equal('Welcome to Thunder Client')
            expect(response.body).to.have.property('message', 'Welcome to Thunder Client')
            // expect(response.body.key).to.have.key('message')
            cy.log(JSON.stringify(response.body))
            cy.log(response.key)
        })

        // cy.request('GET', 'https://www.thunderclient.com/welcome').its('body').should('include', 'Welcome to Thunder Client');

    })

    it('test2', () => {
        cy.request('GET', 'https://www.thunderclient.com/welcome').then((response) => {
            cy.log(response.body.message)
            cy.log(JSON.stringify(response.body))
            // var parsedData = JSON.parse(response);
            cy.log(typeof response);
            expect(response.body.message).eql('Welcome to Thunder Client')
        })
        cy.request({ method: 'get', url: 'https://www.thunderclient.com/welcome' }).then((response) => {
            cy.log(response.body.message)
            cy.log(JSON.stringify(response.body))
            // var parsedData = JSON.parse(response);
            cy.log(typeof response);
            expect(response.body.message).eql('Welcome to Thunder Client')
        })
    })
    it('POST example', () => {
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

    it('PUT example', () => {
        cy.request('PUT', 'https://reqres.in/api/users/2', {
            "id": "1000",
            "email": "xyz.gmail.com"
        }).then(function (response) {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq("1000")
        })
    })

    it.only('Delete example', () => {
        cy.request('DELETE', 'https://reqres.in/api/users').then(function (response) {
            expect(response.status).to.eq(204)
        })
    })
})