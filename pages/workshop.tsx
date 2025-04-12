import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WorkshopPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Craft Workshops</h1>
        <p className="text-xl text-gray-600">
          Join interactive sessions with master craftspeople to learn traditional techniques
        </p>
      </div>

      {/* Featured Workshops */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Upcoming Featured Workshops</h2>
          <Link href="/workshop/all" className="text-indigo-600 font-medium hover:text-indigo-700">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Workshop Card 1 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-48">
              <Image
                src="/images/rajsthan.jpeg"
                alt="Rajasthan Handicraft"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-full">Handicraft</span>
                <span className="text-xs text-gray-500">August 15, 2023</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Rajasthan Traditional Handicraft</h3>
              <p className="text-gray-600 mb-4">Explore the rich heritage of Rajasthani handicrafts and learn traditional techniques from master artisans.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">3 hours • $50</span>
                <Link href="/workshop/rajasthan-handicraft" className="text-indigo-600 font-medium hover:text-indigo-700">
                  Register →
                </Link>
              </div>
            </div>
          </div>

          {/* Workshop Card 2 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center">
                <svg className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Ceramics</span>
                <span className="text-xs text-gray-500">August 3, 2023</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Japanese Raku Pottery</h3>
              <p className="text-gray-600 mb-4">Experience the ancient Japanese firing technique of Raku with master ceramicist Keiko Tanaka in this hands-on virtual workshop.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">3 hours • $60</span>
                <Link href="/workshop/raku-pottery" className="text-indigo-600 font-medium hover:text-indigo-700">
                  Register →
                </Link>
              </div>
            </div>
          </div>

          {/* Workshop Card 3 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                <svg className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Textiles</span>
                <span className="text-xs text-gray-500">August 10, 2023</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Traditional Sashiko Stitching</h3>
              <p className="text-gray-600 mb-4">Master the beautiful Japanese reinforcement stitching technique that combines function with striking geometric patterns.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">2 hours • $35</span>
                <Link href="/workshop/sashiko-stitching" className="text-indigo-600 font-medium hover:text-indigo-700">
                  Register →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-8">Why Join Our Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Learn Directly from Masters</h3>
            <p className="text-gray-600">Connect with expert craftspeople who have decades of experience in their traditional craft.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Interactive Experience</h3>
            <p className="text-gray-600">Participate in real-time with opportunities to ask questions and receive personalized feedback on your work.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Comprehensive Resources</h3>
            <p className="text-gray-600">Receive detailed materials lists, preparation guides, and follow-along resources to ensure your success.</p>
          </div>
        </div>
      </section>

      {/* Workshop Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Explore Workshops by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/workshop/category/woodworking" className="bg-amber-50 border border-amber-100 rounded-xl p-6 text-center hover:bg-amber-100 transition">
            <span className="block text-amber-700 font-medium text-lg">Woodworking</span>
            <span className="text-sm text-gray-500">16 workshops</span>
          </Link>
          <Link href="/workshop/category/metalwork" className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center hover:bg-gray-100 transition">
            <span className="block text-gray-700 font-medium text-lg">Metalwork</span>
            <span className="text-sm text-gray-500">12 workshops</span>
          </Link>
          <Link href="/workshop/category/textiles" className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center hover:bg-blue-100 transition">
            <span className="block text-blue-700 font-medium text-lg">Textiles</span>
            <span className="text-sm text-gray-500">14 workshops</span>
          </Link>
          <Link href="/workshop/category/ceramics" className="bg-orange-50 border border-orange-100 rounded-xl p-6 text-center hover:bg-orange-100 transition">
            <span className="block text-orange-700 font-medium text-lg">Ceramics</span>
            <span className="text-sm text-gray-500">9 workshops</span>
          </Link>
        </div>
      </section>

      {/* Host a Workshop */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
        <div className="md:flex items-center justify-between">
          <div className="mb-6 md:mb-0 md:w-2/3">
            <h2 className="text-2xl font-bold mb-2">Share Your Craft Knowledge</h2>
            <p className="text-indigo-100 md:pr-10">
              Are you a master of your craft? Host a workshop and pass your specialized knowledge to the next generation of artisans.
            </p>
          </div>
          <div>
            <Link href="/workshop/host" className="inline-block bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
              Become a Host
            </Link>
          </div>
        </div>
      </section>

      {/* Workshop Schedule */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Upcoming Workshops</h2>
          <Link href="/workshop/all" className="text-indigo-600 font-medium hover:text-indigo-700">
            View All →
          </Link>
        </div>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {/* Workshop Schedule Item 1 */}
          <div className="bg-white p-6 border-b border-gray-200">
            <div className="md:flex justify-between items-start">
              <div className="flex items-start mb-4 md:mb-0">
                <div className="flex flex-col items-center text-center mr-6">
                  <span className="text-2xl font-bold text-indigo-600">18</span>
                  <span className="text-gray-500 uppercase text-sm">July</span>
                </div>
                <div>
                  <span className="inline-block bg-emerald-50 text-emerald-600 text-xs px-2 py-1 rounded-full mb-2">Leathercraft</span>
                  <h3 className="font-bold text-xl mb-1">Traditional Leather Tooling</h3>
                  <p className="text-gray-600">with Marco Rossi • 2:00 PM - 4:30 PM (UTC)</p>
                </div>
              </div>
              <Link href="/workshop/leather-tooling" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                Register
              </Link>
            </div>
          </div>

          {/* Workshop Schedule Item 2 */}
          <div className="bg-white p-6 border-b border-gray-200">
            <div className="md:flex justify-between items-start">
              <div className="flex items-start mb-4 md:mb-0">
                <div className="flex flex-col items-center text-center mr-6">
                  <span className="text-2xl font-bold text-indigo-600">22</span>
                  <span className="text-gray-500 uppercase text-sm">July</span>
                </div>
                <div>
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full mb-2">Glasswork</span>
                  <h3 className="font-bold text-xl mb-1">Stained Glass Fundamentals</h3>
                  <p className="text-gray-600">with Emma Claire • 6:00 PM - 8:00 PM (UTC)</p>
                </div>
              </div>
              <Link href="/workshop/stained-glass" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                Register
              </Link>
            </div>
          </div>

          {/* Workshop Schedule Item 3 */}
          <div className="bg-white p-6">
            <div className="md:flex justify-between items-start">
              <div className="flex items-start mb-4 md:mb-0">
                <div className="flex flex-col items-center text-center mr-6">
                  <span className="text-2xl font-bold text-indigo-600">29</span>
                  <span className="text-gray-500 uppercase text-sm">July</span>
                </div>
                <div>
                  <span className="inline-block bg-amber-50 text-amber-600 text-xs px-2 py-1 rounded-full mb-2">Bookbinding</span>
                  <h3 className="font-bold text-xl mb-1">Traditional Japanese Bookbinding</h3>
                  <p className="text-gray-600">with Yukio Tanaka • 10:00 AM - 12:30 PM (UTC)</p>
                </div>
              </div>
              <Link href="/workshop/japanese-bookbinding" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">What Participants Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Michael Thompson</h3>
                <p className="text-gray-500 text-sm">Woodworking Enthusiast</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The Japanese joinery workshop exceeded my expectations. The instructor was incredibly knowledgeable and patient, guiding us through each step with clear demonstrations. I've gained skills I'll use for a lifetime."
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Sophia Garcia</h3>
                <p className="text-gray-500 text-sm">Textile Artist</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The indigo dyeing workshop was transformative. Learning directly from a master dyer who shared techniques passed down through generations gave me a deeper appreciation for this traditional craft."
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">James Wilson</h3>
                <p className="text-gray-500 text-sm">Ceramics Hobbyist</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The Raku pottery workshop was hands-on even in a virtual format. The pre-workshop materials were comprehensive, and the live guidance helped me troubleshoot in real-time. An amazing experience!"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 