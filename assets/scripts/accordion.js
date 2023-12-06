const faqs = document.querySelectorAll (".qa-block__faq");

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  })
})