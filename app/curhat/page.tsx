"use client";

import { useEffect, useRef, useState } from "react";

// Definisikan tipe data untuk pesan agar lebih rapi dan aman
type Message = {
  from: "system" | "user" | "bot";
  text: string;
};

export default function CurhatPage() {
  // State untuk menyipan semua pesan dalam percakapan
  const [messages, setMessages] = useState<Message[]>([{ from: "system", text: "Halo, aku di sini untuk mendengarkan ceritamu..." }]);

  // State untuk menyimpan teks yang sedang diketik pengguna di input box
  const [input, setInput] = useState("");
  // State untuk menandakan apakah AI memproses jawaban (untuk loading indicator)
  const [isLoading, setIsLoading] = useState(false);

  // Ref digunakan untuk bisa otomatis scroll ke pesan paling bawah
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Setiap kali ada pesan baru, panggil fungsi scrollToBottom
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fungsi ini akan dijalankan setiap kali pengguna menekan tombol "Kirim"
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah halaman refresh saat form dikirim
    if (!input.trim() || isLoading) return; // Jangan lakukan apa-apa jika input kosong atau sedang loading

    // 1. Tambahkan pesan pengguna ke daftar pesan agar langsung tampil di UI
    const userMessage: Message = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); //  Kosongkan kembali input box
    setIsLoading(true); //  Mulai proses loading

    // 2. Kirim pesan ke API Flowise dan tunggu jawabannya
    try {
      // 2. Kirim pesan ke API Flowise
      const response = await fetch(process.env.NEXT_PUBLIC_FLOWISE_API_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }), // Sesuaikan 'question' jika perlu
      });

      if (!response.ok) {
        throw new Error("Gagal mendapatkan respon dari AI.");
      }

      const data = await response.json();
      // 3. Tambahkan respons dari bot ke UI
      // 'data.text' mungkin perlu disesuaikan tergantung format respons Flowise Anda
      const botMessage: Message = { from: "bot", text: data.text };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = { from: "bot", text: "Maaf, sepertinya ada sedikit gangguan. Coba lagi nanti ya." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      // 4. Selesai loading. apapun hasilnya (sukses atau error)
      setIsLoading(false);
    }
  };

  return (
    <div className="container-max py-8 md:py-12">
      <div className="card p-0 overflow-hidden">
        <div className="px-6 py-4 border-b border-black/5 bg-white/60">
          <h1 className="text-lg font-semibold">Ruang Curhat</h1>
          <p className="small-muted mt-1">Didukung oleh AI. Pesanmu tidak disimpan atau dibagikan.</p>
        </div>

        {/* Messages area */}
        <div className="h-[50vh] md:h-[60vh] overflow-y-auto p-6 space-y-3 bg-white/50">
          {messages.map((m, index) => (
            <div
              key={index}
              className="flex ${
              m.from === 'user' ? 'justify-end' : 'justify-start' //  Pesan user di kanan, bot di kiri
            }"
            >
              <div
                className={`max-w-[70%] rounded-xl px-4 py-3 shadow-sm ${
                  m.from === "user" ? "bg-blue-500 text-white" : "bg-white border border-black/10" // Warna beda
                }`}
              >
                <p className="text-sm" style={{ whiteSpace: "pre-wrap" }}>
                  {m.text}
                </p>
              </div>
            </div>
          ))}

          {/* Tampilkan indikator loading jika isLoading == true */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[70%] rounded-xl bg-white border border-black/10 px-4 py-3 shadow-sm">
                <p className="text-sm animate-pulse">AI sedang berpikir ...</p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area (dummy) */}
        <div className="border-t border-black/5 bg-white/70 p-4">
          <form className="flex-item gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input"
              placeholder="Tulis ceritamu di sini..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading} // Input tidak bisa diketik saat loading
            />
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? "..." : "Kirim"}
            </button>
          </form>
          <p className="small-muted mt-2">
            Tips: Tulis seperti kamu bercerita ke teman yang aman dan suportif.
          </p>
        </div>
      </div>
    </div>
  );
}
