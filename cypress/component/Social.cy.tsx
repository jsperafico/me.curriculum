/// <reference types="cypress" />

import { Social } from "@/components/social"

import SocialData from "../fixtures/social.json"


describe('Contacts', () => {
  context('General behaviour', () => {
    beforeEach(() => {
      cy.viewport('macbook-13')
      cy.mount(<Social />)
    })

    SocialData.forEach((data) => {
      it(`"${data.type}" can be the best way to reach me out`, () => {
        cy.get(`.list-none > :nth-child(${data.index}) > a`).should('have.attr', 'href', data.href).should('be.visible')

        cy.get(`.list-none > :nth-child(${data.index}) > a > div`).should('have.class', `before:social-${data.type}`).should('be.visible')
        cy.get(`.list-none > :nth-child(${data.index}) > a > div > span`).should('contain.text', data.text).should('be.visible')
      })
    })
  })

  context('Responsive design', () => {
    beforeEach(() => {
      cy.viewport('iphone-6')
      cy.mount(<Social />)
    })

    SocialData.forEach((data) => {
      it(`Label for "${data.type}" can't be visible`, () => {
        cy.get(`.list-none > :nth-child(${data.index}) > a`).should('have.attr', 'href', data.href).should('be.visible')

        cy.get(`.list-none > :nth-child(${data.index}) > a > div`).should('have.class', `before:social-${data.type}`).should('be.visible')
        cy.get(`.list-none > :nth-child(${data.index}) > a > div > span`).should('contain.text', data.text).should('not.be.visible')
      })
    })
  })
})