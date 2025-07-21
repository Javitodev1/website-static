import { Dropdown } from 'flowbite'
import type { DropdownOptions, DropdownInterface } from 'flowbite'

function dropdownInit(container: Element) {
  // set the dropdown menu element
  const $targetEl: HTMLElement = container.querySelector(
    '[data-dropdown-menu]'
  )!

  // set the element that trigger the dropdown menu on click
  const $triggerEl: HTMLElement = container.querySelector(
    '[data-dropdown-trigger]'
  )!

  const $iconArrow: SVGSVGElement = $triggerEl.querySelector(
    '[data-dropdown-icon]'
  )!

  // options with default values
  const options: DropdownOptions = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    onShow: () => {
      $iconArrow.classList.add('rotate-180')
    },
    onHide: () => {
      $iconArrow.classList.remove('rotate-180')
    },
  }

  /*
   * targetEl: required
   * triggerEl: required
   * options: optional
   * instanceOptions: optional
   */
  const dropdown: DropdownInterface = new Dropdown(
    $targetEl,
    $triggerEl,
    options
  )

  dropdown.hide()
}

document.addEventListener('astro:page-load', () => {
  document
    .querySelectorAll('[data-dropdown]')
    .forEach((container) => dropdownInit(container))
})
