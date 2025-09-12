"use client";

import { useState } from "react";

export default function CurhatPage() {
  const [messages] = useState([
    { id: 1, from: "system", text: "Halo, aku di sini untuk mendengarkan ceritamu..." }
  ]);

  return (
    <div className="container-max py-8 md:py-12">
      <div className="card p-0 overflow-hidden">
        <div className="px-6 py-4 border-b border-black/5 bg-white/60">
          <h1 className="text-lg font-semibold">Ruang Curhat</h1>
          <p className="small-muted mt-1">
            Ini hanya tampilan UI. Pesanmu tidak disimpan atau dikirim.
          </p>
        </div>

        {/* Messages area */}
        <div className="h-[50vh] md:h-[60vh] overflow-y-auto p-6 space-y-3 bg-white/50">
          {messages.map(m => (
            <div key={m.id} className="flex">
              <div className="max-w-[70%] rounded-xl bg-white border border-black/10 px-4 py-3 shadow-sm">
                <p className="text-sm">{m.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input area (dummy) */}
        <div className="border-t border-black/5 bg-white/70 p-4">
          <form
            className="flex items-center gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Ini hanya contoh UI tanpa fungsionalitas backend.");
            }}
          >
            <input
              type="text"
              className="input"
              placeholder="Tulis ceritamu di sini..."
            />
            <button className="btn btn-primary">Kirim</button>
          </form>
          <p className="small-muted mt-2">
            Tips: Tulis seperti kamu bercerita ke teman yang aman dan suportif.
          </p>
        </div>
      </div>
    </div>
  );
}
