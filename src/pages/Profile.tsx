import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ArrowLeft, Mail, User, UserCheck, UsersRound } from "lucide-react";
import { GLOBAL_TEXT } from "../constants/Strings";

export default function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const fields = [
    { label: "Email", value: user?.email, icon: Mail },
    { label: "First Name", value: user?.firstName, icon: User },
    { label: "Last Name", value: user?.lastName, icon: User },
    { label: "Gender", value: user?.gender, icon: UsersRound },
  ];

  return (
    <div className="min-h-full py-8 px-4">
      {/* Back */}
      <div className="mb-6 max-w-md mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="
            inline-flex items-center gap-1.5 text-sm font-medium
            text-gray-500 dark:text-gray-400
            hover:text-indigo-600 dark:hover:text-indigo-400
            transition-colors
          "
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* Profile Card */}
      <div className="max-w-md mx-auto bg-white dark:bg-[#1e2a3a] rounded-2xl border border-gray-200 dark:border-gray-700/50 shadow-sm overflow-hidden">
        {/* Cover gradient */}
        <div className="h-24 bg-gradient-to-r from-indigo-500 to-violet-600" />

        {/* Avatar + Name */}
        <div className="px-6 pb-6 -mt-12">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-[#1e2a3a] shadow-md mb-4 bg-gray-100">
            <img
              src={user?.image}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-0.5 flex items-center gap-1.5">
            <UserCheck size={13} className="text-indigo-400" />
            {user?.email}
          </p>

          {/* Divider */}
          <div className="border-t border-gray-100 dark:border-gray-700/50 my-5" />

          {/* Info rows */}
          <div className="space-y-3">
            {fields.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-gray-50 dark:bg-white/5"
              >
                <div className="flex items-center gap-2.5 text-gray-500 dark:text-gray-400 text-sm">
                  <Icon size={15} className="text-indigo-400 shrink-0" />
                  {label}
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 capitalize">
                  {value ?? "—"}
                </span>
              </div>
            ))}
          </div>

          {/* Edit Button */}
          <button className="
            mt-6 w-full py-2.5 rounded-xl text-sm font-semibold
            bg-indigo-600 hover:bg-indigo-700 text-white
            shadow-sm shadow-indigo-200 dark:shadow-indigo-900/30
            transition-all active:scale-[0.98]
          ">
            {GLOBAL_TEXT.EDIT_PROFILE}
          </button>
        </div>
      </div>
    </div>
  );
}
