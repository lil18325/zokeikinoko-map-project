// index.ts の内容

// 地図の初期化関数
function initMap(): void {
    const mapDiv = document.getElementById("map") as HTMLElement;
    
    // QGISタイルの中心付近の緯度経度と適切なズームレベルを設定
    const initialCenter = { lat: 34.7001, lng: 135.5001 }; // 例: 大阪周辺の仮の座標
    const maxZoomLevel = 20;
  
    const map = new google.maps.Map(mapDiv, {
      center: initialCenter,
      zoom: maxZoomLevel,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: false, // UIはそのまま表示
    });
    
    // QGISで作成したカスタムタイルを定義
    const customMapType = new google.maps.ImageMapType({
      getTileUrl: function(coord: google.maps.Point, zoom: number): string | null {
        // **QGISタイルパスの重要設定**
        // QGISのタイルは、多くの場合、標準のGoogle MapsのXYZタイル座標とは異なります。
        // 特にY軸方向の反転や、座標系に合わせたオフセット処理が必要になる場合があります。
        
        // 今回は、Z=20 のフォルダ名に合わせてズームレベルを固定し、
        // フォルダ構造 (custom_tiles/20/X/Y.jpg) に合わせたパスを返します。
        
        if (zoom !== maxZoomLevel) {
            return null; // Z=20 以外はタイルを表示しない
        }
  
        // QGISタイルがGoogle Mapsと同じXYZ構造を採用していると仮定した場合のパス
        // 実際には、QGIS出力の座標系とGoogle Mapsの座標系を合わせるための変換が必要です。
        // このコードは、パスの形式を示すための「仮のコード」です。
        return `./custom_tiles/${zoom}/${coord.x}/${coord.y}.jpg`;
      },
      tileSize: new google.maps.Size(256, 256),
      maxZoom: maxZoomLevel,
      minZoom: maxZoomLevel,
      name: 'QGIS Kinoko Map',
    });
  
    // カスタムタイルを地図に重ねて表示
    map.overlayMapTypes.insertAt(0, customMapType);
  
    // マーカーの追加（例：カスタムタイルの中央付近のピン）
    new google.maps.Marker({
      position: initialCenter, 
      map: map,
      title: "キノコ造形物の中心（仮）",
    });
  }