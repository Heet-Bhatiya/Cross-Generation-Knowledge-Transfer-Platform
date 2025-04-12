import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LearningPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Interactive Learning</h1>
        <p className="text-xl text-gray-600">
          Master traditional crafts through immersive learning experiences
        </p>
      </div>

      {/* Featured Courses */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course Card 1 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">Blacksmithing</span>
                <span className="text-xs text-gray-500">12 Modules</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Traditional Blade Forging</h3>
              <p className="text-gray-600 mb-4">Learn the ancient techniques of forging high-carbon steel blades from master blacksmith Takeshi Yamada.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">4.9 ⭐ (124 reviews)</span>
                <Link href="/learning/blade-forging" legacyBehavior>
                  <a className="text-indigo-600 font-medium hover:text-indigo-700">Start Learning →</a>
                </Link>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
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
                <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">Woodworking</span>
                <span className="text-xs text-gray-500">8 Modules</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Japanese Joinery Fundamentals</h3>
              <p className="text-gray-600 mb-4">Master the art of wood joinery without nails or screws, using traditional Japanese carpentry methods.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">4.8 ⭐ (98 reviews)</span>
                <Link href="/learning/japanese-joinery" legacyBehavior>
                  <a className="text-indigo-600 font-medium hover:text-indigo-700">Start Learning →</a>
                </Link>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                <svg className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Textiles</span>
                <span className="text-xs text-gray-500">10 Modules</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Indigo Dyeing and Shibori</h3>
              <p className="text-gray-600 mb-4">Explore the ancient Japanese art of indigo dyeing and shibori fabric patterning techniques.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">4.7 ⭐ (76 reviews)</span>
                <Link href="/learning/indigo-dyeing" legacyBehavior>
                  <a className="text-indigo-600 font-medium hover:text-indigo-700">Start Learning →</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Learning Features */}
      <section className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-8">Interactive Learning Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">HD Video Tutorials</h3>
            <p className="text-gray-600">Multi-angle video demonstrations with slow-motion and zoom features for detailed viewing.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">3D Interactive Models</h3>
            <p className="text-gray-600">Manipulate 3D models of tools, techniques, and finished pieces to understand from all angles.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-4 rounded-full mb-4">
              <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Progress Tracking</h3>
            <p className="text-gray-600">Track your progress through modules and earn certifications as you master new skills.</p>
          </div>
        </div>
      </section>

      {/* Learning Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Explore By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/learning/category/woodworking" legacyBehavior>
            <a className="bg-amber-50 border border-amber-100 rounded-xl p-6 text-center hover:bg-amber-100 transition">
              <span className="block text-amber-700 font-medium text-lg">Woodworking</span>
              <span className="text-sm text-gray-500">42 courses</span>
            </a>
          </Link>
          <Link href="/learning/category/metalwork" legacyBehavior>
            <a className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center hover:bg-gray-100 transition">
              <span className="block text-gray-700 font-medium text-lg">Metalwork</span>
              <span className="text-sm text-gray-500">31 courses</span>
            </a>
          </Link>
          <Link href="/learning/category/textiles" legacyBehavior>
            <a className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center hover:bg-blue-100 transition">
              <span className="block text-blue-700 font-medium text-lg">Textiles</span>
              <span className="text-sm text-gray-500">27 courses</span>
            </a>
          </Link>
          <Link href="/learning/category/ceramics" legacyBehavior>
            <a className="bg-orange-50 border border-orange-100 rounded-xl p-6 text-center hover:bg-orange-100 transition">
              <span className="block text-orange-700 font-medium text-lg">Ceramics</span>
              <span className="text-sm text-gray-500">19 courses</span>
            </a>
          </Link>
          <Link href="/learning/category/glass" legacyBehavior>
            <a className="bg-cyan-50 border border-cyan-100 rounded-xl p-6 text-center hover:bg-cyan-100 transition">
              <span className="block text-cyan-700 font-medium text-lg">Glasswork</span>
              <span className="text-sm text-gray-500">12 courses</span>
            </a>
          </Link>
          <Link href="/learning/category/leather" legacyBehavior>
            <a className="bg-brown-50 border border-amber-200 rounded-xl p-6 text-center hover:bg-amber-200 transition">
              <span className="block text-amber-800 font-medium text-lg">Leathercraft</span>
              <span className="text-sm text-gray-500">15 courses</span>
            </a>
          </Link>
          <Link href="/learning/category/paper" legacyBehavior>
            <a className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 text-center hover:bg-emerald-100 transition">
              <span className="block text-emerald-700 font-medium text-lg">Paper Arts</span>
              <span className="text-sm text-gray-500">8 courses</span>
            </a>
          </Link>
          <Link href="/learning/category/all" legacyBehavior>
            <a className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 text-center hover:bg-indigo-100 transition">
              <span className="block text-indigo-700 font-medium text-lg">View All</span>
              <span className="text-sm text-gray-500">180+ courses</span>
            </a>
          </Link>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="md:flex items-center justify-between">
          <div className="mb-6 md:mb-0 md:w-2/3">
            <h2 className="text-2xl font-bold mb-2">Join Our Learning Community</h2>
            <p className="text-indigo-100 md:pr-10">
              Connect with fellow learners, share your progress, and get feedback from master craftspeople.
            </p>
          </div>
          <div>
            <Link href="/community/join" legacyBehavior>
              <a className="inline-block bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
                Join Community
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 