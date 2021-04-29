function init(ymaps) {

  const map = new ymaps.Map('map', {
    center: [59.938631, 30.323054],
    zoom: 16,
    controls: []
  });

  const placemark = new ymaps.Placemark(
    [59.938631, 30.323054],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-marker.svg',
      iconImageSize: [35, 35],
      iconImageOffset: [-17.5, -17.5]
    }
  );

  map.behaviors.disable('scrollZoom');
  map.geoObjects.add(placemark);
}
