import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">販売所の詳細</h2>
      <p>販売所ID: {id}</p>
      {/* Firestoreからデータを取得して表示する処理はあとで */}
    </div>
  );
}
