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
        <main className="min-w-0 flex-1 overflow-y-auto bg-[#f7faf8] p-5 md:p-8">
          {/* ================= HEADER ================= */}

          <div className="mb-7">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Food Scanner
            </h1>

            <p className="mt-2 text-gray-500">
              Upload a photo of your meal and get instant nutrition information.
            </p>
          </div>

          {/* ================= SCANNER CONTENT ================= */}

          <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.7fr)]">
            {/* ================= UPLOAD CARD ================= */}

            <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
              <div
                className="
          flex
          min-h-105
          flex-col
          items-center
          justify-center
          rounded-3xl
          border-2
          border-dashed
          border-green-300
          bg-green-50/40
          px-6
          text-center
          transition
          hover:bg-green-50
        "
              >
                {/* Upload Icon */}

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <span className="text-4xl">🖼️</span>
                </div>

                {/* Text */}

                <h2 className="mt-6 text-2xl font-bold text-gray-900">
                  Upload a photo of your food
                </h2>

                <p className="mt-2 max-w-md text-sm text-gray-500">
                  Drag & drop an image here, or click to browse
                </p>

                {/* Upload Button */}

                <label
                  htmlFor="food-image"
                  className="
            mt-7
            flex
            cursor-pointer
            items-center
            gap-3
            rounded-full
            bg-green-600
            px-7
            py-3.5
            font-semibold
            text-white
            shadow-sm
            transition
            hover:bg-green-700
            hover:shadow-md
          "
                >
                  <span className="text-xl">↑</span>
                  Upload Image
                </label>

                {/* Hidden input */}

                <input
                  id="food-image"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                />

                {/* Supported formats */}

                <p className="mt-5 text-xs text-gray-400">
                  Supports JPG, PNG, WEBP · Max 10MB
                </p>
              </div>
            </section>

            {/* ================= RIGHT CARD ================= */}

            <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Try an example
              </h2>

              <p className="mt-1 text-sm text-gray-500">See how it works</p>

              {/* Example foods */}

              <div className="mt-6 grid grid-cols-3 gap-3">
                {/* Salad */}

                <button className="group text-center">
                  <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-green-50 transition group-hover:scale-[1.02]">
                    <span className="text-5xl">🥗</span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Salad
                  </p>
                </button>

                {/* Pasta */}

                <button className="group text-center">
                  <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-orange-50 transition group-hover:scale-[1.02]">
                    <span className="text-5xl">🍝</span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Pasta
                  </p>
                </button>

                {/* Fruits */}

                <button className="group text-center">
                  <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-pink-50 transition group-hover:scale-[1.02]">
                    <span className="text-5xl">🍓</span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-gray-700">
                    Fruits
                  </p>
                </button>
              </div>

              {/* Divider */}

              <div className="my-7 h-px bg-gray-100" />

              {/* Tip */}

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-2xl">
                  💡
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Tip</h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    For best results, use a clear and well-lit image of your
                    food.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* ================= BOTTOM MESSAGE ================= */}

          <div className="mt-6 rounded-3xl bg-linear-to-r from-green-50 to-emerald-50 px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="text-3xl">🌿</div>

              <div>
                <h3 className="font-semibold text-green-800">
                  Good food, better you!
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Scan your meal and discover what's on your plate.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
