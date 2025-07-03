// import React from "react";
// import { FaTasks, FaUserCircle } from "react-icons/fa";
// import { MdLogout, MdOutlinePendingActions, MdTaskAlt } from "react-icons/md";

// const Dashboard = () => {
//   const userEmail = localStorage.getItem("email") || "User";

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-gray-800 text-white flex items-center justify-center px-4">
//       <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-3xl">
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center gap-4">
//             <FaUserCircle className="text-5xl text-yellow-400" />
//             <div>
//               <h2 className="text-3xl font-bold">Hello 👋</h2>
//               <p className="text-yellow-300">{userEmail}</p>
//             </div>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all flex items-center gap-2"
//           >
//             <MdLogout />
//             Logout
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center shadow-md hover:scale-105 transition-transform">
//             <MdOutlinePendingActions className="text-yellow-400 text-4xl mb-2" />
//             <h3 className="font-bold text-xl">5 Tasks</h3>
//             <p className="text-sm text-gray-400">Pending</p>
//           </div>

//           <div className="bg-gray-800 p-6import React from "react";
// import { FaUserCircle, FaShoppingCart, FaBoxOpen, FaDollarSign } from "react-icons/fa";
// import { MdLogout } from "react-icons/md";

// const Dashboard = () => {
//   const userEmail = localStorage.getItem("email") || "User";

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-900 text-white flex items-center justify-center px-4">
//       <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-5xl">
//         <div className="flex items-center justify-between mb-10">
//           <div className="flex items-center gap-4">
//             <FaUserCircle className="text-5xl text-yellow-400" />
//             <div>
//               <h2 className="text-3xl font-bold">Welcome,</h2>
//               <p className="text-yellow-300">{userEmail}</p>
//             </div>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all flex items-center gap-2"
//           >
//             <MdLogout /> Logout
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center shadow-md hover:scale-105 transition-transform">
//             <FaShoppingCart className="text-pink-400 text-4xl mb-2" />
//             <h3 className="font-bold text-xl">120 Orders</h3>
//             <p className="text-sm text-gray-400">New Orders</p>
//           </div>

//           <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center shadow-md hover:scale-105 transition-transform">
//             <FaBoxOpen className="text-blue-400 text-4xl mb-2" />
//             <h3 className="font-bold text-xl">340 Products</h3>
//             <p className="text-sm text-gray-400">Total Listings</p>
//           </div>

//           <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center shadow-md hover:scale-105 transition-transform">
//             <FaDollarSign className="text-green-400 text-4xl mb-2" />
//             <h3 className="font-bold text-xl">$8,900</h3>
//             <p className="text-sm text-gray-400">Monthly Revenue</p>
//           </div>

//           <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center shadow-md hover:scale-105 transition-transform">
//             <FaUserCircle className="text-yellow-300 text-4xl mb-2" />
//             <h3 className="font-bold text-xl">980 Users</h3>
//             <p className="text-sm text-gray-400">Registered Customers</p>
//           </div>
//         </div>

//         <p className="mt-10 text-center text-gray-400 text-sm">
//           📊 E-commerce insights are up-to-date
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";
import { FaUserCircle, FaShoppingCart, FaBoxOpen, FaDollarSign } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Dashboard = () => {
  const userEmail = localStorage.getItem("email") || "User";

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to bg-yellow-300 text-white flex items-center justify-center px-4">
      <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-5xl">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <FaUserCircle className="text-5xl text-yellow-400" />
            <div>
              <h2 className="text-3xl font-bold">Welcome,</h2>
              <p className="text-yellow-300">{userEmail}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all flex items-center gap-2"
          >
            <MdLogout /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center shadow-md hover:scale-105 transition-transform">
            <FaShoppingCart className="text-pink-400 text-4xl mb-2" />
            <h3 className="font-bold text-xl">120 Orders</h3>
            <p className="text-sm text-gray-400">New Orders</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center shadow-md hover:scale-105 transition-transform">
            <FaBoxOpen className="text-blue-400 text-4xl mb-2" />
            <h3 className="font-bold text-xl">340 Products</h3>
            <p className="text-sm text-gray-400">Total Listings</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center shadow-md hover:scale-105 transition-transform">
            <FaDollarSign className="text-green-400 text-4xl mb-2" />
            <h3 className="font-bold text-xl">$8,900</h3>
            <p className="text-sm text-gray-400">Monthly Revenue</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-center shadow-md hover:scale-105 transition-transform">
            <FaUserCircle className="text-yellow-300 text-4xl mb-2" />
            <h3 className="font-bold text-xl">980 Users</h3>
            <p className="text-sm text-gray-400">Registered Customers</p>
          </div>
        </div>

        <p className="mt-10 text-center text-gray-400 text-sm">
          📊 E-commerce insights are up-to-date
        </p>
      </div>
    </div>
  );
};

export default Dashboard;