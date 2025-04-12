import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Participant {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  registrationDate: string;
  experience: string;
  specialRequirements: string;
  status: string;
  attended?: boolean;
  notes?: string;
}

interface Workshop {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  instructor: string;
  status: string;
  enrollments: number;
  capacity: number;
}

export default function WorkshopAttendance() {
  const router = useRouter();
  const { workshopId } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [workshop, setWorkshop] = useState<Workshop | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [workshopNotes, setWorkshopNotes] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [userName, setUserName] = useState('');

  // Sample workshops data - in a real app, this would be fetched from a backend
  const workshopsData = {
    'ws-1': {
      id: 'ws-1',
      title: 'Japanese Pottery Techniques',
      category: 'Ceramics',
      date: 'August 15, 2023',
      time: '2:00 PM - 4:00 PM (UTC)',
      instructor: 'Keiko Tanaka',
      status: 'published',
      enrollments: 12,
      capacity: 20
    },
    'ws-2': {
      id: 'ws-2',
      title: 'Advanced Woodcarving Methods',
      category: 'Woodworking',
      date: 'September 3, 2023',
      time: '10:00 AM - 1:00 PM (UTC)',
      instructor: 'Erik Johansson',
      status: 'draft',
      enrollments: 0,
      capacity: 15
    },
    'ws-3': {
      id: 'ws-3',
      title: 'Traditional Textile Dyeing',
      category: 'Textiles',
      date: 'August 28, 2023',
      time: '3:00 PM - 5:30 PM (UTC)',
      instructor: 'Yumiko Higashi',
      status: 'published',
      enrollments: 8,
      capacity: 18
    }
  };

  // Sample participants data - in a real app, this would be fetched from a backend
  const participantsData = {
    'ws-1': [
      {
        id: 'p1',
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@example.com',
        phone: '555-123-4567',
        registrationDate: '2023-07-10',
        experience: 'beginner',
        specialRequirements: 'None',
        status: 'confirmed',
        attended: false,
        notes: ''
      },
      {
        id: 'p2',
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.j@example.com',
        phone: '555-234-5678',
        registrationDate: '2023-07-12',
        experience: 'intermediate',
        specialRequirements: 'Would like to focus on teapot making if possible',
        status: 'confirmed',
        attended: false,
        notes: ''
      },
      {
        id: 'p3',
        firstName: 'Michael',
        lastName: 'Brown',
        email: 'mbrown@example.com',
        phone: '555-345-6789',
        registrationDate: '2023-07-15',
        experience: 'beginner',
        specialRequirements: '',
        status: 'confirmed',
        attended: false,
        notes: ''
      },
      {
        id: 'p4',
        firstName: 'Emily',
        lastName: 'Davis',
        email: 'emily.d@example.com',
        phone: '555-456-7890',
        registrationDate: '2023-07-18',
        experience: 'advanced',
        specialRequirements: 'Will be using my own clay',
        status: 'confirmed',
        attended: false,
        notes: ''
      }
    ],
    'ws-3': [
      {
        id: 'p6',
        firstName: 'Jennifer',
        lastName: 'Lee',
        email: 'jlee@example.com',
        phone: '555-678-9012',
        registrationDate: '2023-06-25',
        experience: 'intermediate',
        specialRequirements: '',
        status: 'confirmed',
        attended: false,
        notes: ''
      },
      {
        id: 'p7',
        firstName: 'Robert',
        lastName: 'Taylor',
        email: 'rtaylor@example.com',
        phone: '555-789-0123',
        registrationDate: '2023-06-28',
        experience: 'beginner',
        specialRequirements: 'Will need assistance with pattern tracing',
        status: 'confirmed',
        attended: false,
        notes: ''
      },
      {
        id: 'p8',
        firstName: 'Lisa',
        lastName: 'Anderson',
        email: 'lisa.a@example.com',
        phone: '555-890-1234',
        registrationDate: '2023-07-02',
        experience: 'beginner',
        specialRequirements: '',
        status: 'confirmed',
        attended: false,
        notes: ''
      }
    ]
  };

  useEffect(() => {
    // Check auth status
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userType = localStorage.getItem('userType');
    const storedUserName = localStorage.getItem('userName');
    
    // If not logged in or not a host, redirect to login
    if (!isLoggedIn || userType !== 'host') {
      router.push('/auth/login?redirect=/workshop/host/dashboard');
      return;
    }

    if (storedUserName) {
      setUserName(storedUserName);
    }

    if (workshopId && typeof workshopId === 'string') {
      // Get workshop data
      const workshop = workshopsData[workshopId];
      if (workshop) {
        setWorkshop(workshop);
      } else {
        // Workshop not found, redirect to dashboard
        router.push('/workshop/host/dashboard');
        return;
      }

      // Get participants for this workshop (only confirmed ones for attendance)
      const workshopParticipants = participantsData[workshopId] || [];
      const confirmedParticipants = workshopParticipants.filter(p => p.status === 'confirmed');
      setParticipants(confirmedParticipants);
    }

    setIsLoading(false);
  }, [router, workshopId]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAttendanceChange = (participantId: string, attended: boolean) => {
    setParticipants(prevParticipants => 
      prevParticipants.map(participant => 
        participant.id === participantId 
          ? { ...participant, attended } 
          : participant
      )
    );
  };

  const handleParticipantNoteChange = (participantId: string, notes: string) => {
    setParticipants(prevParticipants => 
      prevParticipants.map(participant => 
        participant.id === participantId 
          ? { ...participant, notes } 
          : participant
      )
    );
  };

  const handleSaveAttendance = () => {
    // In a real app, this would send attendance data to the backend
    setAttendanceMarked(true);
    alert('Attendance has been saved!');

    // Optional: redirect to another page or show a success message
    setTimeout(() => {
      router.push('/workshop/host/dashboard');
    }, 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userType');
    router.push('/auth/login');
  };

  const filteredParticipants = participants.filter(participant => {
    const fullName = `${participant.firstName} ${participant.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase()) || 
           participant.email.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!workshop) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Workshop Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">Sorry, the workshop you're looking for doesn't exist.</p>
        <Link href="/workshop/host/dashboard" className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header with Navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-indigo-600 text-xl font-semibold">
              CraftBridge
            </Link>
            
            <nav className="flex items-center space-x-8">
              <Link href="/workshop" className="text-gray-600 hover:text-indigo-600">
                Workshops
              </Link>
              <Link href="/forum" className="text-gray-600 hover:text-indigo-600">
                Community
              </Link>
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
                    <Link 
                      href="/workshop/host/dashboard" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                    >
                      Dashboard
                    </Link>
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
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/workshop/host/dashboard" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">
          ← Back to Dashboard
        </Link>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h1 className="text-xl font-bold">Workshop Attendance</h1>
            <p className="text-gray-600">{workshop.title} - {workshop.date}</p>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4">Attendance Tracking</h2>
              <p className="text-gray-600 mb-4">
                Mark attendance for participants who attended this workshop. You can also add notes for each participant.
              </p>
              
              <div className="flex justify-between items-center mb-6">
                <div className="relative w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search participants..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">
                    {participants.filter(p => p.attended).length} of {participants.length} attended
                  </span>
                  <button
                    onClick={() => {
                      // Mark all as attended
                      setParticipants(prevParticipants => 
                        prevParticipants.map(p => ({ ...p, attended: true }))
                      );
                    }}
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Mark all as attended
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Participant
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Experience
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Attended
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredParticipants.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                          No participants found
                        </td>
                      </tr>
                    ) : (
                      filteredParticipants.map((participant) => (
                        <tr key={participant.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {participant.firstName} {participant.lastName}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{participant.email}</div>
                            <div className="text-sm text-gray-500">{participant.phone}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                              ${participant.experience === 'beginner' ? 'bg-green-100 text-green-800' : 
                              participant.experience === 'intermediate' ? 'bg-blue-100 text-blue-800' : 
                              'bg-purple-100 text-purple-800'}`}>
                              {participant.experience.charAt(0).toUpperCase() + participant.experience.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex justify-center">
                              <input
                                type="checkbox"
                                checked={participant.attended}
                                onChange={(e) => handleAttendanceChange(participant.id, e.target.checked)}
                                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <textarea
                              rows={1}
                              value={participant.notes}
                              onChange={(e) => handleParticipantNoteChange(participant.id, e.target.value)}
                              placeholder="Add notes about this participant..."
                              className="w-full text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                            ></textarea>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="mb-4">
                <label htmlFor="workshopNotes" className="block text-sm font-medium text-gray-700 mb-1">
                  Workshop Notes
                </label>
                <textarea
                  id="workshopNotes"
                  rows={4}
                  value={workshopNotes}
                  onChange={(e) => setWorkshopNotes(e.target.value)}
                  placeholder="Add any general notes about how the workshop went..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-3">
                <Link
                  href="/workshop/host/dashboard"
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
                >
                  Cancel
                </Link>
                <button
                  onClick={handleSaveAttendance}
                  disabled={attendanceMarked}
                  className={`px-4 py-2 ${attendanceMarked ? 'bg-green-600' : 'bg-indigo-600'} text-white rounded-md hover:${attendanceMarked ? 'bg-green-700' : 'bg-indigo-700'} transition flex items-center`}
                >
                  {attendanceMarked ? (
                    <>
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Attendance Saved
                    </>
                  ) : (
                    'Save Attendance'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 