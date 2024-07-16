document.addEventListener('DOMContentLoaded', function () {
    var mymap = L.map('mapa').setView([-23.3045, -51.1696], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mymap);

    var intervalKilometers = 2;
    var intervalDegrees = kilometersToDegrees(intervalKilometers);
    for (var lat = -23.65; lat < -23.05; lat += intervalDegrees) {
        for (var lng = -51.35; lng < -50.85; lng += intervalDegrees) {
            var randomLat = lat + (Math.random() - 0.5) * intervalDegrees * 0.5;
            var randomLng = lng + (Math.random() - 0.5) * intervalDegrees * 0.5;
            var marker = L.marker([randomLat, randomLng], {
                icon: L.icon({
                    iconUrl: 'arvore (1).png',
                    iconSize: [50, 50],
                    iconAnchor: [20, 40],
                    popupAnchor: [0, -40]
                })
            }).addTo(mymap);
            marker.bindPopup("Horta comunitária!");
        }
    }

    document.getElementById('go-button').addEventListener('click', function () {
        var addressInput = document.getElementById('address-input').value;
        fetch('https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURI(addressInput))
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    var firstResult = data[0];
                    mymap.setView([firstResult.lat, firstResult.lon], 14);
                    L.marker([firstResult.lat, firstResult.lon]).addTo(mymap)
                        .bindPopup("Endereço encontrado: " + firstResult.display_name)
                        .openPopup();
                } else {
                    alert('Endereço não encontrado.');
                }
            })
            .catch(err => {
                console.error('Erro ao acessar a API do Nominatim:', err);
                alert('Erro ao buscar o endereço. Por favor, tente novamente.');
            });
    });

    function kilometersToDegrees(kilometers) {
        return kilometers / 111.3;
    }
});