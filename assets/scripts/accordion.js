const faqs = document.querySelectorAll (".qa-block__accordion-container");

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  })
})