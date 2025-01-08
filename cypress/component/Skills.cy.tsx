/// <reference types="cypress" />

import { Skills } from "@/components/skills"

import SkillsData from "../fixtures/skills.json"

const THRESHOLD: number = 100;

describe('Skills', () => {
  context('General behavior', () => {
    beforeEach(() => {
      cy.viewport('macbook-13')
      cy.mount(<Skills />)
    })

    SkillsData.skills.forEach((data) => {
      it(`"${data.label}" skill is listed and have "${data.experience}/5" experience grade aside`, () => {
        cy.get(`.list-none > :nth-child(${data.index})`).should('contain.text', data.label).should('have.class', `after:skill-${data.experience}`)

        cy.get(`.list-none > :nth-child(${data.index})`).then(($li) => {
          const rectLi = $li[0].getBoundingClientRect();

          cy.get(`.list-none > :nth-child(${data.index}) > span`).then(($span) => {
            const rectSpan = $span[0].getBoundingClientRect();

            expect(rectLi.height).to.be.lessThan(rectSpan.height * 2);
            expect(rectLi.right - rectSpan.right).to.be.lessThan(THRESHOLD);
            expect(rectSpan.left - rectLi.left).to.be.greaterThan(THRESHOLD);
          })
        })
      })
    })

    it('Skills are properly separated', () => {
      SkillsData.spacers.forEach((data) => {
        cy.get(`.list-none > :nth-child(${data.index})`).should('have.attr', 'data-orientation', 'horizontal')
      })
    })
  })

  context('Responsive design', () => {
    beforeEach(() => {
      cy.viewport("iphone-6")
      cy.mount(<Skills />)
    })

    SkillsData.skills.forEach((data) => {
      it(`"${data.experience}/5" experience should be bellow of "${data.label}"`, () => {
        cy.get(`.list-none > :nth-child(${data.index})`).should('contain.text', data.label).should('have.class', `after:skill-${data.experience}`)

        cy.get(`.list-none > :nth-child(${data.index})`).then(($li) => {
          const rectLi = $li[0].getBoundingClientRect();

          cy.get(`.list-none > :nth-child(${data.index}) > span`).then(($span) => {
            const rectSpan = $span[0].getBoundingClientRect();

            expect(rectLi.height).to.be.equal(rectSpan.height * 2);
            expect(rectLi.right - rectSpan.right).to.be.lessThan(THRESHOLD);
            expect(rectSpan.left - rectLi.left).to.be.lessThan(THRESHOLD);
          })
        })
      })
    })
  })
})