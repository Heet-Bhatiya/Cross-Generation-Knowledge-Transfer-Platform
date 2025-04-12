import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header className="bg-indigo-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/">CraftBridge</Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-indigo-200 transition">Home</Link>
              <Link href="/workshop" className="hover:text-indigo-200 transition">Workshops</Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
