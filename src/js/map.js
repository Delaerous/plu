ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [59.944074, 30.306341],
            zoom: 13,
            controls: ["zoomControl"]
            
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [59.937588, 30.306098]
            },
            // Свойства.
            properties: {
                // Контент метки.
                hintContent: 'us'
            }
        }, );
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects
            .add(myGeoObject);
}
