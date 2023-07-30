import '../styles/object/project/contact.css'
const submitButton = document.querySelector<HTMLButtonElement>('.js-submit-button')!
submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'auto',
  })
})
