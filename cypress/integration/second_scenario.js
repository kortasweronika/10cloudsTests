describe('Second Scenario', () => {

    it('Search job offer QA Engineer - check in all offers title', () => {
        cy.visit(`${Cypress.config('host')}`)
        cy.contains('Careers').click()
        cy.location('pathname', {timeout: 30000}).should('include', `${Cypress.config('career_url')}`)

        let textSearch = 'Automation'
        cy.get('input[type=\'text\']').clear().type(textSearch).then(() => {
            cy.get('a').children().should('contain', textSearch)
        })
    })
})