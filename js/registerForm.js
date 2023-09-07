document.getElementById('registration-form').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const phoneNumberField = document.getElementById('phone');
  const phoneNumber = phoneNumberField.value.trim();

  if (!phoneNumber.match(/^\d{10,15}$/)) {
    phoneNumberField.classList.add('error');
    return;
  } else {
    phoneNumberField.classList.remove('error');
  }

  document.getElementById('inner-modal').style.display = 'block';

  const formData = new FormData(this);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formspree.io/f/mdoropav', true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
    }
  };
  xhr.send(formData);
});

document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('inner-modal').style.display = 'none';
});

document.getElementById('inner-modal').addEventListener('click', function (event) {
  if (event.target === this) {
    document.getElementById('inner-modal').style.display = 'none';
  }
});