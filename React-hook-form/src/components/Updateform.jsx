import React from "react";
import { useForm } from "react-hook-form";

const Updateform = ({ setUsers, users, setUpdate, update }) => {
  let { name, mobile, image, email } = users[update];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name,
      email,
      image,
      mobile,
    },
  });

  const formSubmit = (data) => {
    setUsers((currentUsers) =>
      currentUsers.map((user, index) => (index === update ? data : user)),
    );
    reset();
    setUpdate(null);
  };

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h1 className="text-2xl mb-5">Update User</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="p-5 w-80 rounded border border-zinc-700 bg-zinc-900 flex flex-col gap-4 "
        action=""
      >
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^\S+$/,
              message: "Blank space is present",
            },
          })}
          className="p-2 bg-zinc-800 border border-zinc-700 rounded"
          type="text"
          placeholder="Name"
        />
        {errors.name && (
          <p className="text-red-500 -mb-1.25 -mt-3.75 mx-2">
            {errors.name.message}
          </p>
        )}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter valid email",
            },
          })}
          className="p-2 bg-zinc-800 border border-zinc-700 rounded"
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 -mb-1.25 -mt-3.75 mx-2">
            {errors.email.message}
          </p>
        )}
        <input
          {...register("mobile", {
            required: "Mobile no is required",
            minLength: {
              value: 10,
              message: "Minimun length are 10 digit",
            },
            maxLength: {
              value: 10,
              message: "Maximun length are 10 digit",
            },
          })}
          className="p-2 bg-zinc-800 border border-zinc-700 rounded"
          type="text"
          inputMode="numeric"
          placeholder="Mobile no."
        />
        {errors.mobile && (
          <p className="text-red-500 -mb-1.25 -mt-3.75 mx-2">
            {errors.mobile.message}
          </p>
        )}
        <input
          {...register("image", {
            required: "Image URL is required",
          })}
          className="p-2 bg-zinc-800 border border-zinc-700 rounded"
          type="url"
          placeholder="Image"
        />
        {errors.image && (
          <p className="text-red-500 -mb-1.25 -mt-3.75 mx-2">
            {errors.image.message}
          </p>
        )}
        <button className="py-2 bg-blue-700 rounded text-xl font-semibold">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Updateform;
