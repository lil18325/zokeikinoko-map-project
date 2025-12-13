// index.js

function initMap() {
    // 修正: ブラウザが要求しているタイル座標の中心（X=232516.5, Y=104113.5 at Z=18）に合わせる
    var initialCenter = new google.maps.LatLng(35.9189, 139.7828); // 浦和付近の座標

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18, 
        center: initialCenter,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'custom_map']
        }
    });

    // ... (maxZoom/minZoom: 18 は前回のまま)
    var customMapType = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
            return './custom_tiles/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 18, 
        minZoom: 18, 
        name: 'Kinoko Map'
    });

    map.mapTypes.set('custom_map', customMapType);
    map.setMapTypeId('custom_map');
}