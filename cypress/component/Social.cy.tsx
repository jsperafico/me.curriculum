/// <reference types="cypress" />

import { Social } from "@/components/social"

describe('Contacts', () => {
  beforeEach(() => {
    cy.mount(<Social />)
  })

  it('How can you reach me out?', () => {
    cy.get('.list-none > :nth-child(1)').should('contain.text', 'https://www.jsperafico.me').should('have.class', 'before:social-website')
    cy.get('.list-none > :nth-child(2)').should('contain.text', 'jonathanpintosperafico').should('have.class', 'before:social-linkedin')
    cy.get('.list-none > :nth-child(3)').should('contain.text', 'jsperafico').should('have.class', 'before:social-github')
    cy.get('.list-none > :nth-child(4)').should('contain.text', 'hire@jsperafico.me').should('have.class', 'before:social-mail')
  })
})