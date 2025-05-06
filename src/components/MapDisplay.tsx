import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "800px",
};

const center = {
  lat: 35.681236, // 東京駅の緯度経度（仮）
  lng: 139.767125,
};

export default function MapDisplay() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <p>地図を読み込み中...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
      {/* マーカーなどはここに追加していく */}
    </GoogleMap>
  );
}
