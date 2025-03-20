import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IoArrowUndo } from "react-icons/io5";

function Form({ show, handleForm, handleFormSubmit }) {
  const { register, handleSubmit } = useForm();
  console.log(register);

  return (
    <div
      className={`h-screen w-full flex flex-col items-center gap-40 bg-[#dadada5b] backdrop-blur-xs transition-display duration-700 ease-in-out ${
        show ? "opacity-100" : "opacity-0 hidden"
      } absolute top-0`}
    >
      <div className="w-full  flex items-center p-4 rounded-md shadow-md">
        <span
          onClick={handleForm}
          title="get Back"
          className="ml-4 p-4 bg-orange-400 rounded-full cursor-pointer"
        >
          <IoArrowUndo />
        </span>
      </div>
      <form
        onSubmit={handleSubmit((data) => handleFormSubmit(data))}
        className="w-full max-w-md bg-white/30 backdrop-blur-lg rounded-lg p-6 shadow-lg"
      >
        <div className="mb-4">
          <input
            type="text"
            {...register("song")}
            placeholder="Enter the Song Name"
            className="w-full px-3 py-2 bg-white/50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            {...register("artist")}
            placeholder="Enter the Artist Name"
            className="w-full px-3 py-2 bg-white/50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            {...register("image")}
            placeholder="Enter the image link"
            className="w-full px-3 py-2 bg-white/50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-orange-400 text-white font-semibold rounded hover:bg-orange-500 transition-colors cursor-pointer"
        >
          Add to the Playlist
        </button>
      </form>
    </div>
  );
}

export default Form;
