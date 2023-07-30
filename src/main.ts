import './styles/common.css'
const header = document.querySelector<HTMLElement>('.js-header')!
const headerHeight = header.clientHeight
export const breakpoint = 768

window.addEventListener('scroll', () => {
  try {
    const scrollPosition = window.scrollY
    if (scrollPosition > headerHeight) {
      header.dataset.isFixed = 'true'
    } else {
      header.removeAttribute('data-is-fixed')
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message)
    }
  }
})

const navOpenHandler = () => {
  try {
    const windowWidth = window.innerWidth
    if (windowWidth < breakpoint) {
      const navButton = document.querySelector<HTMLButtonElement>('.js-nav-button')!
      if (navButton.hasAttribute('data-is-visible')) return false
      navButton.dataset.isVisible = 'true'
      if (navButton)
        navButton.addEventListener('click', () => {
          if (header.hasAttribute('data-is-open')) {
            header.removeAttribute('data-is-open')
          } else {
            header.dataset.isOpen = 'true'
          }
        })
    } else {
      const navButton = document.querySelector<HTMLButtonElement>('.js-nav-button')!
      navButton.removeEventListener('click', navOpenHandler)
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message)
    }
  }
}

document.addEventListener('DOMContentLoaded', navOpenHandler)
window.addEventListener('resize', () => {
  navOpenHandler()
  try {
    const windowWidth = window.innerWidth
    if (header.hasAttribute('data-is-open') && windowWidth > breakpoint) {
      header.removeAttribute('data-is-open')
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message)
    }
  }
})

const scrollButton = document.querySelector<HTMLButtonElement>('.js-scroll-button')!
scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

const linkButton = document.querySelectorAll('.js-link-button')!
linkButton.forEach((el) => {
  el.addEventListener('click', () => {
    const link = el.querySelector('a')!
    link.click()
  })
})
