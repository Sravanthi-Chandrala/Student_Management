import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
      {/* Logo Section */}
      <div className="mb-8">
        <img src="/Vector.png" alt="Quyl Logo" className="h-10" />
      </div>


      {/* Navigation Section */}
      <nav className="space-y-3 flex-1">
        <a
          href="#"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-purple-100 rounded-lg transition-colors"
        >
          <span className="mr-3 text-lg">📊</span>
          <span className="text-sm font-medium">Dashboard</span>
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-purple-100 rounded-lg bg-purple-50 transition-colors"
        >
          <span className="mr-3 text-lg">👥</span>
          <span className="text-sm font-medium">Students</span>
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-purple-100 rounded-lg transition-colors"
        >
          <span className="mr-3 text-lg">📚</span>
          <span className="text-sm font-medium">Chapters</span>
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-purple-100 rounded-lg transition-colors"
        >
          <span className="mr-3 text-lg">❓</span>
          <span className="text-sm font-medium">Help</span>
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-purple-100 rounded-lg transition-colors"
        >
          <span className="mr-3 text-lg">📈</span>
          <span className="text-sm font-medium">Reports</span>
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-3 text-gray-600 hover:bg-purple-100 rounded-lg transition-colors"
        >
          <span className="mr-3 text-lg">⚙️</span>
          <span className="text-sm font-medium">Settings</span>
        </a>
      </nav>

      {/* Footer Section */}
      <div className="mt-6">
        <a
          href="#logout"
          className="flex items-center px-4 py-3 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
        >
          <span className="mr-3 text-lg">🚪</span>
          <span className="text-sm font-medium">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

