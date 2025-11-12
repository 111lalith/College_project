import React, { useState } from 'react';
import { Eye, EyeOff, RefreshCw, School } from 'lucide-react';

export default function HODLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState('HDPX7');
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    captchaInput: ''
  });

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
    setFormData({ ...formData, captchaInput: '' });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-16 px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white bg-opacity-20 rounded-full p-6">
            <School className="w-12 h-12 text-white" strokeWidth={2} />
          </div>
        </div>
        <h1 className="text-2xl font-semibold mb-2">HOD Access</h1>
        <p className="text-green-100 text-sm">Department Management Login</p>
      </div>

      {/* Form Section */}
      <div className="flex-1 px-8 py-8">
        <div className="max-w-md mx-auto">
          {/* Show Demo Credentials Button */}
          <button className="w-full bg-green-50 text-teal-600 py-4 px-6 rounded-lg mb-6 flex items-center justify-center gap-2 hover:bg-green-100 transition-colors">
            <span className="text-teal-600 font-medium">ⓘ</span>
            <span className="font-medium">Show Demo Credentials</span>
          </button>

          <div className="space-y-6">
            {/* User ID */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                User ID
              </label>
              <input
                type="text"
                placeholder="Enter your user ID"
                value={formData.userId}
                onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Security Verification */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Security Verification
              </label>
              <div className="flex gap-3 mb-3">
                <div className="flex-1 bg-green-50 border-2 border-green-100 rounded-lg px-4 py-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-700 tracking-widest">
                    {captcha}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="bg-white border-2 border-gray-200 rounded-lg px-4 hover:bg-gray-50 transition-colors"
                >
                  <RefreshCw size={20} className="text-gray-600" />
                </button>
              </div>
              <input
                type="text"
                placeholder="Enter the code above"
                value={formData.captchaInput}
                onChange={(e) => setFormData({ ...formData, captchaInput: e.target.value })}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Sign In Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all shadow-lg"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}