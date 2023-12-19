const form = document.querySelector('.login-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // відміна перезавантаження сторінки

    let email = form.elements.email.value.trim();
    let password = form.elements.password.value.trim();

    if (email === '' || password === '') {
      alert('All form fields must be filled in');
    } else {
      let formData = {
        email: email,
        password: password
      };

      console.log(formData);

      form.reset(); // очищення значень полів форми
    }
  });
