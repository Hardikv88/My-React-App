import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { GLOBAL_TEXT } from "../constants/Strings";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 800 },
  { name: "Mar", users: 650 },
  { name: "Apr", users: 1200 },
  { name: "May", users: 900 },
  { name: "Jun", users: 1500 },
];

 // Debug log to verify data structure

function Dashboard() {
  return (
    <div className="min-h-screen p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        {GLOBAL_TEXT.DASHBOARD}
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Total Users</p>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            2,450
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Active Users</p>
          <h2 className="text-3xl font-bold text-green-500">1,800</h2>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Pending Users</p>
          <h2 className="text-3xl font-bold text-yellow-500">650</h2>
        </div>
      </div>

      {/* Graph */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow mb-6">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
          {GLOBAL_TEXT.USER_GROWTH}
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Line type="monotone" dataKey="users" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Users */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
          {GLOBAL_TEXT.RECENT_USERS}
        </h2>

        <div className="space-y-4 dark:text-white">
          <div className="flex justify-between border-b pb-2">
            <span>John Doe</span>
            <span className="text-green-500">Active</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>Jane Smith</span>
            <span className="text-yellow-500">Pending</span>
          </div>

          <div className="flex justify-between">
            <span>Alex Johnson</span>
            <span className="text-red-500">Inactive</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
