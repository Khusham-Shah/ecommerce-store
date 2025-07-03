import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* 🔶 Logo */}
        <Link to="/" className="text-3xl font-extrabold text-yellow-400 tracking-widest">
          MyStore
        </Link>

        {/* 🔍 Search */}
        <div className="w-full md:w-[40%]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-4 pr-12 py-2 rounded-full border border-gray-600 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-400 text-lg">
              🔍
            </span>
          </div>
        </div>

        {/* 🔗 Links + Auth */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/products" className="hover:text-yellow-400 transition">Products</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>

          {/* Auth Buttons */}
          <Link to="/login">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition shadow-md">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition shadow-md">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
