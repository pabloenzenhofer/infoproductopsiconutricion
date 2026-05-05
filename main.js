document.addEventListener('DOMContentLoaded', () => {
  
  // --- Sticky Header ---
  const header = document.getElementById('main-header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Trigger once on load in case of refresh midway down the page
  handleScroll();


  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (mainNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      });
    });
  }


  // --- Accordion Logic (Módulos & FAQ) ---
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const btn = item.querySelector('.accordion-btn');
    const content = item.querySelector('.accordion-content');

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other accordions (Optional: remove if you want multiple open at once)
      accordionItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      // Toggle current accordion
      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

});
