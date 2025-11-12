import React from 'react';
import { User } from 'lucide-react';

export default function StudentProfile() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-6">
            <User className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-medium text-gray-800">Profile Information</h2>
          </div>
          
          <div className="flex gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gray-300 rounded overflow-hidden">
                <img 
                  src="https://via.placeholder.com/96" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">First Name</div>
                <div className="text-gray-800">Demo</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Last Name</div>
                <div className="text-gray-800">Student</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Roll Number</div>
                <div className="text-gray-800">STU2024001</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Student ID</div>
                <div className="text-gray-800">ID123456</div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-6">Personal Information</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-sm text-gray-600 mb-1">Date of Birth</div>
                <div className="text-gray-800">1/15/2002</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Age</div>
                <div className="text-gray-800">22 years</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-sm text-gray-600 mb-1">Gender</div>
                <div className="text-gray-800">Male</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Blood Group</div>
                <div className="text-gray-800">B+</div>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-600 mb-1">Category</div>
              <div className="text-gray-800">General</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-600 mb-1">Address</div>
              <div className="text-gray-800">Student Hostel, College Campus</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-6">Contact Information</h2>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-sm text-gray-600 mb-1">Email ID</div>
              <div className="text-gray-800">demo.student@college.edu</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Mobile Number</div>
              <div className="text-gray-800">+91 9876543210</div>
            </div>
          </div>
        </div>

        {/* Family Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-6">Family Information</h2>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-sm text-gray-600 mb-1">Father's Name</div>
              <div className="text-gray-800">Father Name</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Mother's Name</div>
              <div className="text-gray-800">Mother Name</div>
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-6">Academic Information</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-sm text-gray-600 mb-1">Course</div>
                <div className="text-gray-800">B.Tech Computer Science</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Current Semester</div>
                <div className="text-gray-800">5th Semester</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-sm text-gray-600 mb-1">Year of Joining</div>
                <div className="text-gray-800">2022</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Expected Year of Passing</div>
                <div className="text-gray-800">2026</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-sm text-gray-600 mb-1">Admission Date</div>
                <div className="text-gray-800">8/1/2022</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Current CGPA</div>
                <div className="text-gray-800 font-semibold">8.45</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}