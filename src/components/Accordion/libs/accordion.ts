import { Accordion } from 'flowbite'
import type {
  AccordionOptions,
  AccordionItem,
  AccordionInterface,
} from 'flowbite'

function accordionInit(accordionEl: HTMLElement) {
  // create an array of objects with the id, trigger element (eg. button), and the content element
  const accordionItems: AccordionItem[] = Array.from(
    accordionEl.querySelectorAll<HTMLElement>('[data-accordion-item]')
  ).map((item, index) => {
    return {
      id: `accordion-heading-${index}`,
      triggerEl: item.querySelector<HTMLElement>('[data-trigger]')!,
      targetEl: item.querySelector<HTMLElement>('[data-target]')!,
      iconEl: item.querySelector<HTMLElement>('[data-accordion-icon]')!,
      active: index === 0,
    }
  })

  // options with default values
  const options: AccordionOptions = {
    alwaysOpen: false,
  }
  
  /*
   * accordionEl: HTML element (required)
   * accordionItems: array of accordion item objects (required)
   * options (optional)
   * instanceOptions (optional)
   */
  const accordion: AccordionInterface = new Accordion(
    accordionEl,
    accordionItems,
    options
  )

  accordion.open('accordion-heading-0')
}

document.addEventListener('astro:page-load', () => {
  document
    .querySelectorAll<HTMLElement>('[data-accordion]')
    .forEach((accordion) => {
      accordionInit(accordion)
    })
})
