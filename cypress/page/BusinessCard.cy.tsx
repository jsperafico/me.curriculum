/// <reference types="cypress" />

import { BusinessCardPage } from "@/pages/business-card"

describe('Business Card page', () => {
  context('General behavior', () => {
    beforeEach(() => {
      cy.viewport('macbook-13')
      cy.mount(<BusinessCardPage />)
    })

    it('Should have two sides', () => {

    })
  })

})