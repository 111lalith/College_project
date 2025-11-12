import React, { useState } from 'react';
import { Home, Users, Calendar, Bell, MessageSquare, BookOpen, BarChart3, Settings, LogOut, ChevronLeft, Mail, Phone, MapPin, Briefcase, Clock, Quote } from 'lucide-react';

export default function HODDashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'faculty', label: 'Faculty', icon: Users },
    { id: 'timetable', label: 'Timetable', icon: Calendar },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'classes', label: 'Classes', icon: BookOpen },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ];

  const departmentStats = [
    { label: 'Total Students:', value: '180', color: 'text-blue-600' },
    { label: 'Faculty Members:', value: '4', color: 'text-gray-700' },
    { label: 'Active Courses:', value: '8', color: 'text-gray-700' },
    { label: 'Pending Leave Requests:', value: '3', color: 'text-orange-500' },
  ];

  const todaySchedule = [
    { time: '9:00 AM', title: 'Data Structures Lecture', location: 'BCA-101', students: '45 students' },
    { time: '11:00 AM', title: 'Faculty Meeting', location: 'Conference Hall', students: null },
    { time: '2:00 PM', title: 'Student Counseling', location: 'Office', students: null },
    { time: '4:00 PM', title: 'Research Review', location: 'Lab-2', students: null },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        {/* Back Button */}
        <button className="flex items-center gap-2 p-4 text-gray-700 hover:bg-gray-50 w-full">
          <ChevronLeft size={20} />
          <span className="text-sm">Back</span>
        </button>

        {/* Profile Section */}
        <div className="p-6 text-center border-b">
          <div className="relative inline-block">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />
            <div className="absolute bottom-2 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <h3 className="font-semibold text-gray-800">Dr. Rajesh Kumar</h3>
          <p className="text-sm text-gray-600">Head of Department - BCA</p>
          <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-xs rounded-full text-gray-700">Active</span>
        </div>

        {/* Personal Information */}
        <div className="p-6 border-b">
          <h4 className="font-semibold text-gray-700 mb-4">Personal Information</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2 text-gray-600">
              <Calendar size={16} className="mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">DOB:</span> 15th March, 1975
              </div>
            </div>
            <div className="flex items-start gap-2 text-gray-600">
              <Mail size={16} className="mt-1 flex-shrink-0" />
              <div className="break-all">
                <span className="font-medium">Email:</span> rajesh.kumar@college.edu
              </div>
            </div>
            <div className="flex items-start gap-2 text-gray-600">
              <Phone size={16} className="mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Phone:</span> +91 98765 43210
              </div>
            </div>
            <div className="flex items-start gap-2 text-gray-600">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium">Office:</span> BCA Block, Room 301
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="p-6 border-b">
          <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <Briefcase size={16} />
            Education
          </h4>
          <div className="space-y-2 text-xs text-gray-600">
            <p>• Ph.D. in Computer Science - IIT Delhi (2005)</p>
            <p>• M.Tech in Software Engineering - IIT Bombay (2001)</p>
            <p>• B.Tech in Computer Science - Delhi University (1998)</p>
          </div>
        </div>

        {/* Experience */}
        <div className="p-6 border-b">
          <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <Briefcase size={16} />
            Experience & Specialization
          </h4>
          <p className="text-xs text-gray-600 mb-2">Experience: 20+ Years</p>
          <p className="text-xs text-gray-600">Specialization: Software Engineering, AI & ML</p>
        </div>

        {/* Working Hours */}
        <div className="p-6">
          <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <Clock size={16} />
            Working Hours
          </h4>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Monday</span>
            <span className="text-green-600">7:30 AM - 2:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white shadow-sm px-8 py-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-semibold text-gray-800">HOD Dashboard</h1>
              <p className="text-sm text-blue-600">BCA Department Management</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                <Settings size={20} />
                <span className="text-sm">Settings</span>
              </button>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 relative">
                <Bell size={20} />
                <span className="text-sm">AI Assistant</span>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">1</span>
              </button>
              <button className="flex items-center gap-2 text-red-600 hover:text-red-700">
                <LogOut size={20} />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white shadow-sm px-8 py-3 mt-2">
          <div className="flex gap-2">
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
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Welcome Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome back, Dr. Kumar!</h2>
            <p className="text-gray-600">Leading the BCA department with excellence and innovation.</p>
          </div>

          {/* Quote of the Day */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
            <div className="flex gap-2 items-start">
              <Quote size={20} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Quote of the Day</h3>
                <p className="text-gray-600 italic text-sm">Innovation in education starts with a department that embraces change.</p>
              </div>
            </div>
          </div>

          {/* Date Display */}
          <div className="flex justify-end mb-6">
            <div className="text-right">
              <div className="text-5xl font-bold text-green-600">26</div>
              <div className="text-sm text-gray-600">Friday</div>
              <div className="text-sm text-gray-500">September 2025</div>
            </div>
          </div>

          {/* Stats and Schedule Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Department Stats */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Department Stats</h3>
              <div className="space-y-4">
                {departmentStats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">{stat.label}</span>
                    <span className={`font-bold text-lg ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Today's Schedule</h3>
              <div className="space-y-4">
                {todaySchedule.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-blue-600 font-semibold text-sm w-20 flex-shrink-0">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                      <p className="text-gray-600 text-xs">{item.location}</p>
                      {item.students && (
                        <p className="text-gray-500 text-xs mt-1">{item.students}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}