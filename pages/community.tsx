import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CommunityPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Craft Community</h1>
        <p className="text-xl text-gray-600">
          Connect with passionate craft enthusiasts and masters from around the world
        </p>
      </div>

      {/* Featured Community Highlights */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl overflow-hidden shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">7,500+</h2>
              <p className="text-indigo-100 mb-6">Active members in our global community</p>
              <Link href="/community/join" legacyBehavior>
                <a className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition">
                  Join Now
                </a>
              </Link>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl overflow-hidden shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">120+</h2>
              <p className="text-amber-100 mb-6">Monthly virtual workshops and meetups</p>
              <Link href="/events" legacyBehavior>
                <a className="inline-block bg-white text-amber-600 px-4 py-2 rounded-lg font-medium hover:bg-amber-50 transition">
                  Browse Events
                </a>
              </Link>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl overflow-hidden shadow-lg">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">35+</h2>
              <p className="text-emerald-100 mb-6">Community chapters across six continents</p>
              <Link href="/community/chapters" legacyBehavior>
                <a className="inline-block bg-white text-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-emerald-50 transition">
                  Find Nearby
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-8">Community Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-5">
            <div className="bg-indigo-100 rounded-full p-4 h-fit">
              <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Discussion Forums</h3>
              <p className="text-gray-600">
                Join craft-specific forums to ask questions, share tips, and discuss techniques with fellow enthusiasts and master craftspeople.
              </p>
            </div>
          </div>
          
          <div className="flex gap-5">
            <div className="bg-indigo-100 rounded-full p-4 h-fit">
              <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Live Streaming</h3>
              <p className="text-gray-600">
                Watch and host live demonstrations of your craft, allowing real-time interaction and Q&A with viewers worldwide.
              </p>
            </div>
          </div>
          
          <div className="flex gap-5">
            <div className="bg-indigo-100 rounded-full p-4 h-fit">
              <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Virtual Events</h3>
              <p className="text-gray-600">
                Attend workshops, masterclasses, and skill-sharing sessions hosted by community members and invited masters.
              </p>
            </div>
          </div>
          
          <div className="flex gap-5">
            <div className="bg-indigo-100 rounded-full p-4 h-fit">
              <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Project Showcase</h3>
              <p className="text-gray-600">
                Share your completed projects, works-in-progress, and receive constructive feedback from the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Community Members */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Community Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Member 1 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-48 bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
                  <svg className="h-12 w-12 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold mb-1">Keiko Tanaka</h3>
              <span className="inline-block bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded-full mb-2">Master Ceramicist</span>
              <p className="text-gray-600 text-sm">Tokyo, Japan</p>
            </div>
          </div>

          {/* Member 2 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-48 bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden">
                  <svg className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold mb-1">Miguel Hernandez</h3>
              <span className="inline-block bg-amber-50 text-amber-600 text-xs px-2 py-1 rounded-full mb-2">Woodworker</span>
              <p className="text-gray-600 text-sm">Barcelona, Spain</p>
            </div>
          </div>

          {/* Member 3 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-48 bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center overflow-hidden">
                  <svg className="h-12 w-12 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold mb-1">Amara Okafor</h3>
              <span className="inline-block bg-emerald-50 text-emerald-600 text-xs px-2 py-1 rounded-full mb-2">Textile Artist</span>
              <p className="text-gray-600 text-sm">Lagos, Nigeria</p>
            </div>
          </div>

          {/* Member 4 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-48 bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                  <svg className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold mb-1">Erik Johansson</h3>
              <span className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full mb-2">Blacksmith</span>
              <p className="text-gray-600 text-sm">Stockholm, Sweden</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Community Events */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Upcoming Community Events</h2>
          <Link href="/events" legacyBehavior>
            <a className="text-indigo-600 font-medium hover:text-indigo-700">View All →</a>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event 1 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col items-center text-center mr-4">
                  <span className="text-2xl font-bold text-indigo-600">15</span>
                  <span className="text-gray-500 uppercase text-sm">July</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Traditional Indigo Dyeing Workshop</h3>
                  <p className="text-gray-600 mb-2">10:00 AM - 1:00 PM (UTC+0)</p>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-gray-500 text-sm">237 attending</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Join master dyer Amara Okafor for a hands-on workshop exploring traditional indigo dyeing techniques from West Africa.</p>
              <div className="flex justify-end">
                <Link href="/events/indigo-workshop" legacyBehavior>
                  <a className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                    Register
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col items-center text-center mr-4">
                  <span className="text-2xl font-bold text-indigo-600">22</span>
                  <span className="text-gray-500 uppercase text-sm">July</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Japanese Carpentry Techniques</h3>
                  <p className="text-gray-600 mb-2">7:00 PM - 9:00 PM (UTC+0)</p>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-gray-500 text-sm">182 attending</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">An online demonstration of traditional Japanese joinery techniques with master carpenter Hiroshi Nakamura.</p>
              <div className="flex justify-end">
                <Link href="/events/japanese-carpentry" legacyBehavior>
                  <a className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                    Register
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Community Form */}
      <section className="bg-gray-50 rounded-2xl p-8">
        <div className="md:flex items-start">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">Join Our Global Community</h2>
            <p className="text-gray-600 mb-4">
              Connect with passionate craft enthusiasts, share your knowledge, learn from others, and preserve traditional crafts for future generations.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Access to exclusive workshops and events</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Connect with master craftspeople worldwide</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Share your projects and get valuable feedback</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Help preserve and document traditional crafts</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-sm">
            <form>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your full name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="craftInterest" className="block text-sm font-medium text-gray-700 mb-1">Primary Craft Interest</label>
                <select
                  id="craftInterest"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select your primary interest</option>
                  <option value="woodworking">Woodworking</option>
                  <option value="metalwork">Metalwork</option>
                  <option value="textiles">Textiles</option>
                  <option value="ceramics">Ceramics</option>
                  <option value="glass">Glasswork</option>
                  <option value="leather">Leathercraft</option>
                  <option value="paper">Paper Arts</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                <select
                  id="experience"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="master">Master</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Join the Community
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 