import React from "react";
import { useNavigate } from "react-router-dom";
import avatarUrl from "../assets/avatar.png";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();

  // ✅ Dummy Data (replace with API / context)

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-white shadow px-4 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          ← Back
        </button>
      </div>

      {/* Profile Card */}
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-md p-6">
        {/* Avatar + Name */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-100 mb-4">
            <img
              src={user?.image}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-xl font-bold text-gray-800">
            {user?.firstName} {user?.lastName}
          </h2>

          <p className="text-gray-500">{user?.email}</p>
        </div>

        {/* Divider */}
        <div className="border-t mb-6"></div>

        {/* Info Section */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Email</span>
            <span className="font-medium text-gray-800">{user?.email}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">First Name</span>
            <span className="font-medium text-gray-800">{user?.firstName}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Last Name</span>
            <span className="font-medium text-gray-800">{user?.lastName}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Gender</span>
            <span className="font-medium text-gray-800">{user?.gender}</span>
          </div>
        </div>

        {/* Edit Button */}
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
