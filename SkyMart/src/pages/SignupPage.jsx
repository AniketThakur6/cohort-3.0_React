import {
  User,
  Mail,
  Lock,
  Eye,
  ArrowRight,
  Zap,
  EyeClosed,
} from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { MyContext } from "./../context/MyContext";
import { useForm } from "react-hook-form";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { registerUser } = useContext(MyContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const obj = {
      avatar : data.name.trim()[0].toUpperCase(),
      name: data.name.trim().toLowerCase(),
      email: data.email.trim().toLowerCase(),
      id : String(Date.now()),
      password: data.password.trim(),
      joinedAt: new Date().toLocaleString(), 
    }
    let success = registerUser(obj)
    if(success){
      reset();
      navigate('/login',{ replace: true })
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] px-4 pb-8 text-white flex flex-col items-center sm:px-6">
      {/* Logo */}
      <div className="mt-12 flex items-center gap-3 sm:mt-24 lg:mt-35">
        <div className="w-9 h-9 rounded-xl bg-main-color flex items-center justify-center">
          <Zap size={20} className="text-black" fill="currentColor" />
        </div>

        <h1 className="text-2xl font-bold">
          Sky<span className="text-main-color">Mart</span>
        </h1>
      </div>

      {/* Signup Card */}
      <div className="mt-8 w-full max-w-120 rounded-3xl border border-[#292929] bg-[#111111] p-5 text-base sm:p-8 sm:text-xl">
        <h2 className="text-2xl font-bold">Create account</h2>

        <p className="text-gray-500 mt-2">Join SkyMart and start shopping</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-3">
          {/* Full Name */}
          <div className="flex items-center gap-3 bg-[#1d1d1d] border border-[#303030] rounded-xl py-1 px-4">
            <User size={17} className="text-zinc-600" />

            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters is required",
                },
                pattern: {
                  value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                  message: "Enter a valid name",
                },
              })}
              type="text"
              placeholder="Full name"
              className="w-full h-11 bg-transparent outline-none text-white placeholder:text-zinc-600"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 -mt-2 ml-2 text-sm">
              {errors.name.message}
            </p>
          )}
          {/* Email */}
          <div className="flex items-center gap-3 bg-[#1d1d1d] border border-[#303030] rounded-xl py-1 px-4">
            <Mail size={17} className="text-zinc-600" />

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              placeholder="Email address"
              className="w-full h-11 bg-transparent outline-none text-white placeholder:text-zinc-600"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 -mt-2 ml-2 text-sm">
              {errors.email.message}
            </p>
          )}
          {/* Password */}
          <div className="flex items-center gap-3 bg-[#1d1d1d] border border-[#303030] rounded-xl py-1 px-4">
            <Lock size={17} className="text-zinc-600" />

            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Password (min 6 chars)"
              className="w-full h-11 bg-transparent outline-none text-white placeholder:text-zinc-600"
            />

            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className="p-1"
            >
              {!showPassword ? (
                <EyeClosed size={17} className="text-gray-500 cursor-pointer" />
              ) : (
                <Eye size={17} className="text-gray-500 cursor-pointer" />
              )}
            </div>
          </div>

          {errors.password && (
            <p className="text-red-500 -mt-2 ml-2 text-sm">
              {errors.password.message}
            </p>
          )}

          {watch("password") && (
            <div className="flex items-center gap-1 mt-2">
              <div
                className={`h-1 flex-1 rounded-full ${(watch("password") || "").length < 6 ? "bg-red-600" : (watch("password").length < 8 ? "bg-yellow-600": watch("password").length >= 8 ?"bg-main-color" : "bg-[#1d1d1d]"  )}`}
              ></div>
              <div
                className={`h-1 flex-1 rounded-full ${(watch("password") || "").length >= 6 ? (watch("password").length >= 8 ? "bg-main-color" : "bg-yellow-600") : "bg-[#1d1d1d]"}`}
              ></div>
              <div
                className={`h-1 flex-1 rounded-full ${(watch("password") || "").length >= 8 ? "bg-main-color" : "bg-[#1d1d1d]"}`}
              ></div>

              {(watch("password") || "").length === 0 ? null : (
                  watch("password") || ""
                ).length >= 8 ? (
                <span className="text-[#baff00] text-sm font-medium ml-1 -mt-1">
                  Strong
                </span>
              ) : (watch("password") || "").length >= 6 ? (
                <span className="text-yellow-600 text-sm font-medium ml-1 -mt-1">
                  Medium
                </span>
              ) : (
                <span className="text-red-400 text-sm font-medium ml-1 -mt-1">
                  Weak
                </span>
              )}
            </div>
          )}

          {/* Confirm Password */}
          <div className="flex items-center gap-3 bg-[#1d1d1d] border border-[#303030] rounded-xl py-1 px-4">
            <Lock size={17} className="text-zinc-600" />

            <input
              {...register("confirmPassword", {
                required: "please Confirm your password",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full h-11 bg-transparent outline-none text-white placeholder:text-zinc-600"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 -mt-2 ml-2 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
          {/* Button */}
          <button
            type="submit"
            className="w-full h-13 mt-1 rounded-xl bg-main-color text-black font-semibold flex items-center justify-center gap-2 hover:bg-[#b8e800] transition"
          >
            Create Account
            <ArrowRight size={19} />
          </button>
        </form>

        {/* Sign in */}
        <p className="text-center text-gray-500 mt-7">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-main-color font-semibold"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
