import { Link } from "react-router-dom";

import {
  ArrowRight,
  Play,
  Camera,
  Brain,
  BarChart3,
  Heart,
  Flame,
  Leaf,
  Lightbulb,
  ClipboardList,
  Target,
  CheckCircle2,
} from "lucide-react";

import foodImage from "../assets/nutri.jpg";

const features = [
  {
    icon: Camera,
    title: "Snap or Upload",
    description: "Take a photo or upload an image of your food.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our AI identifies ingredients and calculates nutrition.",
  },
  {
    icon: BarChart3,
    title: "Detailed Insights",
    description: "Get calories, macros, vitamins and more.",
  },
  {
    icon: Heart,
    title: "Stay Healthier",
    description: "Make informed food choices every day.",
  },
];

const benefits = [
  {
    icon: Flame,
    title: "Calories & Macros",
  },
  {
    icon: Leaf,
    title: "Vitamins & Minerals",
  },
  {
    icon: Lightbulb,
    title: "Health Suggestions",
  },
  {
    icon: ClipboardList,
    title: "Track Your Meals",
  },
  {
    icon: Leaf,
    title: "Suitable Diet Plans",
  },
  {
    icon: Target,
    title: "Support Your Goals",
  },
];

function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="relative flex h-11 w-11 items-center justify-center">
              <Leaf className="absolute h-10 w-10 -rotate-12 fill-green-500 text-green-600" />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">
                Nutri<span className="text-green-600">AI</span>
              </h1>

              <p className="-mt-1 text-[10px] font-medium text-slate-500">
                Smart Food. Healthier You.
              </p>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-semibold text-green-700">
              Home
            </a>

            <a
              href="#features"
              className="text-sm font-medium text-slate-700 transition hover:text-green-600"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-700 transition hover:text-green-600"
            >
              How it Works
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-700 transition hover:text-green-600"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-700 transition hover:text-green-600"
            >
              Contact
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-full border border-green-700 px-6 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-green-50"
            >
              Log In
            </Link>

            <Link
              to="/signup"
              className="rounded-full bg-linear-to-r from-green-600 to-green-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:px-10 lg:py-16"
      >
        {/* Background decorations */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-lime-100/50 blur-3xl" />

        {/* Hero Text */}
        <div className="relative z-10">
          <h2 className="max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Your Food
            <br />
            Knows More <span className="text-green-600">Now.</span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Upload a photo of your meal and let NutriAI analyze its nutritional
            value using the power of AI. Eat smarter. Live healthier.
          </p>

          {/* Hero buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/login"
              className="group flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-green-600 to-green-700 px-7 py-4 font-bold text-white shadow-lg shadow-green-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Get Started
              <ArrowRight
                size={19}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <button className="flex items-center justify-center gap-3 rounded-full bg-gray-50 px-7 py-4 font-semibold text-slate-800 transition hover:bg-gray-100">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
                <Play size={11} fill="white" />
              </span>
              Watch Demo
            </button>
          </div>

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Leaf size={18} className="text-green-600" />
              AI-Powered Analysis
            </div>

            <div className="flex items-center gap-2">
              <Heart size={18} className="fill-green-600 text-green-600" />
              Personalized Insights
            </div>

            <div className="flex items-center gap-2">
              <BarChart3 size={18} className="text-green-600" />
              Healthier Lifestyle
            </div>
          </div>
        </div>

        {/* ================= HERO IMAGE ================= */}
        <div className="relative flex min-h-120 items-center justify-center">
          {/* Green background shape */}
          <div className="absolute h-95 w-95 rounded-full bg-green-100/80 blur-[1px] sm:h-95 sm:w-95" />

          {/* Yellow shape */}
          <div className="absolute -bottom-5 left-16 h-36 w-36 rounded-full bg-yellow-100/70 blur-xl" />

          {/* Food image */}
          <div className="relative z-10 h-82.5 w-82.5 overflow-hidden rounded-full shadow-2xl shadow-green-900/20 sm:h-107.5 sm:w-107.5">
            <img
              src={foodImage}
              alt="Healthy nutritious meal"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Calories card */}
          <div className="absolute right-0 top-5 z-20 rounded-2xl bg-white px-6 py-4 shadow-xl sm:right-5">
            <div className="flex items-center gap-2">
              <Flame className="fill-orange-500 text-orange-500" size={25} />

              <span className="text-2xl font-extrabold text-slate-900">
                523 kcal
              </span>
            </div>

            <p className="ml-8 text-sm text-slate-500">Total Calories</p>
          </div>

          {/* Nutrition cards */}
          <div className="absolute right-0 top-32 z-20 space-y-3">
            <NutritionCard
              color="bg-yellow-100"
              icon="◉"
              title="Carbs"
              value="62g"
            />

            <NutritionCard
              color="bg-green-100"
              icon="●"
              title="Protein"
              value="24g"
            />

            <NutritionCard
              color="bg-pink-100"
              icon="●"
              title="Fats"
              value="18g"
            />

            <NutritionCard
              color="bg-green-100"
              icon="🍃"
              title="Vitamins"
              value="6+"
            />
          </div>

          {/* Handwritten style text */}
          <div className="absolute bottom-16 left-0 z-20 rotate-[-8deg] font-serif text-2xl italic leading-7 text-green-700">
            Good Food
            <br />
            Brighter
            <br />
            You
          </div>
        </div>
      </section>

      {/* ================= FEATURE STRIP ================= */}
      <section
        id="features"
        className="mx-5 rounded-[30px] border-8 border-gray-50 bg-white px-4 py-8 shadow-sm lg:mx-8"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-gray-200 md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="px-6 py-5 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                  <Icon size={27} className="text-green-700" />
                </div>

                <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              How <span className="text-green-600">NutriAI</span> Works
            </h2>

            <p className="mt-3 text-slate-500">
              Get accurate nutrition information in just a few simple steps.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-14 grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <Step
              number="1"
              icon={<Camera size={40} />}
              title="Upload Photo"
              description="Capture or upload an image of your meal."
            />

            <Step
              number="2"
              icon={<Brain size={40} />}
              title="AI Analysis"
              description="Our model detects food items and calculates nutritional value."
            />

            <Step
              number="3"
              icon={<BarChart3 size={40} />}
              title="Get Results"
              description="View detailed nutrition facts and personalized suggestions."
            />
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_1.5fr_130px] lg:px-10"
      >
        {/* Left */}
        <div>
          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            More Than Just
            <br />
            <span className="text-green-600">Calories</span>
          </h2>

          <p className="mt-6 max-w-md leading-7 text-slate-600">
            NutriAI gives you a complete nutritional breakdown including
            vitamins, minerals, and personalized health insights to help you
            reach your goals.
          </p>

          <button className="group mt-7 flex items-center gap-3 rounded-full bg-linear-to-r from-green-600 to-green-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-200 transition hover:-translate-y-1">
            Explore Features
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group flex min-h-28.75 flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon
                  size={27}
                  className="text-green-600 transition group-hover:scale-110"
                />

                <p className="mt-3 text-sm font-medium text-slate-700">
                  {benefit.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Side handwritten text */}
        <div className="hidden rotate-[-5deg] font-serif text-xl italic leading-7 text-green-700 lg:block">
          A Healthier
          <br />
          Tomorrow
          <br />
          Starts With
          <br />
          What You Eat
          <br />
          Today 🍃
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        id="contact"
        className="mx-5 mb-8 overflow-hidden rounded-[28px] bg-linear-to-r from-green-50 to-lime-50 px-6 py-10 lg:mx-8 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
          {/* Decorative food */}
          <div className="hidden text-5xl lg:block">🥬 🍅 🥑</div>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready to Make Smarter Food Choices?
            </h2>

            <p className="mt-2 text-slate-600">
              Join NutriAI today and take the first step towards a healthier,
              happier you.
            </p>
          </div>

          {/* CTA */}
          <Link to="/login" className="group flex shrink-0 items-center gap-3 rounded-full bg-linear-to-r from-green-600 to-green-700 px-7 py-4 font-bold text-white shadow-lg shadow-green-200 transition hover:-translate-y-1 hover:shadow-xl">
            Get Started for Free
            <ArrowRight
              size={19}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          {/* Handwritten */}
          <div className="font-serif text-xl italic leading-7 text-green-700">
            Eat Well
            <br />
            Be Well ♥
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function NutritionCard({ color, icon, title, value }) {
  return (
    <div className="flex w-32 items-center gap-3 rounded-xl bg-white px-3 py-3 shadow-lg sm:w-36">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full ${color} text-sm`}
      >
        {icon}
      </div>

      <div>
        <p className="text-xs text-slate-500">{title}</p>

        <p className="text-sm font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

function Step({ number, icon, title, description }) {
  return (
    <div className="relative text-center">
      {/* Number */}
      <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
        {number}
      </div>

      {/* Icon */}
      <div className="mx-auto mt-3 flex h-24 w-24 items-center justify-center rounded-2xl bg-green-50 text-green-700">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold">{title}</h3>

      <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

export default Home;
