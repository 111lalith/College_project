import React, { useState } from 'react';
import { Home, Users, Calendar, Bell, MessageSquare, BookOpen, BarChart3, Settings, LogOut, ChevronLeft, Mail, Phone, MapPin, Briefcase, Clock, Eye, Edit, X, Check } from 'lucide-react';

export default function FacultyManagement() {
  const [activeTab, setActiveTab] = useState('faculty');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'faculty', label: 'Faculty', icon: Users },
    { id: 'timetable', label: 'Timetable', icon: Calendar },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'classes', label: 'Classes', icon: BookOpen },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ];

  const facultyData = [
    {
      name: 'Prof. Priya Sharma',
      qualification: 'M.Tech, CSE',
      experience: '8 Years',
      subject: 'Programming in C',
      classes: ['BCA-1 (9:30-10:30)', 'BCA-2 (11:00-12:00)', 'BCA-3 (1:00-2:00)'],
      dailyHours: '3h',
      limit: 'Within Limit',
      attendance: '95%',
      leaveRequests: '1 pending',
      status: 'pending',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Amit Verma',
      qualification: 'Ph.D, Computer Science',
      experience: '12 Years',
      subject: 'Data Structures',
      classes: ['BCA-1 (10:30-11:30)', 'BCA-2 (12:00-1:00)', 'BCA-3 (2:00-3:30)'],
      dailyHours: '2.5h',
      limit: 'Within Limit',
      attendance: '98%',
      leaveRequests: 'None',
      status: 'none',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Prof. Neha Gupta',
      qualification: 'M.Tech, IT',
      experience: '9 Years',
      subject: 'Database Management',
      classes: ['BCA-2 (8:00-9:00)', 'BCA-3 (8:30-10:30)', 'BCA-1 (12:30-1:30)', 'BCA-2 (2:00-3:30)'],
      dailyHours: '4h',
      limit: 'Within Limit',
      attendance: '92%',
      leaveRequests: '2 pending',
      status: 'pending',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    {
      name: 'Prof. Rohit Singh',
      qualification: 'M.Sc Computer Science',
      experience: '5 Years',
      subject: 'Web Development',
      classes: ['BCA-1 (8:30-9:30)', 'BCA-3 (11:00-12:00)', 'BCA-2 (1:30-3:30)'],
      dailyHours: '3h',
      limit: 'Within Limit',
      attendance: '90%',
      leaveRequests: 'None',
      status: 'none',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-56 bg-white shadow-lg flex-shrink-0">
        {/* Back Button */}
        <button className="flex items-center gap-2 p-4 text-gray-700 hover:bg-gray-50 w-full">
          <ChevronLeft size={18} />
          <span className="text-sm">Back</span>
        </button>

        {/* Profile Section */}
        <div className="p-6 text-center border-b">
          <div className="relative inline-block">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
              alt="Profile"
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <div className="absolute bottom-2 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <h3 className="font-semibold text-gray-800 text-sm">Dr. Rajesh Kumar</h3>
          <p className="text-xs text-gray-600">Head of Department - BCA</p>
          <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-xs rounded-full text-gray-700">Active</span>
        </div>

        {/* Personal Information */}
        <div className="p-4 border-b">
          <h4 className="font-semibold text-gray-700 mb-3 text-sm">Personal Information</h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={14} />
              <span><span className="font-medium">DOB:</span> 15th March, 1975</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={14} />
              <span className="break-all"><span className="font-medium">Email:</span> rajesh.kumar@college.edu</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={14} />
              <span><span className="font-medium">Phone:</span> +91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={14} />
              <span><span className="font-medium">Office:</span> BCA Block, Room 301</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="p-4 border-b">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2 text-sm">
            <Briefcase size={14} />
            Education
          </h4>
          <div className="space-y-1 text-xs text-gray-600">
            <p>• Ph.D. in Computer Science - IIT Delhi (2005)</p>
            <p>• M.Tech in Software Engineering - IIT Bombay (2001)</p>
            <p>• B.Tech in Computer Science - Delhi University (1998)</p>
          </div>
        </div>

        {/* Experience */}
        <div className="p-4 border-b">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2 text-sm">
            <Briefcase size={14} />
            Experience & Specialization
          </h4>
          <p className="text-xs text-gray-600 mb-1">Experience: 20+ Years</p>
          <p className="text-xs text-gray-600">Specialization: Software Engineering, AI & ML</p>
        </div>

        {/* Working Hours */}
        <div className="p-4">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2 text-sm">
            <Clock size={14} />
            Working Hours
          </h4>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Monday</span>
            <span className="text-green-600">7:30 AM - 2:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm px-6 py-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-lg font-semibold text-gray-800">HOD Dashboard</h1>
              <p className="text-xs text-gray-500">BCA Department Management</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                <Settings size={18} />
                <span className="text-sm">Settings</span>
              </button>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 relative">
                <Bell size={18} />
                <span className="text-sm">AI Assistant</span>
                <span className="absolute -top-1 left-3 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">1</span>
              </button>
              <button className="flex items-center gap-2 text-red-600 hover:text-red-700">
                <LogOut size={18} />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white shadow-sm px-6 py-2">
          <div className="flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                  activeTab === item.id
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Faculty Management Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="flex items-center gap-2 mb-6">
            <Users size={20} className="text-gray-700" />
            <h2 className="text-xl font-semibold text-gray-800">Faculty Management</h2>
          </div>

          {/* Faculty Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-700">Faculty</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-700">Subject</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-700">Today's Classes</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-700">Daily Hours</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-700">Attendance</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-700">Leave Requests</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {facultyData.map((faculty, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={faculty.image}
                          alt={faculty.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{faculty.name}</p>
                          <p className="text-xs text-gray-600">{faculty.qualification}</p>
                          <p className="text-xs text-gray-500">{faculty.experience}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-gray-700">{faculty.subject}</span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-1">
                        {faculty.classes.map((cls, idx) => (
                          <div key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                            {cls}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{faculty.dailyHours}</p>
                        <p className="text-xs text-gray-600">{faculty.limit}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm font-semibold text-gray-800">{faculty.attendance}</span>
                    </td>
                    <td className="px-4 py-4">
                      {faculty.status === 'pending' ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-700">{faculty.leaveRequests}</span>
                          <Check size={16} className="text-green-600 cursor-pointer" />
                          <X size={16} className="text-red-600 cursor-pointer" />
                        </div>
                      ) : (
                        <span className="text-sm text-gray-600">{faculty.leaveRequests}</span>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Eye size={16} className="text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Edit size={16} className="text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}