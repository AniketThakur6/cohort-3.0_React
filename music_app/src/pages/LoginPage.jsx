import {
  Music2,
  Headphones,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import { useState } from "react";

const Input = ({ icon: Icon, placeholder, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="flex h-10 items-center gap-2 rounded-md border border-[#2d2b31] bg-[#181719] px-3 transition focus-within:border-violet-500">
      <Icon size={17} className="shrink-0 text-[#8d8798]" />

      <input
        type={isPassword && showPassword ? "text" : type}
        placeholder={placeholder}
        className="h-full min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#706b77]"
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="text-[#77717f] transition hover:text-white"
        >
          {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
        </button>
      )}
    </div>
  );
};

const LoginPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0d0d0e] text-white">
      {/* Decorative icons */}
      <Music2
        size={34}
        strokeWidth={1.5}
        className="absolute left-[40%] top-16 rotate-12 text-violet-500/60"
      />

      <BarChart3
        size={25}
        strokeWidth={1.5}
        className="absolute bottom-48 left-14 rotate-[-12deg] text-violet-500/30"
      />

      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* LEFT SIDE */}
          <section className="flex flex-col items-center text-center">
            <div className="relative mb-8 w-full max-w-[330px] overflow-hidden">
              <div className="absolute inset-0 bg-violet-500/10 blur-3xl" />

              <div className="relative flex aspect-[1.55] items-center justify-center bg-[#101012]">
                <Headphones
                  size={90}
                  strokeWidth={1}
                  className="text-violet-400"
                />

                <div className="absolute inset-x-10 bottom-10 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

                <Music2
                  size={20}
                  className="absolute left-20 top-8 text-violet-400"
                />

                <Music2
                  size={16}
                  className="absolute right-20 top-14 text-fuchsia-400"
                />
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-violet-300">
              MusicHub
            </h1>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[#aaa5b0]">
              Experience high-fidelity sound
              <br />
              tailored to your soul.
            </p>
          </section>

          {/* RIGHT SIDE */}
          <section className="w-full max-w-[335px] justify-self-center rounded-lg border border-[#242326] bg-[#181819] p-7 shadow-2xl md:justify-self-start">
            <div className="mb-7">
              <h2 className="text-xl font-bold tracking-tight">Welcome Back</h2>

              <p className="mt-1 text-xs text-[#96909d]">
                Sign in to continue your journey.
              </p>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="mb-2 block text-[11px] font-bold tracking-widest text-[#aaa3b1]">
                EMAIL ADDRESS
              </label>

              <Input icon={Mail} placeholder="name@example.com" type="email" />
            </div>

            {/* Password */}
            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-[11px] font-bold tracking-widest text-[#aaa3b1]">
                  PASSWORD
                </label>
              </div>

              <Input
                icon={LockKeyhole}
                placeholder="Password"
                type="password"
              />
            </div>

            {/* Remember */}
            <label className="mb-6 flex cursor-pointer items-center gap-2 text-xs text-[#aaa5af]">
              <input
                type="checkbox"
                className="mt-1 h-3 w-3 accent-violet-500"
              />
              Remember Me
            </label>

            {/* Main action */}
            <button
              type="button"
              className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-500 to-violet-600 text-sm font-bold shadow-lg shadow-violet-500/20 transition hover:from-violet-400 hover:to-violet-500"
            >
              Continue
              <ArrowRight size={17} />
            </button>

            {/* Register only — no Login option */}
            <div className="mt-7 border-t border-[#28262b] pt-6 text-center text-xs text-[#8d8792]">
              Don't have an account?{" "}
              <button className="ml-1 font-semibold text-violet-400 transition hover:text-violet-300">
                Register
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
