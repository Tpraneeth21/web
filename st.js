const menuItems = document.querySelectorAll('.portfolio nav ul li a');


menuItems.forEach(menuItem => {
  
  const tooltip = document.createElement('span');
  tooltip.classList.add('tooltip');
  

  tooltip.textContent = menuItem.textContent;
  
  
  menuItem.appendChild(tooltip);
  

  menuItem.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
  });
  
  menuItem.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
  });
});


const contactForm = document.getElementById('contact-form');


contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();

  
  if (name === '') {
    showError(nameInput, 'Name is required');
  } else {
    showSuccess(nameInput);
  }

  
  if (email === '') {
    showError(emailInput, 'Email is required');
  } else if (!isValidEmail(email)) {
    showError(emailInput, 'Please enter a valid email address');
  } else {
    showSuccess(emailInput);
  }

 
  if (phone === '') {
    showError(phoneInput, 'Phone number is required');
  } else if (!isValidPhone(phone)) {
    showError(phoneInput, 'Please enter a valid phone number');
  } else {
    showSuccess(phoneInput);
  }


  if (message === '') {
    showError(messageInput, 'Message is required');
  } else {
    showSuccess(messageInput);
  }

 
  if (isFormValid()) {
    contactForm.submit();
  }
});


function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  const errorMessage = formControl.querySelector('.error-message');
  errorMessage.textContent = message;
}


function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
  const errorMessage = formControl.querySelector('.error-message');
  errorMessage.textContent = '';
}


function isValidEmail(email) {
  // Use a regular expression to validate email format
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  
  const phoneRegex = /^\d{10}$/; 
  return phoneRegex.test(phone);
}


function isFormValid() {
  const errorFields = contactForm.querySelectorAll('.error');
  return errorFields.length === 0;
}


const navLinks = document.querySelectorAll('nav ul li a');


navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default link behavior

    const target = document.querySelector(event.target.getAttribute('href')); // Get target section

    // Scroll to the target section smoothly
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Select the social icons container
const socialIcons = document.querySelector('.social');

// Create tooltips for each social icon
const icons = socialIcons.querySelectorAll('i');
icons.forEach(icon => {
  const tooltip = document.createElement('span');
  tooltip.classList.add('tooltip');
  tooltip.textContent = icon.getAttribute('class').split(' ')[0]; // Use the icon class as the tooltip text
  socialIcons.appendChild(tooltip);

  // Add event listeners for tooltip visibility
  icon.addEventListener('mouseover', () => {
    tooltip.style.visibility = 'visible';
  });

  icon.addEventListener('mouseout', () => {
    tooltip.style.visibility = 'hidden';
  });
});

var button = document.getElementById('toggle-button');
  var info = document.getElementById('additional-info');

  button.addEventListener('click', function() {
    if (info.style.display === 'none') {
      info.style.display = 'block';
    } else {
      info.style.display = 'none';
    }
  });

  const sections = document.querySelectorAll('.fade-in-section');
const items = document.querySelectorAll('.fade-in-item');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    } else {
      entry.target.classList.remove('fade-in');
    }
  });
});

sections.forEach(section => {
  sectionObserver.observe(section);
});

const itemObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    } else {
      entry.target.classList.remove('fade-in');
    }
  });
});

items.forEach(item => {
  itemObserver.observe(item);
});











