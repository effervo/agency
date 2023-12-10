const toggleButton = document.getElementsByClassName('header__toggle-button')[0]
const navbarLinks = document.getElementsByClassName('header__nav-list')[0]
const body = document.querySelector('body')
const menuBtn = document.getElementById('toggle-button__js')
const menuIcon = document.getElementById('toggle__js_icon')

// const iconImg = menuIcon.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
// var iconImg2 = iconImg.getAttribute('xlink:href');   // Please pay attention I do not use getAttributeNS(), just usual getAttribute()


// console.log (iconImg2);

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  body.classList.toggle('overflow-hidden')

})



// function toggleIcon() {
//   var m = document.getElementById(`toggle-button__js`);
//   if (m.innerHTML === `<use xlink:href="#burger-open"></use>`) {
//     m.innerHTML = `<use xlink:href="#burger-close"></use>`;
//   } else {
//     m.innerHTML = `<use xlink:href="#burger-open"></use>`;
//   }
// }

// function toggleIcon() {
//   if(body.classList.contains("overflow-hidden")){
//     menuBtn.innerHTML.replace(`<use xlink:href="#burger-open"></use>`, `<use xlink:href="#burger-close"></use>`);
//   }
//   else{
//       icon.classList.replace(`<use xlink:href="#burger-close"></use>`, `<use xlink:href="#burger-open"></use>`);
//   }
// }

