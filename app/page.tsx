import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Preserving Specialized Knowledge Across Generations
            </h1>
            <p className="text-xl text-gray-600">
              CraftBridge connects retiring experts with the next generation of craftspeople to ensure valuable skills and traditions continue to thrive.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/documentation" className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
                Document Your Craft
              </Link>
              <Link href="/learning" className="inline-block px-6 py-3 border border-gray-300 text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition">
                Start Learning
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Hero Image Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How CraftBridge Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform bridges the generational gap in specialized knowledge, connecting masters with apprentices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732.732z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Document Knowledge</h3>
            <p className="text-gray-600">
              Capture and preserve specialized techniques through AI-assisted documentation, videos, and 3D models.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
            <p className="text-gray-600">
              Learn through comprehensive modules with interactive materials that make complex techniques accessible.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mentorship Matching</h3>
            <p className="text-gray-600">
              Connect with experts for personalized guidance and feedback through our remote mentorship program.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-gray-50 rounded-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Explore Craft Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of traditional and specialized crafts being preserved on our platform.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {['Woodworking', 'Textile Arts', 'Metalsmithing', 'Ceramics', 'Traditional Cooking', 'Instrument Making', 'Stone Masonry', 'Cultural Rituals'].map((category, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer text-center">
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center mb-4">
                <span className="text-gray-400">Image</span>
              </div>
              <h3 className="font-medium">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Stories of Knowledge Transfer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from masters and apprentices who have connected through our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Robert Chen, 72</h4>
                <p className="text-gray-600">Master Violin Maker</p>
              </div>
            </div>
            <p className="text-gray-700">
              "After 50 years of crafting violins, I was worried my techniques would be lost. CraftBridge has allowed me to document my methods and connect with passionate young luthiers who are carrying on the tradition."
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Maria Santos, 29</h4>
                <p className="text-gray-600">Apprentice Blacksmith</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Learning traditional blacksmithing techniques would have been impossible without the detailed documentation and mentorship I found on CraftBridge. I'm now preserving methods that date back centuries."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Movement to Preserve Craft Knowledge</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Whether you're a master craftsperson or an eager apprentice, be part of our mission to ensure specialized knowledge lives on for generations to come.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/documentation" className="inline-block px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition">
            Start Documenting
          </Link>
          <Link href="/mentorship" className="inline-block px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-indigo-600 transition">
            Find a Mentor
          </Link>
        </div>
      </section>
    </div>
  );
} 