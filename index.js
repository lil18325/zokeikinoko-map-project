function initMap() {
    // 緯度・経度を18のタイルに合わせて修正
    var initialCenter = new google.maps.LatLng(34.6853, 139.3136); 
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18, // 修正: 初期ズーム
        center: initialCenter,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'custom_map']
        }
    });

    var customMapType = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
            return './custom_tiles/' + zoom + '/' + coord.x + '/' + coord.y + '.jpg';
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 18, // 修正: 最大ズーム
        minZoom: 18, // 修正: 最小ズーム
        name: 'Kinoko Map'
    });

    map.mapTypes.set('custom_map', customMapType);
    map.setMapTypeId('custom_map');
}