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
      it(`"${data.label}" skill should be listed and have "${data.experience}/5" experience grade aside`, () => {
        cy.get(`.list-none > :nth-child(${data.index})`).should('contain.text', data.label).should('have.class', `after:skill-${data.experience}`)

        cy.get(`.list-none > :nth-child(${data.index})`).then(($li) => {
          const rectLi = $li[0].getBoundingClientRect();

          cy.get(`.list-none > :nth-child(${data.index}) > span`).then(($span) => {
            const rectSpan = $span[0].getBoundingClientRect();

            expect(rectLi.height).to.be.lessThan(rectSpan.height * 2);
            expect(rectLi.right - rectSpan.right).to.be.lessThan(THRESHOLD);
          })
        })
      })
    })

    it('Skills should be properly separated', () => {
      SkillsData.spacers.forEach((data) => {
        cy.get(`.list-none > :nth-child(${data.index})`).should('have.attr', 'data-orientation', 'horizontal')
      })
    })
  })

  context('Responsive design', () => {
    beforeEach(() => {
      cy.mount(<Skills />)
    })

    context('Desktop', () => {
      SkillsData.skills.forEach((data) => {
        it(`"${data.label}" should be visible in "desktop"`, () => {
          cy.viewport("macbook-13")

          cy.get(`.list-none > :nth-child(${data.index})`).should('contain.text', data.label).should('have.class', `after:skill-${data.experience}`)

          cy.get(`.list-none > :nth-child(${data.index})`).should('be.visible')
        })
      })
    })

    context('Mobile Portrait', () => {
      SkillsData.skills.forEach((data) => {
        let visible = data.responsive.portrait == undefined ? data.responsive.all : data.responsive.portrait

        it(`"${data.label}" should be "${visible}" in "portrait"`, () => {
          cy.viewport("iphone-6", "portrait")

          cy.get(`.list-none > :nth-child(${data.index})`).should('contain.text', data.label).should('have.class', `after:skill-${data.experience}`)

          if (visible == "visible") {
            cy.get(`.list-none > :nth-child(${data.index})`).should('be.visible')
          } else {
            cy.get(`.list-none > :nth-child(${data.index})`).should('not.be.visible')
          }
        })
      })
    })

    context('Mobile Landscape', () => {
      SkillsData.skills.forEach((data) => {
        let visible = data.responsive.landscape == undefined ? data.responsive.all : data.responsive.landscape

        it(`"${data.label}" should be "${visible}" in "landscape"`, () => {
          cy.viewport("iphone-6", "landscape")

          cy.get(`.list-none > :nth-child(${data.index})`).should('contain.text', data.label).should('have.class', `after:skill-${data.experience}`)

          if (visible == "visible") {
            cy.get(`.list-none > :nth-child(${data.index})`).should('be.visible')
          } else {
            cy.get(`.list-none > :nth-child(${data.index})`).should('not.be.visible')
          }
        })
      })
    })

    SkillsData.skills.forEach((data) => {
      if (data.responsive.portrait == 'hidden') {
        return
      }
      it(`"${data.experience}/5" experience should be aside of "${data.label}"`, () => {
        cy.get(`.list-none > :nth-child(${data.index})`).should('contain.text', data.label).should('have.class', `after:skill-${data.experience}`)

        cy.get(`.list-none > :nth-child(${data.index})`).then(($li) => {
          const rectLi = $li[0].getBoundingClientRect();

          cy.get(`.list-none > :nth-child(${data.index}) > span`).then(($span) => {
            const rectSpan = $span[0].getBoundingClientRect();

            expect(rectLi.height).to.be.equal(rectSpan.height);
            expect(rectLi.right - rectSpan.right).to.be.lessThan(THRESHOLD);
          })
        })
      })
    })
  })
})