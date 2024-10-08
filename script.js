const hamburgerIcon = document.querySelector('.hamburger-icon')
const mobileNavbar = document.querySelector('.mobile-navbar')

hamburgerIcon.addEventListener('click', () => {
  mobileNavbar.style.display = 'block'
})

const closeIcon = document.querySelector('.close-icon')

closeIcon.addEventListener('click', () => {
  mobileNavbar.style.display = 'none'
})
