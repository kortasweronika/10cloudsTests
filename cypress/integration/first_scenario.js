describe('First Scenario', () => {
    it('Tab careers - count QA Engineer offers', () => {
        cy.visit(`${Cypress.config('host')}`)
        cy.contains('Careers').click()
        cy.location('pathname', {timeout: 30000}).should('include', `${Cypress.config('career_url')}`)

        cy.contains('QA Automation Engineer').should('have.length', 1)
    })
})