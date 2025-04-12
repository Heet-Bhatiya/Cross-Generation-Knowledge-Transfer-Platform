import type { AppProps } from 'next/app';
import '../app/globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <header className="bg-indigo-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">CraftBridge</Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/documentation" className="hover:text-indigo-200 transition">Documentation</Link>
              <Link href="/learning" className="hover:text-indigo-200 transition">Learning</Link>
              <Link href="/workshop" className="hover:text-indigo-200 transition">Workshops</Link>
              <Link href="/mentorship" className="hover:text-indigo-200 transition">Mentorship</Link>
              <Link href="/forums" className="hover:text-indigo-200 transition">Forums</Link>
              <Link href="/marketplace" className="hover:text-indigo-200 transition">Marketplace</Link>
            </nav>
            <div className="md:hidden">
              <button className="text-white">Menu</button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Component {...pageProps} />
      </main>
      <footer className="bg-gray-100 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">CraftBridge</h3>
              <p className="text-gray-600">Preserving craftsmanship across generations</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-medium mb-2">Platform</h4>
                <ul className="space-y-2">
                  <li><Link href="/documentation" className="text-gray-600 hover:text-indigo-600">Documentation</Link></li>
                  <li><Link href="/learning" className="text-gray-600 hover:text-indigo-600">Learning</Link></li>
                  <li><Link href="/workshop" className="text-gray-600 hover:text-indigo-600">Workshops</Link></li>
                  <li><Link href="/mentorship" className="text-gray-600 hover:text-indigo-600">Mentorship</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Community</h4>
                <ul className="space-y-2">
                  <li><Link href="/forums" className="text-gray-600 hover:text-indigo-600">Forums</Link></li>
                  <li><Link href="/marketplace" className="text-gray-600 hover:text-indigo-600">Marketplace</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-center">© {new Date().getFullYear()} CraftBridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 