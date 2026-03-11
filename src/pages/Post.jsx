import React from "react";
import { useForm } from "react-hook-form";
import { postUploadApi } from "../Axios/Apicollaction";

function Post() {
  let loggerdInUser = JSON.parse(localStorage.getItem("loggedInUser"))
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("post payload", data);
    let payload = { ...data, likes: [], createdAt: new Date().toLocaleDateString(), userId: loggerdInUser.id }
    console.log(payload);
    try {
      const response = await postUploadApi(payload);

      if (response) {
        alert("Post uploaded successfully");
        reset();
      }

    } catch (error) {
      alert(error.message || "Failed to upload post");
    }


  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create New Post
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Image URL
            </label>

            <input
              type="url"
              placeholder="https://example.com/image.jpg"
              {...register("image", { required: "Image URL is required" })}
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Caption */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Caption
            </label>

            <textarea
              placeholder="Write something about your post..."
              rows="3"
              {...register("caption")}
              className="w-full border border-gray-300 rounded-lg p-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2.5 rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Share Post
          </button>

        </form>
      </div>
    </div>
  );
}

export default Post;