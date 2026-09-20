import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Leaf,
  CheckCircle2,
  CircleAlert,
} from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check passwords
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Check terms
    if (!agreeTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    // Create user object
    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    // Save user in browser
    localStorage.setItem("nutriUser", JSON.stringify(user));

    // Mark user as logged in
    localStorage.setItem("isLoggedIn", "true");

    // Go to dashboard
    navigate("/dashboard");
  };

  // Password strength
  const getPasswordStrength = () => {
    const password = formData.password;

    if (!password) {
      return {
        text: "",
        width: "w-0",
        color: "bg-gray-200",
      };
    }

    if (password.length < 6) {
      return {
        text: "Weak password",
        width: "w-1/3",
        color: "bg-red-500",
      };
    }

    if (password.length < 10) {
      return {
        text: "Good password",
        width: "w-2/3",
        color: "bg-yellow-500",
      };
    }

    return {
      text: "Strong password",
      width: "w-full",
      color: "bg-green-500",
    };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-screen  justify-center flex bg-white">
      {/* ================= RIGHT SIDE ================= */}

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}

          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center">
              <Leaf size={22} />
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
              Nutri<span className="text-green-600">AI</span>
            </h1>
          </div>

          {/* Heading */}

          <div className="mb-7">
            <h2 className="text-3xl font-bold text-gray-900">
              Create your account
            </h2>

            <p className="mt-2 text-gray-500">
              Start your nutrition journey with NutriAI.
            </p>
          </div>

          {/* Google Signup */}

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

          <div className="flex items-center gap-4 my-6">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-sm text-gray-400">OR</span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Signup Form */}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First + Last Name */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jahnavi"
                    required
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-white outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                  />
                </div>
              </div>

              {/* Last Name */}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Pagadala"
                    required
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-white outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                  />
                </div>
              </div>
            </div>

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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-white outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                />
              </div>
            </div>

            {/* Password */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
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

              {/* Password strength */}

              {formData.password && (
                <div className="mt-2">
                  <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${passwordStrength.width} ${passwordStrength.color}`}
                    />
                  </div>

                  <p className="mt-1 text-xs text-gray-500">
                    {passwordStrength.text}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm password
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  className={`w-full h-12 pl-11 pr-12 rounded-xl border bg-white outline-none transition focus:ring-4 focus:ring-green-500/10 ${
                    formData.confirmPassword &&
                    formData.password !== formData.confirmPassword
                      ? "border-red-300 focus:border-red-400"
                      : "border-gray-200 focus:border-green-500"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>

              {/* Password match */}

              {formData.confirmPassword && (
                <div className="mt-2 flex items-center gap-1.5">
                  {formData.password === formData.confirmPassword ? (
                    <>
                      <CheckCircle2 size={15} className="text-green-600" />

                      <span className="text-xs text-green-600">
                        Passwords match
                      </span>
                    </>
                  ) : (
                    <>
                      <CircleAlert size={15} className="text-red-500" />

                      <span className="text-xs text-red-500">
                        Passwords do not match
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Terms */}

            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 h-4 w-4 cursor-pointer accent-green-600"
              />

              <p className="text-sm leading-5 text-gray-500">
                I agree to NutriAI's{" "}
                <span className="cursor-pointer font-medium text-green-600 hover:text-green-700 underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="cursor-pointer font-medium text-green-600 hover:text-green-700 underline">
                  Privacy Policy
                </span>
                .
              </p>
            </div>

            {/* Create Account */}

            <button
              type="submit"
              className="group w-full h-12 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center justify-center gap-2 transition shadow-lg shadow-green-600/20"
            >
              Create Account
              <ArrowRight
                size={19}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Login */}

          <p className="text-center text-sm text-gray-500 mt-7">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-green-600 hover:text-green-700"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

/* ================= BENEFIT COMPONENT ================= */

const Benefit = ({ title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">
        <CheckCircle2 size={18} className="text-green-600" />
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>

        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Signup;
