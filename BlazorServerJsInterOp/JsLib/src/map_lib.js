import L from 'leaflet';

export function initializeMap(options) {
    const map = L.map('map').setView([49.1830, 20.0851], 20);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}