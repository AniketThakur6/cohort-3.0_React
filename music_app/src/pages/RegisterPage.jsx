import {
  UserRound,
  AtSign,
  Mail,
  LockKeyhole,
  Music2,
  Mic2,
  ArrowRight,
  Radio,
  Headphones,
  CassetteTape,
  Eye,
  EyeOff,
} from "lucide-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { AuthContext } from "../context/AuthContext";
import Register from './../../../state-uplift/src/components/Register';

const Input = ({
  icon: Icon,
  placeholder,
  type = "text",
  name,
  register,
  errors,
  validate,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  

  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-1">
      <div className="flex h-10 items-center gap-2 rounded-full border border-[#38353e] bg-[#0d0d0e] px-3 transition focus-within:border-violet-500">
        <Icon size={17} className="text-[#aaa3b8]" />

        <input
          {...register(name, {
            required: `${name} is required`,
            minLength:{
              value:6,
              message:"password at least 6 character"
            },
            ...(validate && {
              validate,
            }),
          })}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#56515e]"
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

      {errors[name] && (
        <p className="text-xs text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
};

const RegisterPage = () => {

  const {registerUser} = useContext(AuthContext)

  const [role, setRole] = useState("listener");
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const registerFormSubmit = (data) => {
    
    if(!isChecked){
      toast.error("Please accept the Terms of Service and Privacy Policy")
      return ;
    }

    const isUserAlreadyExists = register.find(user => user.email === data.email)

    if(!isUserAlreadyExists){
      toast.error("User Already Exist with email address ")
      return;
    }

    const obj = {
      email: data.email,
      username: data.username,
      name: data.name,
      password: data.password,
      joinedAt: new Date.now().toLocaleString()
    }

    registerUser = [...registerUser,obj]

   

  };

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_50%_25%,#21152f_0%,#15121b_35%,#0d0d0f_75%)] text-white">
      {/* Header */}
      <div className="mt-10 pt-3 text-center">
        <h1 className="text-xl font-bold tracking-tight text-[#bba0ff]">
          MusicHub
        </h1>

        <p className="mt-1 text-xs text-[#d4cddd]">
          Join the sound revolution.
        </p>
      </div>

      {/* Card */}
      <div className="mx-auto mt-8 w-[412px] rounded-lg bg-[#1c1b1e] p-8 shadow-2xl shadow-black/30">
        {/* Account type */}
        <div className="mb-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setRole("listener")}
            className={`flex h-[84px] flex-col items-center justify-center rounded-md ${
              role === "listener"
                ? "border border-violet-500 bg-[#2a243b] text-[#ddd0ff] shadow-[0_0_15px_rgba(139,92,246,0.12)]"
                : "border border-[#39363e] bg-[#1b1a1c] text-[#aaa5af] transition hover:border-violet-500"
            }`}
          >
            <Music2 size={21} />

            <span className="mt-2 text-xs font-bold tracking-[2px]">
              LISTENER
            </span>
          </button>

          <button
            type="button"
            onClick={() => setRole("artist")}
            className={`flex h-[84px] flex-col items-center justify-center rounded-md ${
              role === "artist"
                ? "border border-violet-500 bg-[#2a243b] text-[#ddd0ff] shadow-[0_0_15px_rgba(139,92,246,0.12)]"
                : "border border-[#39363e] bg-[#1b1a1c] text-[#aaa5af] transition hover:border-violet-500"
            }`}
          >
            <Mic2 size={21} />

            <span className="mt-2 text-xs font-bold tracking-[2px]">
              ARTIST
            </span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(registerFormSubmit)} className="space-y-3">
          {/* Full Name */}
          <Input
            icon={UserRound}
            placeholder="Full Name"
            name="name"
            register={register}
            errors={errors}
            regex={/^[A-Za-z]+(?:\s[A-Za-z]+)*$/}
          />

          {/* Username */}
          <Input
            icon={AtSign}
            placeholder="Username"
            name="username"
            register={register}
            errors={errors}
            regex={/^[a-zA-Z0-9_]{3,20}$/}
          />

          {/* Email */}
          <Input
            icon={Mail}
            placeholder="Email Address"
            type="email"
            name="email"
            register={register}
            errors={errors}
            regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
          />

          {/* Password row */}
          <div className="grid grid-cols-2 gap-3">
            <Input
              icon={LockKeyhole}
              placeholder="Password"
              type="password"
              name="password"
              register={register}
              errors={errors}
            />

            <Input
              icon={LockKeyhole}
              placeholder="Confirm"
              type="password"
              name="confirmPassword"
              register={register}
              errors={errors}
              validate={(value) =>
                value === watch("password") || "Passwords do not match"
              }
            />
          </div>

          {/* Terms */}
          <label className="flex cursor-pointer items-start gap-2 px-1 pt-1">
            <input
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              type="checkbox"
              className="mt-1 h-3 w-3 accent-violet-500"
            />

            <span className="text-xs font-semibold leading-[14px] tracking-wide text-[#c4bacf]">
              I agree to the Terms of Service and
              <br />
              Privacy Policy.
            </span>
          </label>

          {/* Register */}
          <button
            type="submit"
            className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#cbb5ff] to-[#7338df] text-sm font-bold text-[#38205f] shadow-[0_8px_20px_rgba(124,58,237,0.25)] transition hover:brightness-110 active:scale-[0.99]"
          >
            Register
            <ArrowRight size={17} />
          </button>
        </form>

        {/* Login */}
        <p className="mt-5 text-center text-xs text-[#b8b1bd]">
          Already have an account?

          <button className="ml-1 font-bold text-[#a981ff] hover:text-[#c1a5ff]">
            Login
          </button>
        </p>
      </div>

      {/* Bottom icons */}
      <div className="mt-8 flex justify-center gap-6 text-[#444149]">
        <Radio size={24} strokeWidth={2.5} />
        <Headphones size={25} strokeWidth={2.5} />
        <CassetteTape size={25} strokeWidth={2.5} />
      </div>
    </div>
  );
};

export default RegisterPage;