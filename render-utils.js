export function renderWorkshop(workshop){
    const workshopEl = document.createElement('div');
    const topicEl = document.createElement('h3');

    workshopEl.classList.add('workshop');
    topicEl.textContent = workshop.topic;
    
    workshopEl.append(topicEl);

    for (let participant of workshop.participants) {
        const participantLink = document.createElement('a');

        participantLink.textContent = participant.name;

        participantLink.href = `../edit-participant/?id=${participant.id}`;

        workshopEl.append(participantLink);
    }

    return workshopEl;
}