function initMap() {
    var mapDiv = document.getElementById('map');
    
    // 【修正箇所】タイルが存在するエリアの中心座標に設定
    // 座標 (X: 930128.5, Y: 413136.5) が示す場所（大阪城付近）
    var initialCenter = {lat: 34.68748, lng: 135.52554}; 

    var map = new google.maps.Map(mapDiv, {
      // ズームレベルをタイルが存在する 20 に固定
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
      // ズーム範囲を 20 に固定
      maxZoom: 20,
      minZoom: 20, 
      name: 'Kinoko Map'
    });

    map.mapTypes.set('custom_map', customMapType);
    map.setMapTypeId('custom_map');
}