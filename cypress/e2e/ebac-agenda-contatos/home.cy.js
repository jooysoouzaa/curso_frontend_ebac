/// <reference types="cypress" />

describe('Testes para a página home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve incluir novo contato', () => {
        cy.get('input[type="text"]').type('Joy Sóuza')
        cy.get('input[type="email"]').type('joysouza.contato@gmail.com')
        cy.get('input[type="tel"]').type('(11)96983-8280')
        cy.get('.adicionar').click()
    })
    it('Deve editar o contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Fernanda Silva')
        cy.get('input[type="email"]').clear().type('fehsilva.contato@gmail.com')
        cy.get('input[type="tel"]').clear().type('(14)9999-9999')

        cy.get('.alterar').click()
    })
    it('Deve excluir o contato', () => {
        cy.get('.delete').first().click()
    })

})    