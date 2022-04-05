import { checkAuth, logout, getWorkshops, editParticipant, deleteParticipant } from '../fetch-utils.js';

checkAuth();

const editFormEl = document.querySelector('editForm');
const deleteFormEl = document.querySelector('deleteForm');
const logoutButton = document.getElementById('logout');
const selectEl = document.querySelector('select');
// const deleteButton = document.getElementById('delete');

logoutButton.addEventListener('click', () => {
    logout();
});

// deleteButton.addEventListener('click', async () => {
//     deleteParticipant();
// });

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

editFormEl.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData(editFormEl);

    await editParticipant(data.get('id'), data.get('name'), data.get('workshop_id'));

    location.replace('../workshops-list');
});

deleteFormEl.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData(deleteFormEl);
    const idEl = data.id;

    await deleteParticipant(idEl);

    location.replace('../workshops-list');
});

// .addEventListener('click', async e=> {
//     e.preventDefault();

//     const data = new FormData(____);

//     await deleteParticipant()
// })