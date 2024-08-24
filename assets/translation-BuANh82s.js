const e="ベース",t="デフォルト",o="ストップ",r="ズーム",s="検査",a="開く",n="エクスポート",l="表示",i="言語",c="ヘルプ",p="コメント",u="ソース",d="タイプ",y="フィルタ",h="レイヤー",S="削除",L="複製",m="表示",f="非表示",R="レイヤー",U="畳む",O="展開",g="検索",C="デバッグ",b="設定",D="キャンセル",T="アップロード",v="名前",I="所有者",N="中央",M="方位",J="ピッチ",x="ショートカット",w="画像",E="動画",P="ソース一覧",A="GeoJSON",G="クラスタ",Z="エンコーディング",k={"Input value":"入力値","Data value":"データ値","Output value":"値",Function:"関数","Select a type of data scale (default is 'categorical').":"データスケールの種類を選択してください（デフォルトは「categorical」です）。",Base:e,"Input a data property to base styles off of.":"スタイルのベースとなるデータプロパティを入力してください。",Default:t,Stops:o,Zoom:r,"Add stop":"ストップを追加","Convert to expression":"フィルタ式に変換","Remove zoom level from stop":"ズームレベルをストップから削除","Revert from expression":"式から戻す","Delete expression":"式を削除","Convert property into a zoom function":"プロパティをズーム関数に変換する","Convert property to data function":"プロパティをデータ関数に変換する","Layer <1>{formatLayerId(layerId)}</1>: {parsed.data.message}":"レイヤ<1>{formatLayerId(layerId)}</1>: {parsed.data.message}","switch to layer":"レイヤへ切替",Map:"地図",Inspect:s,"Deuteranopia filter":"緑色盲フィルタ","Protanopia filter":"赤色盲フィルタ","Tritanopia filter":"青色盲フィルタ","Achromatopsia filter":"全色盲フィルタ","Layers list":"レイヤー一覧","Layer editor":"レイヤーエディタ","Map view":"地図画面","Maputnik on GitHub":"GitHubのMaputnik",Open:a,Export:n,"Data Sources":"データソース","Style Settings":"スタイル設定",View:l,"Color accessibility":"色のアクセシビリティ",Language:i,Help:c,"Comments for the current layer. This is non-standard and not in the spec.":"現在のレイヤーのコメント。注意：この機能は標準ではないため、他のライブラリとの互換性状況はわかりません。",Comments:p,"Comment...":"コメントを書く","Max Zoom":"最大ズーム","Min Zoom":"最小ズーム",Source:u,"Source Layer":"ソースレイヤ",Type:d,"Nested filters are not supported.":"ネストされたフィルタはサポートされていません。","Upgrade to expression":"式にアップグレード",Filter:y,"every filter matches":"全てのフィルタが一致","no filter matches":"フィルタが一致しない","any filter matches":"いずれかのフィルタが一致","Add filter":"フィルタを追加","You've entered an old style filter.":"旧型フィルタを使用しております。","Switch to filter editor.":"新型に変換","Delete filter block":"フィルタブロックを削除","Add value":"値を追加する","Remove array item":"配列の項目を削除","Press <1>ESC</1> to lose focus":"<1>ESC</1>を押すとフォーカスが外れます","Must provide protocol: <1>https://</1>":"プロトコルを指定してください: <1>https://</1>","Must provide protocol: <1>http://</1> or <3>https://</3>":"プロトコルを指定してください: <1>http://</1> または <3>https://</3>","CORS policy won't allow fetching resources served over http from https, use a <1>https://</1> domain":"CORS使用時は、http経由で提供されるリソースをhttpsから取得することはできません。<1>https://</1> ドメインを使用してください。",Layer:h,"JSON Editor":"JSONエディタ",Delete:S,Duplicate:L,Show:m,Hide:f,"Move layer up":"上に移動","Move layer down":"下に移動","Layer: {{layerId}}":"レイヤー {{layerId}}",Layers:R,Collapse:U,Expand:O,"Add Layer":"レイヤー追加","Zoom:":"ズーム:",Search:g,"Close popup":"ポップアップを閉じる","cursor:":"カーソル","center:":"中央:","rotation:":"回転角度:","Close modal":"モーダルを閉じる",Debug:C,Options:b,"<0>Open in OSM</0> &mdash; Opens the current view on openstreetmap.org":"現在のビューを <0>openstreetmap.org で開く</0>","Export Style":"スタイルをエクスポート","Download Style":"スタイルをダウンロード","Download a JSON style to your computer.":"パソコンにJSONスタイルをダウンロードします。","Download HTML":"HTMLをダウンロード",Cancel:D,"Open Style":"スタイルを開く","Upload Style":"スタイルをアップロードする","Upload a JSON style from your computer.":"JSONスタイルをパソコンからアップロードする","Style file":"スタイルファイル",Upload:T,"Load from URL":"URLから読み込む","Load from a URL. Note that the URL must have <1>CORS enabled</1>.":"URLから読み込む。注意: URLは <1>CORSを有効にする</1> 必要があります。","Style URL":"スタイルURL","Enter URL...":"URLを入力","Gallery Styles":"ギャラリースタイル","Open one of the publicly available styles to start from.":"公開スタイルを選んで開始しましょう。","Loading style":"スタイル読込中","Loading: {{requestUrl}}":"{{requestUrl}} を読み込み中",Name:v,Owner:I,"Owner ID of the style. Used by Mapbox or future style APIs.":"スタイルの所有者 ID。Mapbox または将来のスタイル API によって使用されます。","Sprite URL":"スプライトURL","Glyphs URL":"フォントグリフURL",Center:N,Bearing:M,Pitch:J,"Light anchor":"ライトアンカー","Light color":"ライトカラー","Light intensity":"ライト強度","Light position":"ライト位置","Terrain source":"地形ソース","Terrain exaggeration":"地形の誇張","Transition delay":"遷移遅延","Transition duration":"遷移期間","Open Layers (experimental)":"Open Layers (実験的)","Shortcuts menu":"ショートカットメニュー","Open modal":"モーダルを開く","Export modal":"書き出しのモーダル","Data Sources modal":"データソースのモーダル","Style Settings modal":"スタイル設定のモーダル","Toggle inspect":"検査の切り替え","Focus map":"地図にフォーカス","Debug modal":"デバッグモーダル","Increase the zoom level by 1.":"ズームレベルを1増やす","Increase the zoom level by 2.":"ズームレベルを2増やす","Decrease the zoom level by 1.":"ズームレベルを1減らす","Decrease the zoom level by 2.":"ズームレベルを2減らす","Pan up by 100 pixels.":"100ピクセル上に移動","Pan down by 100 pixels.":"100ピクセル下に移動","Pan left by 100 pixels.":"100ピクセル左に移動","Pan right by 100 pixels.":"100ピクセル右に移動","Increase the rotation by 15 degrees.":"回転角度を15度増やす","Decrease the rotation by 15 degrees.":"回転角度を15度減らす","Increase the pitch by 10 degrees.":"ピッチを10度増やす","Decrease the pitch by 10 degrees.":"ピッチを10度減らす",Shortcuts:x,"Press <1>ESC</1> to lose focus of any active elements, then press one of:":"<1>ESC</1> を押してアクティブな要素からフォーカスを外し、次に以下のいずれかを押してください:","If the Map is in focused you can use the following shortcuts":"地図がフォーカスされている場合、以下のショートカットを使用できます","Remove '{{sourceId}}' source":"'{{sourceId}}' ソースを削除","Source ID":"ソースID","Unique ID that identifies the source and is used in the layer to reference the source.":"ソースを識別するためのユニークID。レイヤーでソースを参照するために使用されます。","Source Type":"ソースタイプ","GeoJSON (JSON)":"GeoJSON (JSON)","GeoJSON (URL)":"GeoJSON (URL)","Vector (TileJSON URL)":"ベクトル (TileJSON URL)","Vector (XYZ URLs)":"ベクトル (XYZ URL)","Raster (TileJSON URL)":"ラスタ (TileJSON URL)","Raster (XYZ URL)":"ラスタ (XYZ URL)","Raster DEM (TileJSON URL)":"ラスタ DEM (TileJSON URL)","Raster DEM (XYZ URLs)":"ラスタ DEM (XYZ URL)",Image:w,Video:E,"Add Source":"ソースを追加",Sources:P,"Active Sources":"使用中ソース","Choose Public Source":"公開ソースから選択","Add one of the publicly available sources to your style.":"公開ソースをスタイルに追加しましょう","Add New Source":"新規ソースを追加","Add a new source to your style. You can only choose the source type and id at creation time!":"スタイルに新規ソースを追加します。注意: 作成時にソースタイプとIDのみを選択できます。","TileJSON URL":"TileJSON URL","Tile URL":"タイルURL","Coord top left":"左上座標","Coord top right":"右上座標","Coord bottom right":"右下座標","Coord bottom left":"左下座標","Image URL":"画像URL","Video URL":"動画URL","GeoJSON URL":"GeoJSON URL",GeoJSON:A,Cluster:G,Encoding:Z,"Error:":"エラー:","MapTiler Access Token":"MapTiler アクセストークン","Public access token for MapTiler Cloud.":"MapTiler Cloud の公開用アクセストークン","Thunderforest Access Token":"Thunderforest アクセストークン","Public access token for Thunderforest services.":"Thunderforest サービスの公開用アクセストークン","Style Renderer":"スタイルレンダラ","Choose the default Maputnik renderer for this style.":"このスタイルのデフォルトの Maputnik レンダラを選択してください","Layer options":"レイヤー設定","Paint properties":"ペイントプロパティ","Layout properties":"レイアウトプロパティ","General layout properties":"一般レイアウトプロパティ","Text layout properties":"文字レイアウトプロパティ","Icon layout properties":"アイコンレイアウトプロパティ","Text paint properties":"文字ペイントプロパティ","Icon paint properties":"アイコンペイントプロパティ"};export{e as Base,M as Bearing,D as Cancel,N as Center,G as Cluster,U as Collapse,p as Comments,C as Debug,t as Default,S as Delete,L as Duplicate,Z as Encoding,O as Expand,n as Export,y as Filter,A as GeoJSON,c as Help,f as Hide,w as Image,s as Inspect,i as Language,h as Layer,R as Layers,v as Name,a as Open,b as Options,I as Owner,J as Pitch,g as Search,x as Shortcuts,m as Show,u as Source,P as Sources,o as Stops,d as Type,T as Upload,E as Video,l as View,r as Zoom,k as default};
//# sourceMappingURL=translation-BuANh82s.js.map