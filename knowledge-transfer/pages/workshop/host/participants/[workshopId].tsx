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

// Participant Details Modal Component
const ParticipantDetailsModal = ({ 
  participant, 
  onClose,
  workshopTitle 
}: { 
  participant: Participant | null;
  onClose: () => void;
  workshopTitle: string;
}) => {
  if (!participant) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Participant Details</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="px-6 py-4 overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium">{participant.firstName} {participant.lastName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{participant.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{participant.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Experience Level</p>
                <p className="font-medium capitalize">{participant.experience}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Registration Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Workshop</p>
                <p className="font-medium">{workshopTitle}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Registration Date</p>
                <p className="font-medium">{participant.registrationDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className={`font-medium ${
                  participant.status === 'confirmed' ? 'text-green-600' : 
                  participant.status === 'waiting_list' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {participant.status === 'confirmed' ? 'Confirmed' : 
                   participant.status === 'waiting_list' ? 'Waiting List' : 'Cancelled'}
                </p>
              </div>
            </div>
          </div>
          
          {participant.specialRequirements && (
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Special Requirements</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-800">{participant.specialRequirements}</p>
              </div>
            </div>
          )}
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => alert(`Email sent to ${participant.email}`)}
                className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Participant
              </button>
              <button
                onClick={onClose}
                className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reminder Email Modal Component
const ReminderEmailModal = ({
  workshopTitle,
  workshopDate,
  workshopTime,
  onClose,
  onSend,
  recipientCount
}: {
  workshopTitle: string;
  workshopDate: string;
  workshopTime: string;
  onClose: () => void;
  onSend: (subject: string, message: string) => void;
  recipientCount: number;
}) => {
  const [emailSubject, setEmailSubject] = useState(`Reminder: Your upcoming workshop - ${workshopTitle}`);
  const [emailMessage, setEmailMessage] = useState(
    `Hello,\n\nThis is a friendly reminder about your upcoming workshop:\n\n${workshopTitle}\nDate: ${workshopDate}\nTime: ${workshopTime}\n\nPlease make sure you have all the required materials ready. If you have any questions or need to make changes to your registration, please contact us as soon as possible.\n\nWe look forward to seeing you!\n\nBest regards,\nThe CraftBridge Team`
  );

  const handleSend = () => {
    onSend(emailSubject, emailMessage);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Send Reminder Email</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="px-6 py-4 overflow-y-auto">
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">
              You are about to send an email to <span className="font-semibold">{recipientCount}</span> confirmed participant{recipientCount !== 1 ? 's' : ''}.
            </p>
          </div>
          
          <div className="mb-4">
            <label htmlFor="emailSubject" className="block text-sm font-medium text-gray-700 mb-1">
              Email Subject
            </label>
            <input
              type="text"
              id="emailSubject"
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="emailMessage" className="block text-sm font-medium text-gray-700 mb-1">
              Email Message
            </label>
            <textarea
              id="emailMessage"
              rows={12}
              value={emailMessage}
              onChange={(e) => setEmailMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm"
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition flex items-center"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WorkshopParticipants() {
  const router = useRouter();
  const { workshopId } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [workshop, setWorkshop] = useState<Workshop | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);
  const [showReminderModal, setShowReminderModal] = useState(false);
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
        status: 'confirmed'
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
        status: 'confirmed'
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
        status: 'waiting_list'
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
        status: 'confirmed'
      },
      {
        id: 'p5',
        firstName: 'David',
        lastName: 'Wilson',
        email: 'david.w@example.com',
        phone: '555-567-8901',
        registrationDate: '2023-07-20',
        experience: 'beginner',
        specialRequirements: '',
        status: 'cancelled'
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
        status: 'confirmed'
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
        status: 'confirmed'
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
        status: 'confirmed'
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

      // Get participants for this workshop
      const workshopParticipants = participantsData[workshopId] || [];
      setParticipants(workshopParticipants);
    }

    setIsLoading(false);
  }, [router, workshopId]);

  const handleStatusChange = (participantId: string, newStatus: string) => {
    setParticipants(prevParticipants => 
      prevParticipants.map(participant => 
        participant.id === participantId 
          ? { ...participant, status: newStatus } 
          : participant
      )
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredParticipants = participants.filter(participant => {
    const matchesSearch = 
      participant.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      filterStatus === 'all' || 
      participant.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const handleViewParticipant = (participant: Participant) => {
    setSelectedParticipant(participant);
  };

  const handleCloseModal = () => {
    setSelectedParticipant(null);
  };

  const handleSendReminder = (subject: string, message: string) => {
    // In a real app, this would send emails to all confirmed participants
    const confirmedParticipants = participants.filter(p => p.status === 'confirmed');
    alert(`Reminder email sent to ${confirmedParticipants.length} participants with subject: ${subject}`);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userType');
    router.push('/auth/login');
  };

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
            <h1 className="text-xl font-bold">Workshop Participants</h1>
            <p className="text-gray-600">{workshop.title} - {workshop.date}</p>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search participants..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-64"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <label htmlFor="statusFilter" className="text-sm font-medium text-gray-700">
                  Status:
                </label>
                <select
                  id="statusFilter"
                  className="border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="waiting_list">Waiting List</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
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
                        Registration Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Experience
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredParticipants.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                          No participants found
                        </td>
                      </tr>
                    ) : (
                      filteredParticipants.map((participant) => (
                        <tr key={participant.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-0">
                                <div className="text-sm font-medium text-gray-900">
                                  {participant.firstName} {participant.lastName}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{participant.email}</div>
                            <div className="text-sm text-gray-500">{participant.phone}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {participant.registrationDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                              ${participant.experience === 'beginner' ? 'bg-green-100 text-green-800' : 
                              participant.experience === 'intermediate' ? 'bg-blue-100 text-blue-800' : 
                              'bg-purple-100 text-purple-800'}`}>
                              {participant.experience.charAt(0).toUpperCase() + participant.experience.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                              ${participant.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                              participant.status === 'waiting_list' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-red-100 text-red-800'}`}>
                              {participant.status === 'confirmed' ? 'Confirmed' : 
                               participant.status === 'waiting_list' ? 'Waiting List' : 'Cancelled'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-3">
                              <button 
                                className="text-indigo-600 hover:text-indigo-900"
                                onClick={() => handleViewParticipant(participant)}
                              >
                                View
                              </button>
                              
                              <select
                                value={participant.status}
                                onChange={(e) => handleStatusChange(participant.id, e.target.value)}
                                className="text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                              >
                                <option value="confirmed">Confirm</option>
                                <option value="waiting_list">Move to Waiting List</option>
                                <option value="cancelled">Cancel</option>
                              </select>
                              
                              <button 
                                className="text-red-600 hover:text-red-900"
                                onClick={() => {
                                  if (window.confirm(`Are you sure you want to remove ${participant.firstName} ${participant.lastName}?`)) {
                                    setParticipants(prev => prev.filter(p => p.id !== participant.id));
                                  }
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Workshop Summary</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Registration Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Registrations:</span>
                    <span className="font-medium">{participants.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Confirmed:</span>
                    <span className="font-medium">{participants.filter(p => p.status === 'confirmed').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Waiting List:</span>
                    <span className="font-medium">{participants.filter(p => p.status === 'waiting_list').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cancelled:</span>
                    <span className="font-medium">{participants.filter(p => p.status === 'cancelled').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Available Spots:</span>
                    <span className="font-medium">{workshop.capacity - participants.filter(p => p.status === 'confirmed').length}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Experience Levels</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Beginner:</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className="bg-green-500 h-2.5 rounded-full" 
                          style={{ width: `${(participants.filter(p => p.experience === 'beginner').length / participants.length) * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-medium">{participants.filter(p => p.experience === 'beginner').length}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Intermediate:</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className="bg-blue-500 h-2.5 rounded-full" 
                          style={{ width: `${(participants.filter(p => p.experience === 'intermediate').length / participants.length) * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-medium">{participants.filter(p => p.experience === 'intermediate').length}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Advanced:</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className="bg-purple-500 h-2.5 rounded-full" 
                          style={{ width: `${(participants.filter(p => p.experience === 'advanced').length / participants.length) * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-medium">{participants.filter(p => p.experience === 'advanced').length}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Actions</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => setShowReminderModal(true)}
                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                  >
                    Send Reminder to Participants
                  </button>
                  <button 
                    onClick={() => alert('Downloading participant list...')}
                    className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
                  >
                    Download Participant List
                  </button>
                  <button 
                    onClick={() => {
                      if (window.confirm('Are you sure you want to cancel this workshop?')) {
                        alert('Workshop cancelled');
                        router.push('/workshop/host/dashboard');
                      }
                    }}
                    className="w-full px-4 py-2 border border-red-300 text-red-700 rounded-md hover:bg-red-50 transition"
                  >
                    Cancel Workshop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {participants.some(p => p.specialRequirements) && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 bg-gray-50 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Special Requirements</h2>
            </div>
            <div className="p-6">
              <ul className="divide-y divide-gray-200">
                {participants
                  .filter(p => p.specialRequirements)
                  .map(participant => (
                    <li key={participant.id} className="py-4">
                      <div className="flex space-x-3">
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium">{participant.firstName} {participant.lastName}</h3>
                            <p className="text-sm text-gray-500">{participant.status === 'confirmed' ? 'Confirmed' : 
                               participant.status === 'waiting_list' ? 'Waiting List' : 'Cancelled'}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-600">{participant.specialRequirements}</p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}

        {showReminderModal && workshop && (
          <ReminderEmailModal
            workshopTitle={workshop.title}
            workshopDate={workshop.date}
            workshopTime={workshop.time}
            onClose={() => setShowReminderModal(false)}
            onSend={handleSendReminder}
            recipientCount={participants.filter(p => p.status === 'confirmed').length}
          />
        )}

        {selectedParticipant && (
          <ParticipantDetailsModal
            participant={selectedParticipant}
            onClose={handleCloseModal}
            workshopTitle={workshop?.title || ""}
          />
        )}
      </div>
    </div>
  );
} 