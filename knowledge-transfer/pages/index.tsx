import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  useEffect(() => {
    // Check login status from localStorage
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    const storedUserName = localStorage.getItem('userName') || '';
    const storedUserType = localStorage.getItem('userType') || '';
    
    setIsLoggedIn(loggedInStatus);
    setUserName(storedUserName);
    setUserType(storedUserType);
  }, []);
  
  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userType');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    router.push('/');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-indigo-600 text-xl font-semibold">
              CraftBridge
            </Link>
            
            <nav className="flex items-center space-x-4">
              <Link href="/workshop" className="text-gray-600 hover:text-indigo-600">
                Workshops
              </Link>
              <Link href="/forum" className="text-gray-600 hover:text-indigo-600">
                Community
              </Link>
              
              {isLoggedIn ? (
                <div className="relative">
                  <button 
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 focus:outline-none"
                  >
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-700 font-medium">
                        {userName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span>{userName}</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                      {userType === 'host' && (
                        <Link 
                          href="/workshop/host/dashboard" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                        >
                          Host Dashboard
                        </Link>
                      )}
                      <Link 
                        href="/profile" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                      >
                        Profile Settings
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center ml-4 space-x-2">
                  <Link 
                    href="/auth/login" 
                    className="px-4 py-2 text-indigo-600 font-medium border border-indigo-600 rounded-md hover:bg-indigo-50 transition"
                  >
                    Log in
                  </Link>
                  <Link 
                    href="/auth/signup" 
                    className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Connect with Master Craftspeople Around the World
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Learn traditional crafts directly from experienced artisans through interactive virtual workshops.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/workshop" 
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
                >
                  Explore Workshops
                </Link>
                <Link 
                  href="/auth/signup?type=host" 
                  className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition"
                >
                  Become a Host
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl bg-indigo-200 h-80 relative">
          <Image
                src="/images/image.png"
                alt="Craft Workshop Image"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Discover Craft Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Ceramics', icon: '🏺', color: 'bg-amber-100' },
              { name: 'Woodworking', icon: '🪓', color: 'bg-emerald-100' },
              { name: 'Textiles', icon: '🧵', color: 'bg-blue-100' },
              { name: 'Jewelry', icon: '💍', color: 'bg-purple-100' }
            ].map((category) => (
              <Link href={`/workshop/category/${category.name.toLowerCase()}`} key={category.name}>
                <div className={`${category.color} rounded-xl p-6 text-center hover:shadow-md transition cursor-pointer h-full flex flex-col items-center justify-center`}>
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How CraftBridge Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Browse Workshops</h3>
              <p className="text-gray-700">Explore workshops taught by skilled craftspeople from around the world.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Register & Prepare</h3>
              <p className="text-gray-700">Sign up for a workshop and get a list of materials you'll need beforehand.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Join & Create</h3>
              <p className="text-gray-700">Learn through live, interactive sessions and create beautiful crafts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">CraftBridge</h3>
              <p className="text-gray-400">Connecting craftspeople with eager learners worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Explore</h4>
              <ul className="space-y-2">
                <li><Link href="/workshop" className="text-gray-400 hover:text-white">All Workshops</Link></li>
                <li><Link href="/categories" className="text-gray-400 hover:text-white">Categories</Link></li>
                <li><Link href="/hosts" className="text-gray-400 hover:text-white">Featured Hosts</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link href="/become-a-host" className="text-gray-400 hover:text-white">Become a Host</Link></li>
                <li><Link href="/community" className="text-gray-400 hover:text-white">Community Guidelines</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CraftBridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
