import { checkAuth, logout, getWorkshops, editParticipant } from '../fetch-utils.js';

checkAuth();

const form = document.querySelector('form');
const logoutButton = document.getElementById('logout');
const selectEl = document.querySelector('select');

logoutButton.addEventListener('click', () => {
    logout();
});


window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const workshops = await getWorkshops(params.get('id'));

    for (let workshop of workshops) {
        const optionEl = document.createElement('option');

        optionEl.textContent = workshop.topic;
        optionEl.value = workshop.id;

        selectEl.append(optionEl);
    }
});

form.addEventListener('submit', async e => {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const data = new FormData(form);

    await editParticipant(params.get('id'), data.get('name'), data.get('workshop_id'));

    location.replace('../workshops-list');
});


