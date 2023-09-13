describe('form inscription back market', () => {
    it('passe', ()=>{
        cy.visit('https://preprod.backmarket.fr/fr-fr/register')
        cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click()
        cy.get('#firstName').type('Hugo')
        cy.get('#lastName').type('dela')
        cy.get('#signup-email').type('hdela@mailtest.com')
        cy.get('#signup-password').type('Lepassword123')
        cy.get('._2OVE0h6V').click()
        cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
        })
})