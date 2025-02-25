document.addEventListener('DOMContentLoaded', load);

function load() {
  // Show/hide sidebar/mobileMenu
  const menuIcon = document.getElementById('menu-icon'),
    // sidebar = document.getElementById("sidebar"),
    mobileMenu = document.getElementById('mobile-menu');

  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Add current year text to footer
  document.getElementById('footerYear')?.innerText = new Date().getFullYear();

  // Validate form
  document.getElementById('reset')?.addEventListener('click', clearFields);

  document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    hideErrors();

    if (!formHasErrors()) {
      showModal();
    }
  });

  hideErrors();
}

function showModal() {
  const modal = document.getElementById('modal');

  const contactName = document.getElementById('name').value;
  const contactEmail = document.getElementById('email').value;
  const contactMessage = document.getElementById('message').value;

  const emailMessage = `Message from: ${contactName} - (${contactEmail}). \nMessage: ${contactMessage}`;

  document.getElementById('modal-wrapper').innerHTML =
    `<h3>Hey ${contactName} ✅,</h3> <p>Thank you for sending a message. <br> Send the email and I will respond by email shortly.</p><button class="btn--black" id="close-modal">Close</button>`;

  modal.classList.add('show');

  const closeModalBtn = document.getElementById('close-modal');
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');

    window.location.replace(
      `mailto:adelusiobafunsho@gmail.com?subject=Message%20from%20${contactName}&body=${emailMessage}`
    );
  });
}

function formHasErrors() {
  let hasErrors = false;

  // const phoneValue = document.getElementById("phone").value;
  const emailValue = document.getElementById('email').value;

  if (formInputIsEmpty()) {
    hasErrors = true;
  }

  // const phoneRegex = new RegExp(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
  // const phoneIsValid = phoneRegex.test(trim(phoneValue));

  // if (trim(phoneValue).length > 0 && !phoneIsValid) {
  //     document.getElementById(`phoneformat_error`).style.display = "block";
  //     hasErrors = true;
  //}

  const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const emailIsValid = emailRegex.test(trim(emailValue));

  if (trim(emailValue).length > 0 && !emailIsValid) {
    document.getElementById(`emailformat_error`).style.display = 'block';
    hasErrors = true;
  }

  return hasErrors;
}

function formInputIsEmpty() {
  let inputIsEmpty = false;

  const nameInput = document.getElementById('name'),
    // phoneInput = document.getElementById("phone"),
    emailInput = document.getElementById('email'),
    messageTxt = document.getElementById('message');

  const contactInputs = [messageTxt, emailInput, nameInput];

  for (const input of contactInputs) {
    if (trim(input.value).length == 0) {
      document.getElementById(`${input.id}_error`).style.display = 'block';
      inputIsEmpty = true;
      input.focus();
    }
  }

  return inputIsEmpty;
}

function clearFields() {
  const inputs = document.getElementsByTagName('input');

  for (const input of inputs) {
    input.value = '';
  }
}

function hideErrors() {
  const errors = document.getElementsByClassName('input-error');

  for (const inputError of errors) {
    inputError.style.display = 'none';
  }
}

/**
 * Removes whitespace from a string value.
 * @param str The string to trim.
 * @returns A string with leading and trailing white-space removed.
 */
function trim(str) {
  // Uses a regex to remove spaces from a string.
  return str.replace(/^\s+|\s+$/g, '');
}
