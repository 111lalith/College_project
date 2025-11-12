import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function RoleSelection() {
  const roles = [
    {
      id: 'principal',
      title: 'PRINCIPAL',
      subtitle: 'Administration & User Information',
      gradient: 'from-purple-400 via-pink-400 to-pink-400',
      icon: 'P'
    },
    {
      id: 'hod',
      title: 'HOD',
      subtitle: 'Head of Department & Coordinator',
      gradient: 'from-yellow-400 via-orange-400 to-pink-400',
      icon: 'HOD'
    },
    {
      id: 'faculty',
      title: 'FACULTY',
      subtitle: 'Teaching Staff & Mentors',
      gradient: 'from-green-400 via-purple-400 to-purple-400',
      icon: 'F'
    },
    {
      id: 'student',
      title: 'STUDENT',
      subtitle: 'Learners & Campus Members',
      gradient: 'from-pink-400 via-pink-500 to-purple-400',
      icon: 'S'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            Select Your Role
          </h1>
          <p className="text-sm text-blue-500">
            Please choose your signup role to proceed
          </p>
        </div>

        <div className="space-y-4">
          {roles.map((role) => (
            <button
              key={role.id}
              className={`w-full bg-gradient-to-r ${role.gradient} rounded-2xl p-6 flex items-center justify-between shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
            >
              <div className="text-left">
                <h2 className="text-white font-bold text-lg mb-1">
                  {role.title}
                </h2>
                <p className="text-white text-opacity-90 text-sm">
                  {role.subtitle}
                </p>
              </div>
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                <span className="text-gray-700 font-bold text-sm">
                  {role.icon}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}