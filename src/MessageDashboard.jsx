import React, { useState } from 'react';
import { Home, Users, Calendar, Bell, MessageSquare, BookOpen, BarChart3, Send, Mail, Phone, MapPin, Clock, Briefcase } from 'lucide-react';

export default function MessagesDashboard() {
  const [activeTab, setActiveTab] = useState('messages');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'faculty', label: 'Faculty', icon: Users },
    { id: 'timetable', label: 'Timetable', icon: Calendar },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'classes', label: 'Classes', icon: BookOpen },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ];

  const recentMessages = [
    {
      avatar: 'PPS',
      name: 'Prof. Priya Sharma',
      message: 'Need approval for new lab equipment',
      time: '2 min ago',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      verified: true
    },
    {
      avatar: 'DAV',
      name: 'Dr. Amit Verma',
      message: 'Student evaluation reports ready',
      time: '15 min ago',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      verified: true
    },
    {
      avatar: 'AO',
      name: 'Admin Office',
      message: 'Budget meeting scheduled for tomorrow',
      time: '1 hour ago',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      verified: false
    }
  ];

  const education = [
    'Ph.D. in Computer Science - IIT Delhi (2005)',
    'M.Tech in Software Engineering - IIT Bombay (2001)',
    'B.Tech in Computer Science - Delhi University (1998)'
  ];

  const workingHours = [
    { day: 'Monday', time: '7:30 AM - 2:30 PM' },
    { day: 'Tuesday', time: '7:30 AM - 2:30 PM' },
    { day: 'Wednesday', time: '7:30 AM - 2:30 PM' },
    { day: 'Thursday', time: '7:30 AM - 2:30 PM' }
  ];

  const handleSendMessage = () => {
    console.log({ recipient, subject, message });
    // Reset form
    setRecipient('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-56 bg-white shadow-lg flex-shrink-0">
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
            <div className="flex items-start gap-2">
              <Calendar size={14} className="mt-0.5 text-gray-600" />
              <span className="text-xs text-gray-600"><span className="font-medium">DOB:</span> 15th March, 1975</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail size={14} className="mt-0.5 text-gray-600" />
              <span className="text-xs text-gray-600 break-all"><span className="font-medium">Email:</span> rajesh.kumar@college.edu</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone size={14} className="mt-0.5 text-gray-600" />
              <span className="text-xs text-gray-600"><span className="font-medium">Phone:</span> +91 98765 43210</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 text-gray-600" />
              <span className="text-xs text-gray-600"><span className="font-medium">Office:</span> BCA Block, Room 301</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="p-4 border-b">
          <h4 className="font-semibold text-gray-700 mb-2 text-sm flex items-center gap-2">
            <Briefcase size={14} />
            Education
          </h4>
          <div className="space-y-1 text-xs text-gray-600">
            {education.map((edu, idx) => (
              <p key={idx}>• {edu}</p>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="p-4 border-b">
          <h4 className="font-semibold text-gray-700 mb-2 text-sm flex items-center gap-2">
            <Briefcase size={14} />
            Experience & Specialization
          </h4>
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
        {/* Navigation Tabs */}
        <div className="bg-white shadow-sm px-6 py-3">
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

        {/* Messages Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-2 gap-6">
            {/* Recent Messages */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare size={20} className="text-gray-700" />
                <h2 className="text-lg font-semibold text-gray-800">Recent Messages</h2>
              </div>
              <div className="space-y-3">
                {recentMessages.map((msg, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex gap-3">
                      <div className={`${msg.bgColor} ${msg.textColor} w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                        {msg.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-800 text-sm">{msg.name}</h4>
                          {msg.verified && (
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{msg.message}</p>
                        <p className="text-xs text-gray-400">{msg.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Send Message */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Send Message</h2>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="space-y-4">
                  {/* Recipient */}
                  <div>
                    <select
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                      <option value="">Select recipient</option>
                      <option value="prof-priya">Prof. Priya Sharma</option>
                      <option value="dr-amit">Dr. Amit Verma</option>
                      <option value="prof-neha">Prof. Neha Gupta</option>
                      <option value="admin">Admin Office</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={8}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    onClick={handleSendMessage}
                    className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}