function initMap() {
    var mapDiv = document.getElementById('map');
    
    // 東京駅を初期の中心に設定
    var initialCenter = {lat: 35.6812, lng: 139.7671};
    
    var map = new google.maps.Map(mapDiv, {
      zoom: 17,
      center: initialCenter,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'custom_map']
      }
    });

    // カスタムタイルレイヤーの定義
    var customMapType = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        return './custom_tiles/' + zoom + '/' + coord.x + '/' + coord.y + '.jpg'; 
      },
      tileSize: new google.maps.Size(256, 256),
      maxZoom: 20,
      minZoom: 17,
      name: 'Kinoko Map'
    });
  
    map.mapTypes.set('custom_map', customMapType);
    map.setMapTypeId('custom_map');
}