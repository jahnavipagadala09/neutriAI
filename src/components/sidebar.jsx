import {
  IoHomeOutline,
  IoScanOutline,
  IoBarChartOutline,
  IoChatbubbleOutline,
  IoSettingsOutline,
  IoDiamondOutline,
} from "react-icons/io5";

import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: IoHomeOutline,
    path: "/dashboard",
  },
  {
    name: "Food Scanner",
    icon: IoScanOutline,
    path: "/scan-food",
  },
  {
    name: "Track Progress",
    icon: IoBarChartOutline,
    path: "/progress",
  },
  {
    name: "My Nutritionist",
    icon: IoChatbubbleOutline,
    path: "/Mynutrition",
  },
  {
    name: "Settings",
    icon: IoSettingsOutline,
    path: "/settings",
  },
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-gray-100 bg-white">
      {/* ================= LOGO ================= */}
      <div className="flex shrink-0 items-center gap-3 px-7 py-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
          <span className="text-3xl">🌿</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Nutri<span className="text-green-600">AI</span>
          </h1>

          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-400">
            Eat Smart
          </p>
        </div>
      </div>

      {/* ================= MENU ================= */}

      <nav className="flex-1 space-y-2 px-0">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`group mx-0 flex items-center gap-5 rounded-r-2xl px-6 py-4 transition-all duration-200 ${
                isActive
                  ? "bg-green-100 font-semibold text-green-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-green-700"
              }`}
            >
              <Icon
                className={`text-2xl ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-500 group-hover:text-green-600"
                }`}
              />

              <span className="text-base">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* ================= PREMIUM CARD ================= */}

      <div className="shrink-0 p-5">
        <div className="rounded-3xl bg-green-50 p-5">
          {/* Premium heading */}

          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100">
              <IoDiamondOutline className="text-xl text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">Go Premium</h3>

              <p className="text-xs text-gray-500">Unlock more features</p>
            </div>
          </div>

          {/* Description */}

          <p className="text-sm leading-6 text-gray-600">
            Get personalized meal plans, advanced insights and more.
          </p>

          {/* Button */}

          <button className="mt-5 w-full rounded-xl bg-green-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-700">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
