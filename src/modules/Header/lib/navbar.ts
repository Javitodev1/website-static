function navbarOnload() {
  console.log('page loaded, navbar')

  const hamburger = document.querySelector('#hamburger')
  const navbar = document.querySelector('#navbar')

  if (!hamburger) {
    return console.log('Not Hamburger button found.')
  }

  if (!navbar) {
    return console.log('Not Navbar found.')
  }

  const expandedAttr = 'aria-expanded'

  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute(expandedAttr) === 'true'

    navbar.classList.toggle('hidden')
    navbar.classList.toggle('flex')

    hamburger.setAttribute(expandedAttr, String(!isExpanded))
  })

  navbar.classList.remove('flex')
  navbar.classList.add('hidden')
  hamburger.setAttribute(expandedAttr, 'false')
}

document.addEventListener('astro:page-load', () => {
  navbarOnload()
})
