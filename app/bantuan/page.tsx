import Image from "next/image";

type Profesional = {
  name: string;
  title: string;
  photo: string;
  link: string;
};

const data: Profesional[] = [
  { name: "Dr. Fachrur Rozi, M.Psi., Psikolog", title: "Psikolog Klinis Dewasa", photo: "/images/psikolog-1.jpg", link: "#" },
  { name: "Putri Ratna Sari, M.Psi., Psikolog", title: "Konselor Kesejahteraan Digital", photo: "/images/psikolog-2.jpg", link: "#" },
  { name: "Ester Manurung, M.Psi., Psikolog", title: "Psikolog Anak & Remaja", photo: "/images/psikolog-3.jpg", link: "#" },
  { name: "Debora Sigalingging, S.Psi., Psikolog", title: "Konselor Karier & Stres Kerja", photo: "/images/psikolog-4.jpg", link: "#" }
];

export default function BantuanPage() {
  return (
    <div className="container-max py-8 md:py-12">
      <h1 className="text-2xl font-semibold mb-6">Hubungi Profesional</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p) => (
          <div key={p.name} className="card p-4">
            <div className="aspect-[16/10] w-full rounded-lg bg-black/5 overflow-hidden relative">
              <Image
              src={p.photo}
              alt={p.name}
              fill
              className="object-cover"
              />
              <div className="w-full h-full flex items-center justify-center text-black/40 text-sm">Foto</div>

            </div>
            <div className="mt-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-black/70">{p.title}</p>
              <a href={p.link} className="btn btn-primary mt-4">Hubungi</a>
            </div>
          </div>
        ))}
      </div>
      <p className="small-muted mt-6">
        Catatan: Daftar ini bersifat ilustratif. Silakan sesuaikan dengan jaringan profesional yang terpercaya di wilayahmu.
      </p>
    </div>
  );
}
