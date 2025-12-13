function initMap() {
    var mapDiv = document.getElementById('map');
    
    // 【修正点】タイルが存在する場所（大阪城付近）の座標に中心を変更
    var initialCenter = {lat: 34.6873, lng: 135.5255}; 

    var map = new google.maps.Map(mapDiv, {
      // 【修正点】カスタムタイルの最小ズームレベル（17）に設定
      zoom: 17,
      center: initialCenter,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'custom_map']
      }
    });

    var customMapType = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        // Z/X/Y 形式でローカルタイルを参照
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