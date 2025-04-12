import React from 'react';
import Link from 'next/link';

export default function MentorshipPage() {
  // Sample mentors data
  const mentors = [
    {
      id: 1,
      name: 'Robert Chen',
      title: 'Master Violin Maker',
      experience: '50+ years',
      specialties: ['Traditional Lutherie', 'Wood Selection', 'Varnishing Techniques'],
      location: 'Boston, MA',
      rating: 4.9,
      reviews: 42,
      image: '/placeholder.jpg',
      availability: 'Weekly sessions',
      languages: ['English', 'Mandarin']
    },
    {
      id: 2,
      name: 'Maria Santos',
      title: 'Master Blacksmith',
      experience: '25+ years',
      specialties: ['Traditional Forge Work', 'Tool Making', 'Decorative Ironwork'],
      location: 'Santa Fe, NM',
      rating: 4.8,
      reviews: 36,
      image: '/placeholder.jpg',
      availability: 'Weekends only',
      languages: ['English', 'Spanish']
    },
    {
      id: 3,
      name: 'John Winters',
      title: 'Master Woodcarver',
      experience: '40+ years',
      specialties: ['Relief Carving', 'Figurative Sculpture', 'Traditional Tools'],
      location: 'Portland, OR',
      rating: 4.7,
      reviews: 28,
      image: '/placeholder.jpg',
      availability: 'Flexible schedule',
      languages: ['English']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Connect with Master Craftspeople</h1>
        <p className="text-xl text-gray-600">
          Personalized remote mentorship to guide your learning journey and preserve traditional knowledge
        </p>
      </div>

      {/* How Mentorship Works */}
      <div className="mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">How Mentorship Works</h2>
        <div className="grid md:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold mb-2">Find Your Mentor</h3>
            <p className="text-gray-600 text-sm">
              Browse profiles of master craftspeople and find the perfect match for your learning goals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold mb-2">Schedule Sessions</h3>
            <p className="text-gray-600 text-sm">
              Book one-on-one video sessions that fit both your schedules using our integrated calendar.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="font-semibold mb-2">Connect & Learn</h3>
            <p className="text-gray-600 text-sm">
              Meet virtually for personalized instruction, demonstrations, and feedback on your work.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="h-12 w-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              4
            </div>
            <h3 className="font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600 text-sm">
              Submit work samples between sessions for verification and receive guidance for improvement.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-10">
        <div className="mb-6 bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <label htmlFor="search" className="block mb-1 font-medium">Search Mentors</label>
              <input 
                type="text" 
                id="search" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search by craft, skill, or mentor name"
              />
            </div>
            <div className="md:w-1/4">
              <label htmlFor="category" className="block mb-1 font-medium">Category</label>
              <select 
                id="category" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">All Categories</option>
                <option value="woodworking">Woodworking</option>
                <option value="metalwork">Metalwork</option>
                <option value="textiles">Textiles</option>
                <option value="ceramics">Ceramics</option>
                <option value="culinary">Culinary Arts</option>
                <option value="music">Musical Instruments</option>
                <option value="cultural">Cultural Practices</option>
              </select>
            </div>
            <div className="md:w-1/4">
              <label htmlFor="availability" className="block mb-1 font-medium">Availability</label>
              <select 
                id="availability" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Any Time</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="evenings">Evenings</option>
                <option value="mornings">Mornings</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm font-medium mr-2">Popular:</span>
            <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full">Traditional Blacksmithing</button>
            <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full">Japanese Woodworking</button>
            <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full">Navajo Weaving</button>
            <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full">Violin Making</button>
            <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full">Traditional Cooking</button>
          </div>
        </div>
      </div>

      {/* Featured Mentors */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Mentors</h2>
          <div className="flex gap-2">
            <button className="p-2 border border-gray-300 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <button className="p-2 border border-gray-300 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-16 w-16 bg-gray-200 rounded-full">
                    {/* Placeholder for mentor image */}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{mentor.name}</h3>
                    <p className="text-indigo-600">{mentor.title}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-medium">{mentor.rating}</span>
                      <span className="text-gray-500 ml-1">({mentor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600"><strong>Experience:</strong> {mentor.experience}</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600"><strong>Location:</strong> {mentor.location}</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600"><strong>Availability:</strong> {mentor.availability}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.specialties.map((specialty, index) => (
                      <span key={index} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
                    View Profile
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="px-6 py-3 border border-gray-300 text-indigo-600 font-medium rounded-lg hover:bg-gray-50 transition">
            Browse All Mentors
          </button>
        </div>
      </div>

      {/* Scheduling Demo */}
      <div className="mb-12 border border-gray-200 rounded-xl overflow-hidden">
        <div className="bg-indigo-700 text-white p-6">
          <h2 className="text-2xl font-bold mb-2">Schedule Your Mentorship Sessions</h2>
          <p className="opacity-90">Our integrated scheduling system makes it easy to find times that work for both you and your mentor.</p>
        </div>
        <div className="p-6 bg-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Available Time Slots</h3>
              <div className="space-y-2">
                <div className="flex justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <span className="font-medium">Monday, June 10</span>
                    <p className="text-sm text-gray-600">10:00 AM - 11:30 AM (EST)</p>
                  </div>
                  <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Book</button>
                </div>
                <div className="flex justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <span className="font-medium">Wednesday, June 12</span>
                    <p className="text-sm text-gray-600">2:00 PM - 3:30 PM (EST)</p>
                  </div>
                  <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Book</button>
                </div>
                <div className="flex justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <span className="font-medium">Friday, June 14</span>
                    <p className="text-sm text-gray-600">1:00 PM - 2:30 PM (EST)</p>
                  </div>
                  <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Book</button>
                </div>
                <div className="flex justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div>
                    <span className="font-medium">Saturday, June 15</span>
                    <p className="text-sm text-gray-600">11:00 AM - 12:30 PM (EST)</p>
                  </div>
                  <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Book</button>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View More Dates
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Session Details</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="goal" className="block mb-1 font-medium">Learning Goal</label>
                  <input 
                    type="text" 
                    id="goal" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="What do you want to learn in this session?"
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block mb-1 font-medium">Your Experience Level</label>
                  <select 
                    id="experience" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="notes" className="block mb-1 font-medium">Notes for Mentor</label>
                  <textarea 
                    id="notes" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Share any specific questions or topics you'd like to cover"
                  ></textarea>
                </div>
                <div className="pt-2">
                  <button type="submit" className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
                    Schedule Session
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Mentorship Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Alex Johnson</h4>
                <p className="text-gray-600 text-sm">Apprentice Woodcarver</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              "The one-on-one mentorship with Master Winters completely transformed my woodcarving skills. Being able to get immediate feedback on my technique through video sessions helped me correct mistakes I didn't even know I was making."
            </p>
            <div className="text-yellow-500">★★★★★</div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Priya Patel</h4>
                <p className="text-gray-600 text-sm">Textile Artist</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              "Despite living thousands of miles away from my mentor, I was able to learn traditional dyeing techniques that have been passed down for generations. The scheduling was flexible enough to work around our time zone differences."
            </p>
            <div className="text-yellow-500">★★★★★</div>
          </div>
        </div>
      </div>

      {/* Become a Mentor */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-xl p-8 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Share Your Craft Knowledge as a Mentor</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
          Join our community of master craftspeople and help preserve specialized knowledge by mentoring the next generation.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition">
          Become a Mentor
        </button>
      </div>
    </div>
  );
} 