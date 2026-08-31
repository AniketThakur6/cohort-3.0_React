import { Mail, Lock, ArrowRight, Zap, Eye, EyeClosed } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MyContext } from "../context/MyContext";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(true);

  const { currentUser } = useContext(MyContext)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const { signinUser } = useContext(MyContext);

  const onSubmit = (data) => {
    const obj = {
      email: data.email.trim().toLowerCase(),
      password: data.password.trim(),
    };

    const result = signinUser(obj);
    if (result) {
      reset();
      navigate("/home", { replace: true });
    }
    setSuccess(result);
  };

  useEffect(() => {
    if (currentUser && Object.keys(currentUser).length) {
      navigate("/home", { replace: true });
    }
  }, [currentUser, navigate]);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white lg:flex">
      {/* Left Section */}
      <div className="hidden w-1/2 flex-col bg-[radial-gradient(circle_at_35%_48%,rgba(55,65,15,0.14),transparent_46%)] px-12.5 py-13 lg:flex">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-main-colorr flex items-center justify-center">
            <Zap size={22} className="text-black" fill="currentColor" />
          </div>

          <h1 className="text-2xl font-bold">
            Sky<span className="text-main-color">Mart</span>
          </h1>
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-main-color font-semibold tracking-wider mb-5">
            WELCOME BACK
          </p>

          <h2 className="text-6xl font-bold leading-[1.05]">
            Shop the future.
            <br />
            <span className="text-main-color">Today.</span>
          </h2>

          <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-lg">
            Thousands of products, lightning-fast delivery, and
            <br />
            prices that make your wallet happy.
          </p>

          {/* Stats */}
          <div className="flex gap-4 mt-12">
            <div className="w-52 h-20.5 border border-gray-500 rounded-xl flex flex-col items-center justify-center">
              <p className="text-main-color text-xl font-bold">20K+</p>
              <p className="text-gray-500">Products</p>
            </div>

            <div className="w-52 h-20.5 border  border-gray-500 rounded-xl flex flex-col items-center justify-center">
              <p className="text-main-color text-xl font-bold">50K+</p>
              <p className="text-gray-500">Users</p>
            </div>

            <div className="w-52 h-20.5 border border-gray-500 rounded-xl flex flex-col items-center justify-center">
              <p className="text-main-color text-xl font-bold">4.9★</p>
              <p className="text-gray-500">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-8 lg:w-1/2 lg:border-l lg:border-[#666]">
        <div className="w-full max-w-120 rounded-3xl border border-[#242424] bg-[#1111] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.18)] sm:p-8">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-main-color">
              <Zap size={22} className="text-black" fill="currentColor" />
            </div>
            <h1 className="text-2xl font-bold">
              Sky<span className="text-main-color">Mart</span>
            </h1>
          </div>
          <h2 className="text-3xl font-bold">Sign in</h2>

          <p className="text-gray-500 mt-2">
            Enter your credentials to continue
          </p>

          {!success && (
            <div className="w-full rounded-xl border border-red-900 bg-red-950/40 px-4 py-3 mt-5 -mb-3 text-sm text-red-400">
              Invalid email or password
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-5 ">
            {/* Email */}
            <div className="flex items-center gap-3 text-lg bg-[#1d1d1d] rounded-xl px-6 py-1">
              <Mail size={17} className="shrink-0 mt-1 text-slate-400 " />

              <input
                {...register("email", {
                  required: "Email is required",
                  onChange: () => setSuccess(true)
                })}
                
                type="email"
                placeholder="Email address"
                className="w-full h-12 bg-transparent outline-none text-white placeholder:text-gray-500"
              />
            </div>

            {/* Password */}
            <div className="flex items-center text-lg gap-3 bg-[#1d1d1d] rounded-xl px-4 py-1">
              <Lock size={17} className="shrink-0 text-slate-400" />

              <input
                {...register("password", {
                  required: "Password is required",
                  onChange: () => setSuccess(true),
                })}
                
                type={showPassword ? "text" : "password"}
                placeholder="Password (min 6 chars)"
                className="w-full h-12 bg-transparent outline-none text-white placeholder:text-gray-500"
              />
              <div
                onClick={() => setShowPassword((prev) => !prev)}
                className="p-1"
              >
                {!showPassword ? (
                  <Eye size={17} className="text-zinc-400" />
                ) : (
                  <EyeClosed size={17} className="text-zinc-300" />
                )}
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full h-13 rounded-xl bg-main-color text-black font-semibold flex items-center justify-center gap-2 mt-4 hover:bg-[#b8e800] transition"
            >
              Sign in
              <ArrowRight size={19} />
            </button>
          </form>

          {/* Create Account */}
          <p className="text-center text-gray-500 mt-8">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-main-color font-semibold"
            >
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
