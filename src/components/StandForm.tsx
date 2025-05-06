import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function StandForm() {
  const [user] = useAuthState(auth);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return alert("ログインが必要です");

    try {
      await addDoc(collection(db, "unmanned_stands"), {
        name,
        description,
        location: {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        },
        business_hours: "9:00〜17:00",
        imageUrls: [], // 画像アップロード処理は別途
        last_updated: serverTimestamp(),
        rating: {
          count: 0,
          average: 0.0,
        },
        created_by: user.uid,
        tags: ["野菜"],
      });
      alert("登録しました！");
      setName("");
      setDescription("");
      setLatitude("");
      setLongitude("");
    } catch (err) {
      console.error(err);
      alert("登録に失敗しました");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4">
      <input
        type="text"
        placeholder="販売所の名前"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full"
      />
      <textarea
        placeholder="説明"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="緯度 (例: 35.123)"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="経度 (例: 139.456)"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        登録
      </button>
    </form>
  );
}
