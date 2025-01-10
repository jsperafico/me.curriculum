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
        cy.get(`.list-none > :nth-child(${data.index})`).should('contain.text', data.text).should('have.class', `before:social-${data.type}`)
        cy.get(`.list-none > :nth-child(${data.index}) > a`).should('have.attr', 'href', data.href)
      })
    })
  })

  context('Responsive design', () => {
    beforeEach(() => {
      cy.viewport('iphone-6')
      cy.mount(<Social />)
    })

    it(`No text should be visible`, () => {
    })
  })
})