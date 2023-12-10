const toggleButton = document.getElementsByClassName('header__toggle-button')[0]
const navbarLinks = document.getElementsByClassName('header__nav-list')[0]
const body = document.querySelector('body')
const HeaderBtnOpen = document.getElementById('header-icon_open')
const HeaderBtnClose = document.getElementById('header-icon_close')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  body.classList.toggle('overflow-hidden')

  HeaderBtnOpen.classList.toggle('display-none')
  HeaderBtnClose.classList.toggle('display-none')
})