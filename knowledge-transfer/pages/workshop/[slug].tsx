import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function WorkshopDetail() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Sample workshop data based on slugs
  const workshopData = {
    'hand-carved-spoons': {
      title: 'Hand-Carved Spoon Making',
      category: 'Woodworking',
      date: 'July 25, 2023',
      time: '2:00 PM - 4:00 PM (UTC)',
      instructor: 'Erik Johansson',
      price: '$45',
      description: 'Learn traditional Scandinavian techniques for carving functional and beautiful wooden spoons with master woodworker Erik Johansson.',
      color: 'indigo',
      detailedDescription: "In this hands-on workshop, you'll learn the entire process of creating a handcrafted wooden spoon from sustainably harvested timber. Master woodworker Erik Johansson will guide you through selecting the right wood, using traditional hand tools safely and effectively, and applying finishing techniques that enhance both beauty and durability. You'll complete your own functional kitchen spoon while learning techniques that can be applied to a variety of wooden utensils and objects."
    },
    'raku-pottery': {
      title: 'Japanese Raku Pottery',
      category: 'Ceramics',
      date: 'August 3, 2023',
      time: '6:00 PM - 9:00 PM (UTC)',
      instructor: 'Keiko Tanaka',
      price: '$60',
      description: 'Experience the ancient Japanese firing technique of Raku with master ceramicist Keiko Tanaka in this hands-on virtual workshop.',
      color: 'amber',
      detailedDescription: "Discover the fascinating process of Raku, a traditional Japanese pottery technique dating back to the 16th century. Master ceramicist Keiko Tanaka will demonstrate the unique low-firing process and the post-firing reduction technique that creates Raku's distinctive crackled glaze patterns and smoky finishes. You'll learn about clay preparation, forming techniques, glaze application, and the dramatic firing process that makes Raku unique among ceramic traditions."
    },
    'sashiko-stitching': {
      title: 'Traditional Sashiko Stitching',
      category: 'Textiles',
      date: 'August 10, 2023',
      time: '10:00 AM - 12:00 PM (UTC)',
      instructor: 'Yumiko Higashi',
      price: '$35',
      description: 'Master the beautiful Japanese reinforcement stitching technique that combines function with striking geometric patterns.',
      color: 'emerald',
      detailedDescription: "Join textile artist Yumiko Higashi to explore Sashiko, the traditional Japanese stitching technique originally developed for reinforcing and mending textiles. You'll learn how this functional craft evolved into a beautiful decorative art form with distinctive geometric patterns. This workshop covers the essential tools and materials, fundamental stitching techniques, and traditional patterns. You'll complete a small Sashiko sampler that can be used as a coaster or decorative piece."
    },
    'leather-tooling': {
      title: 'Traditional Leather Tooling',
      category: 'Leathercraft',
      date: 'July 18, 2023',
      time: '2:00 PM - 4:30 PM (UTC)',
      instructor: 'Marco Rossi',
      price: '$50',
      description: 'Learn the art of traditional leather tooling and create your own custom leather piece with master craftsman Marco Rossi.',
      color: 'emerald',
      detailedDescription: "Discover the ancient art of leather tooling with master leatherworker Marco Rossi. This workshop introduces you to the fundamental techniques of this versatile craft, including transferring designs, carving, stamping, and finishing. You'll learn about different types of leather, essential tools, and how to create both geometric and pictorial designs. By the end of the session, you'll have completed a small leather item featuring your own tooled design."
    },
    'stained-glass': {
      title: 'Stained Glass Fundamentals',
      category: 'Glasswork',
      date: 'July 22, 2023',
      time: '6:00 PM - 8:00 PM (UTC)',
      instructor: 'Emma Claire',
      price: '$55',
      description: 'Learn the basics of creating beautiful stained glass pieces using the copper foil technique pioneered by Tiffany.',
      color: 'blue',
      detailedDescription: "Join glass artist Emma Claire for an introduction to the copper foil method of stained glass creation. This workshop covers all the essential skills: glass cutting techniques, pattern preparation, grinding and smoothing edges, applying copper foil, soldering, and finishing. You'll learn about glass selection, color theory, and design principles specific to stained glass. By the end of the class, you'll complete a small sun catcher featuring multiple pieces of glass."
    },
    'japanese-bookbinding': {
      title: 'Traditional Japanese Bookbinding',
      category: 'Bookbinding',
      date: 'July 29, 2023',
      time: '10:00 AM - 12:30 PM (UTC)',
      instructor: 'Yukio Tanaka',
      price: '$40',
      description: 'Create your own hand-bound journal using traditional Japanese techniques that have been refined over centuries.',
      color: 'amber',
      detailedDescription: "Master bookbinder Yukio Tanaka will guide you through the process of creating a hand-bound book using traditional Japanese binding techniques. You'll learn about the four-hole stab binding method (yotsume toji), the materials traditionally used in Japanese bookbinding, and how to create a harmonious cover design. This workshop covers paper selection and preparation, proper folding techniques, awl use for creating holes, and the distinctive stitching patterns that characterize Japanese bound books."
    }
  };

  // Also handle category routes 
  if (slug?.toString().includes('category/')) {
    const category = slug?.toString().split('/')[1];
    return (
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <Link href="/workshop" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">
            ← Back to All Workshops
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {category.charAt(0).toUpperCase() + category.slice(1)} Workshops
          </h1>
          <p className="text-xl text-gray-600">
            Browse our selection of {category.toLowerCase()} workshops
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* This would normally be filtered from a complete data set */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                <span className="text-xs text-gray-500">July 25, 2023</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Workshop Example</h3>
              <p className="text-gray-600 mb-4">This is a sample workshop in the {category} category. More workshops would be listed here from our database.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">2 hours • $45</span>
                <Link href={`/workshop/sample-${category.toLowerCase()}`} className="text-indigo-600 font-medium hover:text-indigo-700">
                  Register →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle individual workshop pages
  const workshop = workshopData[slug as string];
  
  if (!workshop) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Workshop Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">Sorry, the workshop you're looking for doesn't exist or has been removed.</p>
        <Link href="/workshop" className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
          Browse All Workshops
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Link href="/workshop" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">
        ← Back to All Workshops
      </Link>
      
      {/* Workshop Header */}
      <div className="bg-white rounded-xl overflow-hidden shadow-md mb-8">
        <div className={`bg-gradient-to-r ${
          workshop.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
          workshop.color === 'amber' ? 'from-amber-500 to-amber-600' :
          workshop.color === 'emerald' ? 'from-emerald-500 to-emerald-600' :
          workshop.color === 'blue' ? 'from-blue-500 to-blue-600' :
          'from-indigo-500 to-indigo-600'
        } h-64 flex items-center justify-center p-8`}>
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">{workshop.title}</h1>
        </div>
        <div className="p-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <span className={`text-sm font-medium ${
              workshop.color === 'indigo' ? 'text-indigo-600 bg-indigo-50' :
              workshop.color === 'amber' ? 'text-amber-600 bg-amber-50' :
              workshop.color === 'emerald' ? 'text-emerald-600 bg-emerald-50' :
              workshop.color === 'blue' ? 'text-blue-600 bg-blue-50' :
              'text-indigo-600 bg-indigo-50'
            } px-3 py-1 rounded-full`}>
              {workshop.category}
            </span>
            <span className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {workshop.date}
            </span>
            <span className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {workshop.time}
            </span>
            <span className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Instructor: {workshop.instructor}
            </span>
            <span className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {workshop.price}
            </span>
          </div>
          <p className="text-gray-700 text-lg mb-8">{workshop.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-500">Limited to 20 participants</p>
            <Link href={`/workshop/register/${slug}`} className={`${
              workshop.color === 'indigo' ? 'bg-indigo-600 hover:bg-indigo-700' :
              workshop.color === 'amber' ? 'bg-amber-600 hover:bg-amber-700' :
              workshop.color === 'emerald' ? 'bg-emerald-600 hover:bg-emerald-700' :
              workshop.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
              'bg-indigo-600 hover:bg-indigo-700'
            } text-white font-medium px-6 py-3 rounded-lg transition`}>
              Register Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Workshop Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">About This Workshop</h2>
          <p className="text-gray-700 mb-6">{workshop.detailedDescription}</p>
          
          <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Understanding materials and tools used in {workshop.category.toLowerCase()}</li>
            <li>Essential techniques and best practices</li>
            <li>Design principles specific to this craft</li>
            <li>Historical context and cultural significance</li>
            <li>How to continue developing your skills after the workshop</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Materials Needed</h3>
          <p className="text-gray-700 mb-3">A detailed materials list will be provided upon registration. Beginner kits are available for purchase if you don't already have supplies.</p>
        </div>
        
        <div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Workshop Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Duration</h4>
                <p className="text-gray-600">{workshop.time.split(' - ')[1].includes('PM') ? parseInt(workshop.time.split(' - ')[1]) - parseInt(workshop.time.split(' - ')[0]) : 2} hours</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Skill Level</h4>
                <p className="text-gray-600">Beginner-friendly</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Class Size</h4>
                <p className="text-gray-600">Maximum 20 participants</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Prerequisites</h4>
                <p className="text-gray-600">None - all are welcome!</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">About the Instructor</h3>
            <div className="flex items-center mb-4">
              <div className={`h-12 w-12 rounded-full ${
                workshop.color === 'indigo' ? 'bg-indigo-100' :
                workshop.color === 'amber' ? 'bg-amber-100' :
                workshop.color === 'emerald' ? 'bg-emerald-100' :
                workshop.color === 'blue' ? 'bg-blue-100' :
                'bg-indigo-100'
              } flex items-center justify-center mr-4`}>
                <svg className={`h-6 w-6 ${
                  workshop.color === 'indigo' ? 'text-indigo-600' :
                  workshop.color === 'amber' ? 'text-amber-600' :
                  workshop.color === 'emerald' ? 'text-emerald-600' :
                  workshop.color === 'blue' ? 'text-blue-600' :
                  'text-indigo-600'
                }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">{workshop.instructor}</h4>
                <p className="text-gray-500 text-sm">Master {workshop.category} Artisan</p>
              </div>
            </div>
            <p className="text-gray-700">
              {workshop.instructor} has over 20 years of experience in {workshop.category.toLowerCase()} and has taught hundreds of students across the globe. Their work has been featured in prestigious exhibitions and publications worldwide.
            </p>
          </div>
        </div>
      </div>
      
      {/* Related Workshops */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(workshopData)
            .filter(([key]) => key !== slug)
            .slice(0, 3)
            .map(([key, relatedWorkshop]) => (
              <div key={key} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative h-40">
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    relatedWorkshop.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                    relatedWorkshop.color === 'amber' ? 'from-amber-500 to-amber-600' :
                    relatedWorkshop.color === 'emerald' ? 'from-emerald-500 to-emerald-600' :
                    relatedWorkshop.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    'from-indigo-500 to-indigo-600'
                  } flex items-center justify-center`}>
                    <h3 className="text-xl font-bold text-white text-center px-4">{relatedWorkshop.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-xs font-medium ${
                      relatedWorkshop.color === 'indigo' ? 'text-indigo-600 bg-indigo-50' :
                      relatedWorkshop.color === 'amber' ? 'text-amber-600 bg-amber-50' :
                      relatedWorkshop.color === 'emerald' ? 'text-emerald-600 bg-emerald-50' :
                      relatedWorkshop.color === 'blue' ? 'text-blue-600 bg-blue-50' :
                      'text-indigo-600 bg-indigo-50'
                    } px-2 py-1 rounded-full`}>
                      {relatedWorkshop.category}
                    </span>
                    <span className="text-xs text-gray-500">{relatedWorkshop.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{relatedWorkshop.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{relatedWorkshop.price}</span>
                    <Link href={`/workshop/${key}`} className="text-indigo-600 font-medium hover:text-indigo-700">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
} 