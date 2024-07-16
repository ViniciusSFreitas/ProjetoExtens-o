document.getElementById('eventForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var eventName = document.getElementById('eventName').value;
    var eventDate = document.getElementById('eventDate').value;
    var eventLocation = document.getElementById('eventLocation').value;

    var newEvent = document.createElement('div');
    newEvent.classList.add('event');
    newEvent.innerHTML = `
        <h2>${eventName}</h2>
        <p>Data: ${eventDate}</p>
        <p>Local: ${eventLocation}</p>
    `;

    document.querySelector('.event-list').appendChild(newEvent);

    document.getElementById('eventForm').reset();
});