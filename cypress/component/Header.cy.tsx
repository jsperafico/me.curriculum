/// <reference types="cypress" />

import { Header } from "@/components/header"

describe('Page Header', () => {
  it('header should be at the top for desktop and mobile portrait', () => {
    cy.viewport(1024, 768)
    cy.mount(<Header />)
  })

  it('header should be at the left for mobile landscape', () => {
    // cy.mount()
  })

  it('header should contain navigation items', () => {
    // cy.mount()
  })

  it('header should not contain "projects" navigation item visible', () => {
    // cy.mount()
  })
})