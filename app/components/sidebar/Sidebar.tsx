import React from 'react';
import FollowCard from '../FollowCard/FollowCard';

import { Home, Search, Bell, Mail, Clipboard, Bookmark, Users, Star, Briefcase, User, MoreHorizontal } from 'lucide-react';

const sidebarItems = [
  { label: 'Home', icon: <Home size={26} /> },
  { label: 'Explore', icon: <Search size={26} /> },
  { label: 'Notifications', icon: <Bell size={26} /> },
  { label: 'Messages', icon: <Mail size={26} /> },
  // { label: 'Grok', icon: <Clipboard size={26} /> },
  { label: 'Bookmarks', icon: <Bookmark size={26} /> },
  { label: 'Communities', icon: <Users size={26} /> },
  { label: 'Premium', icon: <Star size={26} /> },
  // { label: 'Business', icon: <Briefcase size={26} /> },
  { label: 'Profile', icon: <User size={26} /> },
  { label: 'More', icon: <MoreHorizontal size={26} /> },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-start h-16 p-4">
        <span className="text-3xl font-bold">X</span>
      </div>

      <div className="overflow-y-auto">
        {sidebarItems.map((item, index) => (
          <div key={index} className="flex gap-3 p-4 hover:bg-gray-900 cursor-pointer">
            <span className="mr-2 text-lg font-semibold">{item.icon}</span>
            <span className='text-lg font-semibold tracking-wider'>{item.label}</span>
          </div>
        ))}
      </div>
      <button className="m-4 p-2 bg-blue-600 rounded-full">
        Post
      </button>
      <div className="p-4">
        <FollowCard />
      </div>
    </div>
  );
};

export default Sidebar;
