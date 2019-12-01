/*
    Top Button section
    Function display top button when view gets scroll by about X pxs.
*/
window.onscroll = function() { scrollToTop() };
function scrollToTop() {
  if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById('btn').style.display = 'block';
  } else {
    document.getElementById('btn').style.display = 'none';
  }
}
// Function returns the top position the view
function topBtn() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// =============== Burger nav bar animation block =============
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle nav bar
    nav.classList.toggle('nav-active');

    // Aniamate nav bar
    navLinks.forEach((link,index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    // buger animation
    burger.classList.toggle('toggle');
  });  
}

navSlide();