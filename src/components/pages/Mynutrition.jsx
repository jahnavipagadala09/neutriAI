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

        {/*  my nutritionist CONTENT */}
        <main className="min-w-0 flex-1 overflow-y-auto bg-[#f7faf8] p-5 md:p-8">
          {/* ================= PAGE HEADER ================= */}

          <div className="mb-7">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              My Nutritionist
            </h1>

            <p className="mt-2 text-gray-500">
              Your personal AI nutrition companion
            </p>
          </div>

          {/* ================= MAIN CONTENT ================= */}

          <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
            {/* ================= AI NUTRITIONIST ================= */}

            <section className="min-w-0 overflow-hidden rounded-3xl bg-linear-to-br from-green-50 via-emerald-50 to-white p-6 shadow-sm">
              {/* Nutritionist area */}

              <div className="grid items-center gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
                {/* AI AVATAR */}

                <div className="relative flex h-64 items-end justify-center overflow-hidden rounded-3xl bg-linear-to-b from-green-100 to-emerald-50">
                  <div className="absolute left-5 top-8 text-3xl">✨</div>

                  <div className="absolute right-5 top-12 text-2xl">🌿</div>

                  {/* Avatar */}

                  <div className="mb-5 flex h-48 w-40 items-center justify-center rounded-[50%] bg-green-200 text-8xl">
                    👩🏻‍⚕️
                  </div>
                </div>

                {/* AI MESSAGE */}

                <div>
                  <div className="rounded-3xl bg-white/90 p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-green-700">
                      Hi, Jahnavi! 👋
                    </h2>

                    <p className="mt-3 text-base leading-7 text-gray-700">
                      I'm your AI Nutritionist.
                      <br />
                      Ask me anything about your diet, nutrition, or healthy
                      habits.
                    </p>
                  </div>

                  {/* QUICK QUESTIONS */}

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button className="rounded-full bg-white px-4 py-3 text-sm font-medium text-green-700 shadow-sm transition hover:bg-green-100">
                      Suggest a healthy breakfast
                    </button>

                    <button className="rounded-full bg-white px-4 py-3 text-sm font-medium text-green-700 shadow-sm transition hover:bg-green-100">
                      Improve my protein intake
                    </button>

                    <button className="rounded-full bg-white px-4 py-3 text-sm font-medium text-green-700 shadow-sm transition hover:bg-green-100">
                      Is this food healthy?
                    </button>
                  </div>
                </div>
              </div>

              {/* ================= ASK INPUT ================= */}

              <div className="mt-6 rounded-3xl bg-white p-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-50 text-xl">
                    💬
                  </div>

                  <input
                    type="text"
                    placeholder="Ask me anything..."
                    className="min-w-0 flex-1 bg-transparent px-2 text-sm text-gray-700 outline-none placeholder:text-gray-400"
                  />

                  <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white transition hover:bg-green-700">
                    →
                  </button>
                </div>
              </div>

              {/* TIP */}

              <p className="mt-3 px-2 text-xs text-gray-500">
                💡 Tip: Be specific for better suggestions!
              </p>
            </section>

            {/* ================= TODAY'S PROGRESS ================= */}

            <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
              {/* Header */}

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Today's Progress
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Your nutrition for today
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 px-3 py-2 text-xs font-medium text-gray-500">
                  Today
                </div>
              </div>

              {/* ================= CALORIES ================= */}

              <div className="mb-4 rounded-2xl border border-gray-100 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-2xl">
                    🔥
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900">Calories</h3>

                      <span className="font-bold text-green-600">73%</span>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                      1,450 / 2,000 kcal
                    </p>

                    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-green-500"
                        style={{ width: "73%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= PROTEIN ================= */}

              <div className="mb-4 rounded-2xl border border-gray-100 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                    🍴
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900">Protein</h3>

                      <span className="font-bold text-orange-500">70%</span>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">56 / 80 g</p>

                    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-orange-400"
                        style={{ width: "70%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= CARBS ================= */}

              <div className="mb-4 rounded-2xl border border-gray-100 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-2xl">
                    🌿
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900">Carbs</h3>

                      <span className="font-bold text-pink-400">48%</span>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">32 / 250 g</p>

                    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-pink-400"
                        style={{ width: "48%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= FATS ================= */}

              <div className="rounded-2xl border border-gray-100 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                    💧
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900">Fats</h3>

                      <span className="font-bold text-blue-500">29%</span>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">20 / 70 g</p>

                    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-blue-400"
                        style={{ width: "29%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= ENCOURAGEMENT ================= */}

              <div className="mt-5 rounded-2xl bg-green-50 p-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🌱</span>

                  <div>
                    <h3 className="font-bold text-green-700">
                      You're doing great!
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      Keep going, small steps make a big difference.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
