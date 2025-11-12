import React, { useState } from 'react';
import { Home, Users, Calendar, Bell, MessageSquare, BookOpen, BarChart3, Clock, MapPin, Mail, Plus, Edit2, Eye } from 'lucide-react';

export default function TimetableManagement() {
  const [activeTab, setActiveTab] = useState('timetable');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'faculty', label: 'Faculty', icon: Users },
    { id: 'timetable', label: 'Timetable', icon: Calendar },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'classes', label: 'Classes', icon: BookOpen },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ];

  const timetableData = [
    { time: '7:30-8:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '' },
    {
      time: '8:30-9:30',
      monday: { subject: 'Adv Java', teacher: 'Isha Sen', room: 'BCA-3' },
      tuesday: { subject: 'Soft Lang', teacher: 'Priya', room: 'BCA-2' },
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: ''
    },
    {
      time: '9:30-10:30',
      monday: { subject: 'Adv Java', teacher: 'Programming', room: 'BCA-3' },
      tuesday: '',
      wednesday: { subject: 'Adv Web', teacher: 'Dinesh', room: 'BCA-4' },
      thursday: '',
      friday: '',
      saturday: ''
    },
    {
      time: '10:30-11:30',
      monday: { subject: 'C.Math', teacher: 'Datta Prakash', room: 'BCA-1' },
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: ''
    },
    {
      time: '11:00-12:00',
      monday: { subject: 'Adv Build', teacher: 'Linda Pye', room: 'BCA-2' },
      tuesday: { subject: 'Soft Engg', teacher: 'Programming', room: 'BCA-1' },
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: ''
    }
  ];

  const personalInfo = [
    { icon: Mail, label: 'HOD Batch - VCS', color: 'text-red-500' },
    { icon: Mail, label: 'Work - rajesh.kumar@college.edu', color: 'text-blue-500' },
    { icon: null, label: 'Secondary - +91 987-654-3210', color: 'text-green-500' },
    { icon: MapPin, label: 'Office - BCA Block, Room 301', color: 'text-orange-500' }
  ];

  const education = [
    'Ph.D. in Computer Science - IIT Delhi (2005)',
    'M.Tech in Software Engineering - IIT Bombay (2001)',
    'B.Tech in Computer Science - Delhi University (1998)'
  ];

  const workingHours = [
    { day: 'Monday', time: '7:30 AM - 2:30 PM' },
    { day: 'Tuesday', time: '9:30 AM - 4:00 PM' },
    { day: 'Wednesday', time: '7:30 AM - 2:30 PM' }
  ];

  const facultySummary = [
    { name: 'Prof. Priya Sharma', load: '24/h' },
    { name: 'Dr. Amit Verma', load: '20/h' },
    { name: 'Prof. Neha Gupta', load: '24/h' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex-shrink-0">
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
          <div className="space-y-2">
            {personalInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-2">
                {info.icon && <info.icon size={14} className={`mt-0.5 ${info.color}`} />}
                <span className="text-xs text-gray-600 break-words">{info.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="p-4 border-b">
          <h4 className="font-semibold text-gray-700 mb-2 text-sm">📚 Education</h4>
          <div className="space-y-1 text-xs text-gray-600">
            {education.map((edu, idx) => (
              <p key={idx}>• {edu}</p>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="p-4 border-b">
          <h4 className="font-semibold text-gray-700 mb-2 text-sm">💼 Experience & Specialization</h4>
          <p className="text-xs text-gray-600 mb-1">Experience: 20+ Years</p>
          <p className="text-xs text-gray-600">Specialization: Software Engineering, AI & ML</p>
        </div>

        {/* Working Hours */}
        <div className="p-4">
          <h4 className="font-semibold text-gray-700 mb-2 text-sm flex items-center gap-2">
            <Clock size={14} />
            Working Hours
          </h4>
          <div className="space-y-1">
            {workingHours.map((wh, idx) => (
              <div key={idx} className="flex justify-between text-xs">
                <span className="text-gray-600">{wh.day}</span>
                <span className="text-green-600">{wh.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm px-6 py-3">
          <div className="flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                  activeTab === item.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timetable Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Title Bar */}
          <div className="bg-white rounded-lg shadow p-4 mb-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-gray-700" />
              <h2 className="text-lg font-semibold text-gray-800">Department Timetable Management</h2>
            </div>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-800">
              Edit Timetable
            </button>
          </div>

          {/* Timetable Info */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <p className="text-sm text-gray-600">
              Showing Classes: <span className="font-semibold">BCA 1st</span> | 
              <span className="font-semibold"> BCA 2nd</span> | 
              <span className="font-semibold"> BCA 3rd</span> | 
              Effective: <span className="font-semibold">Monday per weekly use only</span>
            </p>
          </div>

          {/* Timetable Grid */}
          <div className="bg-white rounded-lg shadow overflow-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 border-r">Time</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700 border-r">Monday</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700 border-r">Tuesday</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700 border-r">Wednesday</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700 border-r">Thursday</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700 border-r">Friday</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700">Saturday</th>
                </tr>
              </thead>
              <tbody>
                {timetableData.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-6 text-sm font-medium text-gray-800 border-r">{row.time}</td>
                    {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map((day) => (
                      <td key={day} className="px-4 py-6 text-center border-r">
                        {row[day] ? (
                          <div className="bg-yellow-50 rounded p-2 text-left">
                            <p className="text-sm font-semibold text-gray-800">{row[day].subject}</p>
                            <p className="text-xs text-gray-600">{row[day].teacher}</p>
                            <p className="text-xs text-blue-600">{row[day].room}</p>
                          </div>
                        ) : (
                          <span className="text-gray-300">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-6">
            {/* Faculty Load Summary */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Faculty Load Summary</h3>
              <div className="space-y-3">
                {facultySummary.map((faculty, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-gray-700">{faculty.name}</span>
                    <span className="text-sm font-semibold text-gray-800">{faculty.load}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-left">
                  <Plus size={18} className="text-gray-600" />
                  <span className="text-sm text-gray-700">Add New Slot</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-left">
                  <Edit2 size={18} className="text-gray-600" />
                  <span className="text-sm text-gray-700">Modify Existing</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 text-left">
                  <Eye size={18} className="text-gray-600" />
                  <span className="text-sm text-gray-700">View Full Schedule</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}