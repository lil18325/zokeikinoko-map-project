function initMap() {
    var mapDiv = document.getElementById('map');
    
    // 【修正】タイルがあるエリアの中心座標 (例: 大阪付近をさらに細かく調整)
    var initialCenter = {lat: 34.6865, lng: 135.5200}; // より正確なカスタムタイルエリアの中心を仮定

    var map = new google.maps.Map(mapDiv, {
      // 【修正】ズームをタイルが存在する最大レベル 20 に固定
      zoom: 20, 
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
      // 【修正】minZoom も 20 に固定
      maxZoom: 20,
      minZoom: 20, 
      name: 'Kinoko Map'
    });

    map.mapTypes.set('custom_map', customMapType);
    map.setMapTypeId('custom_map');
}