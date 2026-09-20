import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="flex h-20 w-full shrink-0 items-center border-b border-gray-100 bg-white px-6">
      {/* SEARCH */}

      <div className="relative min-w-0 flex-1">
        <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400" />

        <input
          type="text"
          placeholder="Search for foods, nutrients, or recipes..."
          className="
            h-11
            w-full
            rounded-full
            border
            border-gray-200
            bg-gray-50
            pl-12
            pr-5
            text-sm
            outline-none
            placeholder:text-gray-400
            focus:border-green-400
            focus:ring-2
            focus:ring-green-100
          "
        />
      </div>

      {/* RIGHT SIDE */}

      <div className="ml-6 flex shrink-0 items-center gap-4">
        {/* Bell */}

        <button className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-green-50">
          <FaBell className="text-lg text-gray-600" />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}

        <button className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-gray-50">
          <RiAccountCircleLine className="text-4xl text-green-600" />

          <div className="hidden text-left md:block">
            <p className="whitespace-nowrap text-sm font-semibold text-gray-800">
              Hi, Jahnavi
            </p>

            <p className="whitespace-nowrap text-xs text-gray-400">
              Welcome back
            </p>
          </div>

          <IoChevronDown className="hidden text-sm text-gray-500 md:block" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
