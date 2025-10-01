const form = document.querySelector('form');
const messages = document.querySelector('.messages');

form.setAttribute('novalidate', true);

form.addEventListener('submit', e => {
    e.preventDefault();
    messages.innerHTML = '';

    const errors = [];
    const data = Object.fromEntries(new FormData(form));

    if(!data.firstName.trim() || !/^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż]+$/.test(data.firstName)) {
        errors.push('Imię jest wymagane i może zawierać tylko litery.');
    }
    if (!data.lastName.trim() || !/^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż]+$/.test(data.lastName)) {
        errors.push('Nazwisko jest wymagane i może zawierać tylko litery.');
    }

    if (!data.street.trim()) {
        errors.push('Należy podać nazwę ulicy.');
    }

    if (!data.houseNumber || Number(data.houseNumber) <= 0) {
        errors.push('Numer budynku musi być dodatnią liczbą.');
    }

    if (data.flatNumber && Number(data.flatNumber) <= 0) {
        errors.push('Numer mieszkania musi być dodatnią liczbą (jeśli podano).');
    }

    if (!/^[0-9]{2}-[0-9]{3}$/.test(data.zip)) {
        errors.push('Kod pocztowy musi być w formacie 00-000.');
    }

    if (!data.city.trim()) {
        errors.push('Należy podać miejscowość.');
    }

    if (!data.voivodeship) {
        errors.push('Województwo jest wymagane.');
    }

    if (errors.length > 0) {
        errors.forEach(err => {
            const li = document.createElement('li');
            li.textContent = err;
            messages.appendChild(li);
        });
        } else {
            const li = document.createElement('li');
            li.textContent = 'Dane zostały wysłane prawidłowo.';
            li.style.color = 'green';
            messages.appendChild(li);
            form.reset();
        }
})