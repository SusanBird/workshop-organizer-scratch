import { createParticipant, getWorkshops } from '../fetch-utils.js';

const form = document.querySelector('form');
const selectEl = document.querySelector('select');

form.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData(form);

    await createParticipant(data.get('name'), data.get('workshop_id'));
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