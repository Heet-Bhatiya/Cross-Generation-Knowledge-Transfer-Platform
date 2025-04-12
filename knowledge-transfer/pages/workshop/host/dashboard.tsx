import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HostDashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Sample workshops data
  const [workshops, setWorkshops] = useState([
    {
      id: 'ws-1',
      title: 'Japanese Pottery Techniques',
      category: 'Ceramics',
      date: 'August 15, 2023',
      time: '2:00 PM - 4:00 PM (UTC)',
      status: 'published',
      enrollments: 12,
      capacity: 20
    },
    {
      id: 'ws-2',
      title: 'Advanced Woodcarving Methods',
      category: 'Woodworking',
      date: 'September 3, 2023',
      time: '10:00 AM - 1:00 PM (UTC)',
      status: 'draft',
      enrollments: 0,
      capacity: 15
    },
    {
      id: 'ws-3',
      title: 'Traditional Textile Dyeing',
      category: 'Textiles',
      date: 'August 28, 2023',
      time: '3:00 PM - 5:30 PM (UTC)',
      status: 'published',
      enrollments: 8,
      capacity: 18
    }
  ]);

  // Check auth status on component mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUserName = localStorage.getItem('userName');
    const userType = localStorage.getItem('userType');
    
    // If not logged in or not a host, redirect to login
    if (!isLoggedIn || userType !== 'host') {
      router.push('/auth/login?redirect=/workshop/host/dashboard');
      return;
    }
    
    if (storedUserName) {
      setUserName(storedUserName);
    }
    
    setIsLoading(false);
  }, [router]);
  
  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userType');
    router.push('/auth/login');
  };
  
  // Function to handle publishing a draft workshop
  const handlePublishWorkshop = (id: string) => {
    setWorkshops(prevWorkshops => 
      prevWorkshops.map(workshop => 
        workshop.id === id ? { ...workshop, status: 'published' } : workshop
      )
    );
  };
  
  // Function to handle deleting a workshop
  const handleDeleteWorkshop = (id: string) => {
    if (window.confirm('Are you sure you want to delete this workshop?')) {
      setWorkshops(prevWorkshops => 
        prevWorkshops.filter(workshop => workshop.id !== id)
      );
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button onClick={() => router.back()} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition mb-4">← Back</button>
      <h1 className="text-3xl font-bold mb-6">Host Dashboard</h1>
      <nav className="mb-8">
        <Link href="/workshop/host/create" className="text-indigo-600 hover:text-indigo-800">Create New Workshop</Link>
      </nav>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Manage Your Workshops</h2>
        <p className="text-gray-600">Here you can view and manage all the workshops you are hosting.</p>
        {/* Add workshop management functionality here */}
      </section>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">User Menu</h2>
        <Link 
          href="/knowledge-transfer/pages/profile" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
        >
          Profile Settings
        </Link>
      </div>
    </div>
  );
} 