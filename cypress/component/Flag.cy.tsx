/// <reference types="cypress" />

import { Flag } from "@/components/flag"

describe('Flag.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<Flag flag="Brazil" />)
  })
})