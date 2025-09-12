"use client";

import Result from "@/components/Result";
import { useState } from "react";


export default function KuesionerPage() {
  const pertanyaan = [
    "Seberapa sering kamu merasa lelah dalam seminggu terakhir?",
    "Apakah kamu mengalami kesulitan tidur atau tidur tidak nyenyak?",
    "Seberapa sering kamu merasa cemas tanpa alasan yang jelas?",
    "Apakah kamu merasa sulit berkonsentrasi pada tugas sehari-hari?",
    "Seberapa sering kamu kehilangan minat pada hal-hal yang biasanya kamu nikmati?",
    "Seberapa sering kamu merasa mudah tersinggung atau gelisah?",
    "Apakah kamu merasa beban pikiranmu terlalu berat akhir-akhir ini?"
  ];

  const opsi = ["Tidak Pernah", "Kadang-kadang", "Sering", "Selalu"];

  // untuk menyimpan jawaban & state submit
  const [answers, setAnswers] = useState<number[]>(Array(pertanyaan.length).fill(0));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (qIndex: number, value: number) => {
    const newAnswer = [...answers];
    newAnswer[qIndex] = value;
    setAnswers(newAnswer);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);

  // Nampilkan hasil setelah submit
  if (submitted) {
    return (
      <div className="container-max py-8 md:py-12">
        <div className="max-w-3xl mx-auto card p-6 md:p-8">
          <Result score={totalScore} />
        </div>
      </div>
    )
  }

  return (
    <div className="container-max py-8 md:py-12">
      <div className="max-w-3xl mx-auto card p-6 md:p-8">
        <h1 className="text-2xl font-semibold">Bagaimana perasaanmu saat ini?</h1>
        <p className="mt-2 small-muted">
          <strong>Disclaimer:</strong> Kuesioner ini bukan alat diagnosis. Ini hanyalah gambaran untuk membantumu lebih memahami perasaanmu.
        </p>

        <form className="mt-6 space-y-6">
          {pertanyaan.map((q, idx) => (
            <div key={idx}>
              <label className="label">{idx + 1}. {q}</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {opsi.map((o, oIndex) => (
                  <label key={o} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name={`q-${idx}`}
                      className="accent-primary"
                      onChange={() => handleChange(idx, oIndex)} // simpan nilai
                    />
                    <span>{o}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button 
          type="button" 
          className="btn btn-secondary"
          onClick={handleSubmit}>
            Lihat Hasil
          </button>
        </form>
      </div>
    </div>
  );
}
