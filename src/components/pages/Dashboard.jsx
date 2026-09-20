import Navbar from "../navbar";
import Sidebar from "../Sidebar";

function Dashboard() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f7faf8]">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* NAVBAR */}
        <Navbar />

        {/* DASHBOARD CONTENT */}
        <main className="min-w-0 flex-1 overflow-y-auto bg-[#f7faf8] p-5 md:p-8">
          {/* ================= WELCOME SECTION ================= */}

          <section className="mb-6 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="mb-1 text-sm font-medium text-gray-500">
                Good evening,
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Welcome back, Jahnavi! 👋
              </h1>

              <p className="mt-2 text-gray-500">
                Stay consistent, eat better, feel great!
              </p>
            </div>

            {/* Healthy food banner */}

            <div className="flex min-h-27.5 items-center justify-between overflow-hidden rounded-3xl bg-linear-to-r from-green-50 to-emerald-100 px-6 py-5 xl:w-27.5">
              <div>
                <p className="text-lg font-bold text-green-900">
                  “Healthy food
                </p>

                <p className="text-lg font-bold text-green-900">
                  brighter mood!”
                </p>
              </div>

              <div className="text-5xl">🥗</div>
            </div>
          </section>

          {/* ================= NUTRITION SUMMARY ================= */}

          <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* Calories */}

            <div className="rounded-2xl border border-green-100 bg-linear-to-br from-green-50 to-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
                  🔥
                </div>

                <div className="relative flex h-16 w-16 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[6px] border-green-100" />

                  <div className="absolute inset-0 rounded-full border-[6px] border-green-500 border-b-transparent border-l-transparent rotate-45" />

                  <span className="text-xs font-bold">73%</span>
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">1,450</h3>

              <p className="text-sm font-medium text-gray-700">Calories</p>

              <p className="mt-1 text-xs text-gray-400">of 2,000 kcal</p>
            </div>

            {/* Protein */}

            <div className="rounded-2xl border border-orange-100 bg-linear-to-br from-orange-50 to-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-2xl">
                  🍴
                </div>

                <div className="relative flex h-16 w-16 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[6px] border-orange-100" />

                  <div className="absolute inset-0 rounded-full border-[6px] border-orange-400 border-b-transparent border-l-transparent rotate-45" />

                  <span className="text-xs font-bold">70%</span>
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">56g</h3>

              <p className="text-sm font-medium text-gray-700">Protein</p>

              <p className="mt-1 text-xs text-gray-400">of 80g</p>
            </div>

            {/* Carbs */}

            <div className="rounded-2xl border border-pink-100 bg-linear-to-br from-pink-50 to-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-2xl">
                  🌿
                </div>

                <div className="relative flex h-16 w-16 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[6px] border-pink-100" />

                  <div className="absolute inset-0 rounded-full border-[6px] border-pink-400 border-b-transparent border-l-transparent rotate-45" />

                  <span className="text-xs font-bold">48%</span>
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">32g</h3>

              <p className="text-sm font-medium text-gray-700">Carbs</p>

              <p className="mt-1 text-xs text-gray-400">of 250g</p>
            </div>

            {/* Fats */}

            <div className="rounded-2xl border border-purple-100 bg-linear-to-br from-purple-50 to-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-2xl">
                  💧
                </div>

                <div className="relative flex h-16 w-16 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[6px] border-purple-100" />

                  <div className="absolute inset-0 rounded-full border-[6px] border-purple-400 border-b-transparent border-l-transparent rotate-45" />

                  <span className="text-xs font-bold">29%</span>
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">20g</h3>

              <p className="text-sm font-medium text-gray-700">Fats</p>

              <p className="mt-1 text-xs text-gray-400">of 70g</p>
            </div>
          </section>

          {/* ================= CHART + MACROS + SUGGESTIONS ================= */}

          <section className="mb-6 grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(260px,1fr)_300px]">
            {/* Nutrition Overview */}

            <div className="min-w-0 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Nutrition Overview
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Your calorie intake this week
                  </p>
                </div>

                <button className="rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100">
                  This Week ↓
                </button>
              </div>

              {/* Simple chart */}

              <div className="mt-8 flex h-52 items-end justify-between gap-3 border-b border-gray-100 px-2">
                {[55, 65, 52, 68, 62, 76, 80].map((height, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 items-end justify-center"
                  >
                    <div
                      className="w-full max-w-10 rounded-t-xl bg-green-500 transition hover:bg-green-600"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between px-2 text-xs text-gray-400">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>

              <div className="mt-5 flex gap-5 text-xs text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                  Calories Consumed
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-gray-200" />
                  Daily Goal
                </span>
              </div>
            </div>

            {/* Macronutrient Distribution */}

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Macronutrient Distribution
              </h2>

              <div className="mt-8 flex items-center justify-center">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-[conic-gradient(#22c55e_0_45%,#f9a8d4_45%_70%,#fbbf24_70%_100%)]">
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white">
                    <span className="text-xl font-bold">1,450</span>

                    <span className="text-xs text-gray-400">kcal</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                    Carbs
                  </span>

                  <span className="font-semibold">45%</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-3 w-3 rounded-full bg-pink-400" />
                    Protein
                  </span>

                  <span className="font-semibold">25%</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    Fats
                  </span>

                  <span className="font-semibold">30%</span>
                </div>
              </div>
            </div>

            {/* Today's Suggestions */}

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  Today's Suggestions
                </h2>

                <button className="text-sm font-semibold text-green-600">
                  See All
                </button>
              </div>

              <div className="mt-5 space-y-4">
                {[
                  {
                    name: "Greek Yogurt Bowl",
                    info: "High Protein • 250 kcal",
                    emoji: "🥣",
                  },
                  {
                    name: "Avocado Toast",
                    info: "Healthy Fats • 320 kcal",
                    emoji: "🥑",
                  },
                  {
                    name: "Grilled Chicken Salad",
                    info: "Balanced • 350 kcal",
                    emoji: "🥗",
                  },
                ].map((food) => (
                  <div
                    key={food.name}
                    className="flex items-center gap-3 rounded-2xl p-2 transition hover:bg-gray-50"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl">
                      {food.emoji}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-gray-800">
                        {food.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-400">{food.info}</p>
                    </div>

                    <span className="text-xl text-gray-400">›</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= BOTTOM SECTION ================= */}

          <section className="grid min-w-0 gap-6 xl:grid-cols-3">
            {/* Recent Scans */}

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  Recent Scans
                </h2>

                <button className="text-sm font-semibold text-green-600">
                  See All
                </button>
              </div>

              <div className="mt-5 space-y-4">
                {[
                  ["🍎", "Apple", "95 kcal • 1 medium", "2 hours ago"],
                  ["🍌", "Banana", "105 kcal • 1 medium", "5 hours ago"],
                  ["🥣", "Oats", "150 kcal • 1 bowl", "1 day ago"],
                ].map(([emoji, name, info, time]) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-2xl">
                      {emoji}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-800">{name}</p>

                      <p className="text-xs text-gray-400">{info}</p>
                    </div>

                    <span className="whitespace-nowrap text-xs text-gray-400">
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Goals */}

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Your Goals</h2>

                <button className="text-sm font-semibold text-green-600">
                  Edit Goals
                </button>
              </div>

              <div className="mt-6 space-y-6">
                {[
                  ["🔥", "Calories", "1,450 / 2,000 kcal", 73],
                  ["🍴", "Protein", "56 / 80 g", 70],
                  ["💧", "Water", "1.5 / 2.5 L", 60],
                ].map(([icon, name, value, progress]) => (
                  <div key={name}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                        {icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between gap-3">
                          <span className="text-sm font-semibold">{name}</span>

                          <span className="text-xs text-gray-500">{value}</span>
                        </div>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                          <div
                            className="h-full rounded-full bg-green-500"
                            style={{
                              width: `${progress}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Motivation */}

            <div className="overflow-hidden rounded-3xl bg-linear-to-br from-green-50 to-emerald-100 p-6">
              <div className="text-5xl">🌿</div>

              <h2 className="mt-5 text-2xl font-bold text-green-950">
                Small steps,
                <br />
                big results!
              </h2>

              <p className="mt-3 text-sm leading-6 text-green-800">
                Keep going, you're doing great!
              </p>

              <button className="mt-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-green-700 shadow-sm">
                You got this! 💚
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
