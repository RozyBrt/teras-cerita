import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10">
      <div className="container-max py-8 flex items-center justify-between">
        <p className="small-muted">© {new Date().getFullYear()} Teras Cerita.</p>
        <div className="flex gap-6">
          <Link href="/kebijakan-privasi" className="footer-link">Kebijakan Privasi</Link>
          <Link href="/disclaimer" className="footer-link">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
