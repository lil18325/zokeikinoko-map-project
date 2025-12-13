function initMap() {
    var mapDiv = document.getElementById('map');
    
    // 【必須修正】タイルが存在するエリアの中心座標を設定 (X: 930127, Y: 413135 のタイル範囲に対応する座標に再設定)
    var initialCenter = {lat: 34.6865, lng: 135.5200}; 

    var map = new google.maps.Map(mapDiv, {
      // 【必須修正】ズームレベルをタイルが存在する 20 に固定
      zoom: 20, 
      center: initialCenter,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'custom_map']
      }
    });

    var customMapType = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        // パスは Z/X/Y 形式で正しい
        return './custom_tiles/' + zoom + '/' + coord.x + '/' + coord.y + '.jpg'; 
      },
      tileSize: new google.maps.Size(256, 256),
      // 【必須修正】タイルが存在するズームレベル 20 に固定
      maxZoom: 20,
      minZoom: 20, 
      name: 'Kinoko Map'
    });

    map.mapTypes.set('custom_map', customMapType);
    map.setMapTypeId('custom_map');
}