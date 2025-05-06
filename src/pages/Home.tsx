import MapDisplay from "../components/MapDisplay";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">無人販売所を地図で探す</h1>
      <MapDisplay />
    </div>
  );
}
