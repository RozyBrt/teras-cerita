import Link from "next/link";
import Icon from "@/components/Icon";

export default function Page() {
  return (
    <div>
      {/* Hero */}
      <section className="container-max py-16 md:py-24">
        <div className="card p-8 md:p-12 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Selamat Datang di <span className="text-primary">Teras Cerita</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-black/70">
            Ruang amanmu untuk berbagi cerita, tanpa dihakimi.
          </p>
          <div className="mt-8">
            <Link href="/curhat" className="btn btn-primary text-base md:text-lg">
              Mulai Curhat
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-max pb-8 md:pb-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Bagaimana Ini Bekerja?</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="card p-6">
            <Icon name="speak" className="h-8 w-8 text-primary" />
            <h3 className="mt-3 font-semibold">Ceritakan Isi Hatimu</h3>
            <p className="mt-1 text-black/70 text-sm">
              Kamu bisa menulis apa saja secara anonim. Tidak ada penilaian.
            </p>
          </div>
          <div className="card p-6">
            <Icon name="check" className="h-8 w-8 text-primary" />
            <h3 className="mt-3 font-semibold">Pahami Kondisimu</h3>
            <p className="mt-1 text-black/70 text-sm">
              Isi kuesioner singkat setelah sesi untuk refleksi diri.
            </p>
          </div>
          <div className="card p-6">
            <Icon name="help" className="h-8 w-8 text-primary" />
            <h3 className="mt-3 font-semibold">Dapatkan Bantuan Lanjutan</h3>
            <p className="mt-1 text-black/70 text-sm">
              Temukan kontak profesional jika kamu membutuhkan dukungan lebih.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
