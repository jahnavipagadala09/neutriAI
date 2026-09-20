import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Leaf,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get saved user
    const savedUser = JSON.parse(localStorage.getItem("nutriUser"));

    // Check if account exists
    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    // Check email and password
    if (email === savedUser.email && password === savedUser.password) {
      // Login successful
      localStorage.setItem("isLoggedIn", "true");

      // Go to dashboard
      navigate("/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen justify-center bg-white flex">
      {/* ================= RIGHT SIDE ================= */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-10">
            <div className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center">
              <Leaf size={22} />
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
              Nutri<span className="text-green-600">AI</span>
            </h1>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-600">
              Sign in to continue your nutrition journey.
            </h2>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full h-12 border border-gray-200 rounded-xl flex items-center justify-center gap-3 bg-white hover:bg-gray-50 transition font-medium text-gray-700"
          >
            {/* Google icon */}
            <svg width="19" height="19" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M21.35 12.23c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.44h3.14c1.84-1.69 2.91-4.18 2.91-7.41z"
              />

              <path
                fill="#34A853"
                d="M12 21.8c2.63 0 4.84-.87 6.45-2.36l-3.14-2.44c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.04H3.28v2.52A9.75 9.75 0 0 0 12 21.8z"
              />

              <path
                fill="#FBBC05"
                d="M6.53 13.88A5.87 5.87 0 0 1 6.22 12c0-.65.11-1.28.31-1.88V7.6H3.28A9.8 9.8 0 0 0 2.2 12c0 1.58.38 3.08 1.08 4.4l3.25-2.52z"
              />

              <path
                fill="#EA4335"
                d="M12 6.08c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.15 14.63 2.2 12 2.2a9.75 9.75 0 0 0-8.72 5.4l3.25 2.52C6.83 7.8 9 6.08 12 6.08z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-sm text-gray-400">OR</span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-white outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-green-600 hover:text-green-700"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 pl-11 pr-12 rounded-xl border border-gray-200 bg-white outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 accent-green-600"
                />

                <span className="text-sm text-gray-600">Remember me</span>
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="group w-full h-12 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center justify-center gap-2 transition shadow-lg shadow-green-600/20"
            >
              Sign in
              <ArrowRight
                size={19}
                className="group-hover:translate-x-1 transition"
              />
            </button>
          </form>

          {/* Sign up */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-green-600 hover:text-green-700"
            >
              Create an account
            </Link>
          </p>

          {/* Privacy */}
          <p className="text-center text-xs text-gray-400 mt-8 leading-relaxed">
            By continuing, you agree to NutriAI's{" "}
            <span className="underline cursor-pointer">Terms of Service</span>{" "}
            and <span className="underline cursor-pointer">Privacy Policy</span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
