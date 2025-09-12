// components/Result.tsx
"use client";

import { useMemo } from "react";

interface ResultProps {
  score: number;
}

export default function Result({ score }: ResultProps) {
  const category = useMemo(() => {
    if (score <= 6) return "Ringan";
    if (score <= 12) return "Sedang";
    return "Berat";
  }, [score]);

  const advice = useMemo(() => {
    if (category === "Ringan") return "Kamu mungkin hanya merasa lelah biasa. Cobalah istirahat lebih dan lakukan hal yang menyenangkan.";
    if (category === "Sedang") return "Sepertinya kamu sedang mengalami stres yang cukup terasa. Cobalah berbagi cerita dengan teman dekat.";
    return "Bebanmu terlihat cukup berat. Jangan ragu untuk mencari bantuan profesional agar lebih terbantu.";
  }, [category]);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md text-center space-y-4">
      <h2 className="text-xl font-semibold">Hasil Kuesioner</h2>
      <p className="text-gray-600">Skor kamu: <strong>{score}</strong></p>
      <p className="text-lg font-bold">Kategori: {category}</p>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${(score / 21) * 100}%` }} // 7 pertanyaan x max skor 3 = 21
        />
      </div>
      <p className="text-gray-700">{advice}</p>
      <div className="flex justify-center gap-4">
        <a href="/curhat" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Mulai Curhat
        </a>
        <a href="/bantuan" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Bantuan Profesional
        </a>
      </div>
    </div>
  );
}
