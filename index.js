function initMap() {
    var mapDiv = document.getElementById('map');
    
    // タイルが存在する大阪城付近の中心座標に設定
    // 緯度: 34.68748, 経度: 135.52554 (Zoom 20 のタイル範囲の中心付近)
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
        // カスタムタイルのパス: ./custom_tiles/Zoom/X/Y.jpg
        return './custom_tiles/' + zoom + '/' + coord.x + '/' + coord.y + '.jpg'; 
      },
      tileSize: new google.maps.Size(256, 256),
      // 最大・最小ズームレベルを 20 に固定することで、カスタムタイルエリアにロックする
      maxZoom: 20,
      minZoom: 20, 
      name: 'Kinoko Map'
    });

    map.mapTypes.set('custom_map', customMapType);
    map.setMapTypeId('custom_map');
}