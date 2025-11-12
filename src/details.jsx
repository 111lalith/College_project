import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, FileText, Trophy } from 'lucide-react';

export default function ExamDashboard() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingExams = [
    {
      subject: 'Data Structures and Algorithms',
      code: 'CS301',
      date: '12/15/2024',
      time: '10:00 AM - 1:00 PM',
      duration: '3 hours',
      room: 'Exam Hall A',
      type: 'Theory',
      maxMarks: 100,
      status: 'Scheduled'
    },
    {
      subject: 'Database Management Systems',
      code: 'CS302',
      date: '12/18/2024',
      time: '2:00 PM - 5:00 PM',
      duration: '3 hours',
      room: 'Exam Hall B',
      type: 'Theory',
      maxMarks: 100,
      status: 'Scheduled'
    },
    {
      subject: 'Operating Systems Lab',
      code: 'CS303L',
      date: '12/20/2024',
      time: '9:00 AM - 12:00 PM',
      duration: '3 hours',
      room: 'Computer Lab 1',
      type: 'Practical',
      maxMarks: 50,
      status: 'Scheduled'
    },
    {
      subject: 'Software Engineering',
      code: 'CS304',
      date: '12/22/2024',
      time: '10:00 AM - 1:00 PM',
      duration: '3 hours',
      room: 'Exam Hall C',
      type: 'Theory',
      maxMarks: 100,
      status: 'Scheduled'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {/* Overall Performance */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="flex justify-center mb-3">
              <Trophy className="w-10 h-10 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">86.0%</div>
            <div className="text-sm text-gray-500">Overall Performance</div>
          </div>

          {/* Exams Completed */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="flex justify-center mb-3">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">5</div>
            <div className="text-sm text-gray-500">Exams Completed</div>
          </div>

          {/* Upcoming Exams */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="flex justify-center mb-3">
              <Clock className="w-10 h-10 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">4</div>
            <div className="text-sm text-gray-500">Upcoming Exams</div>
          </div>

          {/* Total Marks */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="flex justify-center mb-3">
              <FileText className="w-10 h-10 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">387/450</div>
            <div className="text-sm text-gray-500">Total Marks</div>
          </div>
        </div>

        {/* Examination Details */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-6">
            <FileText className="w-5 h-5 text-gray-700 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">Examination Details</h2>
          </div>

          {/* Tabs */}
          <div className="flex border-b mb-6">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'upcoming'
                  ? 'text-gray-800 border-b-2 border-gray-800'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Clock className="w-4 h-4 mr-2" />
              Upcoming Exams (4)
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === 'past'
                  ? 'text-gray-800 border-b-2 border-gray-800'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Past Results (5)
            </button>
          </div>

          {/* Table */}
          {activeTab === 'upcoming' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Subject</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Code</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date & Time</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Duration</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Room</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Type</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Max Marks</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingExams.map((exam, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-sm text-gray-800">{exam.subject}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{exam.code}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          <div>
                            <div>{exam.date}</div>
                            <div className="text-xs text-gray-500">{exam.time}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{exam.duration}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{exam.room}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          exam.type === 'Theory' 
                            ? 'bg-gray-900 text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}>
                          {exam.type}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-800 font-medium">{exam.maxMarks}</td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200">
                          <Clock className="w-3 h-3 mr-1" />
                          {exam.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'past' && (
            <div className="text-center py-12 text-gray-500">
              Past results will be displayed here
            </div>
          )}
        </div>
      </div>
    </div>
  );
}