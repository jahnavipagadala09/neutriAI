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

        {/*  track progress CONTENT */}
        <main className="min-w-0 flex-1 overflow-y-auto bg-[#f7faf8] p-5 md:p-8">
          {/* ================= HEADER ================= */}

          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Track Progress
              </h1>

              <p className="mt-2 text-gray-500">
                See your nutrition journey and build a healthier you.
              </p>
            </div>

            {/* Date */}

            <button className="flex w-fit items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-600 shadow-sm">
              📅
              <span>Sep 14, 2026 - Sep 20, 2026</span>
              <span>⌄</span>
            </button>
          </div>

          {/* ================= TABS ================= */}

          <div className="mb-6 flex w-fit max-w-full overflow-x-auto rounded-full border border-gray-100 bg-white p-1 shadow-sm">
            <button className="rounded-full bg-green-100 px-6 py-2.5 text-sm font-semibold text-green-700">
              Overview
            </button>

            <button className="rounded-full px-6 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
              Nutrition
            </button>

            <button className="rounded-full px-6 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
              Activity
            </button>

            <button className="rounded-full px-6 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
              Weight
            </button>

            <button className="rounded-full px-6 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
              Goals
            </button>
          </div>

          {/* ================= SUMMARY CARDS ================= */}

          <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* Calories */}

            <div className="rounded-2xl border border-green-100 bg-green-50/50 p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                  🔥
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  ↑ 12%
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-gray-900">1,450</h2>

              <p className="text-sm font-medium text-gray-700">Calories</p>

              <p className="mt-1 text-xs text-gray-400">avg. per day</p>
            </div>

            {/* Protein */}

            <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
                  🍴
                </div>

                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                  ↑ 8%
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-gray-900">56g</h2>

              <p className="text-sm font-medium text-gray-700">Protein</p>

              <p className="mt-1 text-xs text-gray-400">avg. per day</p>
            </div>

            {/* Carbs */}

            <div className="rounded-2xl border border-pink-100 bg-pink-50/50 p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-2xl">
                  🌿
                </div>

                <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-500">
                  ↓ 5%
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-gray-900">32g</h2>

              <p className="text-sm font-medium text-gray-700">Carbs</p>

              <p className="mt-1 text-xs text-gray-400">avg. per day</p>
            </div>

            {/* Fats */}

            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                  💧
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                  ↑ 10%
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-gray-900">20g</h2>

              <p className="text-sm font-medium text-gray-700">Fats</p>

              <p className="mt-1 text-xs text-gray-400">avg. per day</p>
            </div>
          </section>

          {/* ================= ANALYTICS ================= */}

          <section className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.8fr)_minmax(280px,0.8fr)]">
            {/* ================= CALORIE CHART ================= */}

            <div className="min-w-0 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Calorie Intake
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Your daily calorie consumption this week
                  </p>
                </div>

                <button className="rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
                  This Week ⌄
                </button>
              </div>

              {/* Chart */}

              <div className="mt-8">
                <div className="flex h-56 items-end gap-3 border-b border-gray-100 px-2 sm:gap-6">
                  {[
                    ["Mon", 52],
                    ["Tue", 61],
                    ["Wed", 49],
                    ["Thu", 63],
                    ["Fri", 56],
                    ["Sat", 76],
                    ["Sun", 70],
                  ].map(([day, height]) => (
                    <div
                      key={day}
                      className="flex h-full flex-1 flex-col items-center justify-end"
                    >
                      <div className="relative flex h-full w-full items-end justify-center">
                        {/* Goal */}

                        <div
                          className="absolute bottom-0 w-4 rounded-t-md bg-gray-100"
                          style={{ height: "82%" }}
                        />

                        {/* Actual */}

                        <div
                          className="relative z-10 w-4 rounded-t-md bg-green-500 transition hover:bg-green-600"
                          style={{ height: `${height}%` }}
                        />
                      </div>

                      <span className="mt-3 text-xs text-gray-400">{day}</span>
                    </div>
                  ))}
                </div>

                {/* Legend */}

                <div className="mt-5 flex flex-wrap gap-5 text-xs text-gray-500">
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
            </div>

            {/* ================= MACROS ================= */}

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Macronutrient Distribution
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Average intake this week
              </p>

              {/* Donut */}

              <div className="mt-7 flex justify-center">
                <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-[conic-gradient(#22c55e_0_45%,#fb7185_45%_70%,#fbbf24_70%_100%)]">
                  <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white">
                    <span className="text-2xl font-bold text-gray-900">
                      1,450
                    </span>

                    <span className="text-xs text-gray-400">kcal</span>
                  </div>
                </div>
              </div>

              {/* Legend */}

              <div className="mt-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                    Carbs
                  </span>

                  <span className="font-semibold text-gray-800">45%</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-3 w-3 rounded-full bg-pink-400" />
                    Protein
                  </span>

                  <span className="font-semibold text-gray-800">25%</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    Fats
                  </span>

                  <span className="font-semibold text-gray-800">30%</span>
                </div>
              </div>
            </div>

            {/* ================= GOAL PROGRESS ================= */}

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">Goal Progress</h2>

              <p className="mt-1 text-sm text-gray-400">Your daily goals</p>

              <div className="mt-6 space-y-6">
                {/* Calories */}

                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl">
                      🔥
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-semibold text-gray-800">
                          Calories
                        </span>

                        <span className="text-sm font-bold text-green-600">
                          73%
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-gray-400">
                        1,450 / 2,000 kcal
                      </p>

                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-green-500"
                          style={{ width: "73%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Protein */}

                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl">
                      🍴
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-semibold text-gray-800">
                          Protein
                        </span>

                        <span className="text-sm font-bold text-orange-500">
                          70%
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-gray-400">56 / 80 g</p>

                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-orange-400"
                          style={{ width: "70%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Water */}

                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                      💧
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-semibold text-gray-800">
                          Water
                        </span>

                        <span className="text-sm font-bold text-blue-500">
                          60%
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-gray-400">1.5 / 2.5 L</p>

                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-blue-400"
                          style={{ width: "60%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= INSIGHTS ================= */}

          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Weekly Insights */}

            <div className="rounded-3xl bg-green-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-2xl">
                  💡
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Weekly Insights
                  </h2>

                  <div className="mt-4 space-y-3">
                    <p className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-600">✓</span>
                      You're 12% more consistent than last week!
                    </p>

                    <p className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-600">✓</span>
                      Your protein intake has improved. Keep it up!
                    </p>

                    <p className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-600">✓</span>
                      Try to include more leafy greens for better fiber intake.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Motivation */}

            <div className="overflow-hidden rounded-3xl bg-linear-to-br from-green-50 to-emerald-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-4xl">🌱</div>

                  <h2 className="mt-4 text-2xl font-bold text-green-900">
                    Progress, not perfection!
                  </h2>

                  <p className="mt-2 max-w-md text-sm leading-6 text-gray-600">
                    Every healthy choice you make is a step towards a better
                    you.
                  </p>
                </div>

                <div className="hidden text-7xl md:block">🌿</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
