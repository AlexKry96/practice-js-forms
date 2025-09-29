

const form = document.querySelector('form');
const usersList = document.querySelector('.users-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = form.elements.firstName.value.trim();
    const lastName = form.elements.lastName.value.trim();

    if (firstName && lastName) {
        const li = document.createElement('li');
        li.classList.add('users-list__person');
        li.textContent = `${firstName} ${lastName}`;

        usersList.appendChild(li);
    }
})