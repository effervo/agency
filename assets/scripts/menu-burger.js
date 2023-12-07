const toggleButton = document.getElementsByClassName('header__toggle-button')[0]
const navbarLinks = document.getElementsByClassName('header__nav-list')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})