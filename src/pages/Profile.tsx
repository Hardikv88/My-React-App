import React from 'react';
import avatarUrl from "../assets/avatar.png";
import { Link } from 'react-router-dom';

// 1. Define the Data Type
interface ProfileProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  experience: string;
  allocatedDesk: string;
  reportingTo: {
    name: string;
    avatarUrl: string;
  };
  avatarUrl: string;
}

export default function Profile(){
   const buttonClick = () => {
        console.log('Clikc');
    }

  return (
    <>
    <Link to={'/'}>
    <button  className="bg-blue-600 text-white mb-6 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
            Go to Back
          </button>
          </Link>
    
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-3xl p-6 shadow-sm font-sans text-gray-800">
            
          
      {/* Social Icons Header */}
      <div className="flex justify-end gap-3 mb-2">
        {/* <Linkedin size={20} className="text-blue-700 cursor-pointer" />
        <Instagram size={20} className="text-pink-600 cursor-pointer" />
        <Facebook size={20} className="text-blue-600 cursor-pointer" /> */}
      </div>
    
      {/* Avatar & Name Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 rounded-full border-4 border-teal-50 overflow-hidden mb-4">
          <img src={avatarUrl} alt={'name'} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight">{'name'}</h2>
        <p className="text-gray-500 font-medium">{'role'}</p>
      </div>

      <hr className="border-gray-100 mb-6" />

      {/* Contact & Info Section */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3 text-teal-600">
          {/* <Mail size={20} /> */}
          <a href={`mailto:${'email'}`} className="hover:underline">{'Email'}</a>
        </div>
        <div className="flex items-center gap-3 text-teal-600">
          {/* <Phone size={20} /> */}
          <span>{'Phone'}</span>
        </div>
        <div className="flex items-center gap-3 text-teal-600">
          {/* <Briefcase size={20} /> */}
          <span>{'Experience'}</span>
        </div>
        <div className="flex items-center gap-3 text-teal-600">
          {/* <Phone size={20} /> */}
          <span>{'Address'}</span>
        </div>
      </div>

     
      
      
    </div>
        </>
  );
};
function buttonClick() {
    throw new Error('Function not implemented.');
}

