const element = document.getElementById('selector');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(
    document.getElementById('phone-mask'),
    {
      mask: '+{7}(000)000-00-00'
    }
);

const contactform = IMask(
    document.getElementById('phone-mask-contactform'),
    {
      mask: '+{7}(000)000-00-00'
    }
);

