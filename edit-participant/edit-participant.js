import { checkAuth, logout, getWorkshops } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const selectEl = document.querySelector('select');

logoutButton.addEventListener('click', () => {
    logout();
});


window.addEventListener('load', async () => {
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const optionEl = document.createElement('option');

        optionEl.textContent = workshop.topic;
        optionEl.value = workshop.id;

        selectEl.append(optionEl);
    }
});