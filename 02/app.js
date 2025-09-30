const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const labels = form.querySelectorAll('label');
    labels.forEach(label => label.style.color = '');


    const login = form.elements.login.value.trim();
    const pass1 = form.elements.pass1.value;
    const pass2 = form.elements.pass2.value;
    const accept = form.elements.accept.checked;

    const errors = [];


    if (!/^[^@]+@[^@]+\.[^@]+$/.test(login)) {
      errors.push('#formLogin');
    }

    if (pass1.length <= 6 || pass1 !== pass2) {
        errors.push('#formPass1');
        errors.push('#formPass2');
    }

    if (!accept) {
        errors.push('#formAccept');
    }

    if (errors.length === 0) {
        console.log('done');
    }else {
        errors.forEach(selector => {
            const input = document.querySelector(selector);
            const label = form.querySelector(`label[for="${input.id}"]`);

            if(label) {
                label.style.color = 'red';
            }
        })
    }

    console.log(errors)
})
