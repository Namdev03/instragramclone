import React, { useEffect, useState } from "react";
import PostTile from "../component/PostTile";
import { pagePaths } from "../router/pagePaths";
import { fetchuserpostApi } from "../Axios/Apicollaction";


const Profile = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));

  const userStats = [
    { title: "posts", count: 0 },
    { title: "followers", count: 0 },
    { title: "following", count: 0 }
  ];
  const [post, setpost] = useState([])

  function handlelogout() {
    let ask = window.confirm("are you sure to logout")
    if (ask) {
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("loginStatus")
      window.location.reload()
      window.location.replace(pagePaths.login)
    }

  }
  async function loadUserpost() {
    try {
      const response = await fetchuserpostApi(isLoggedIn?.id);
      setpost(response)
    } catch (error) {
 
      console.log(error);

    }
  }
  useEffect(() => {
    loadUserpost()
  }, [])

  return (
    <section className="bg-gray-50 min-h-screen flex justify-center">
      <div className="max-w-5xl w-full px-4 md:px-8">

        {/* ===== PROFILE HEADER ===== */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 py-10">

          {/* Profile Image */}
          <div className="w-28 h-28 md:w-36 md:h-36">
            <img
              src="https://via.placeholder.com/150"
              alt="profile"
              className="w-full h-full rounded-full object-cover border"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">

            {/* Username */}
            <h2 className="text-xl md:text-2xl font-light">
              {isLoggedIn?.fullName || "No Name"}
            </h2>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-8 mt-4">
              {userStats.map((stat, idx) => (
                <p key={idx} className="text-sm">
                  <span className="font-semibold">{stat.count}</span>{" "}
                  {stat.title}
                </p>
              ))}
            </div>

            {/* Bio */}
            <div className="mt-4 text-sm">
              <p className="font-semibold">{isLoggedIn?.fullName}</p>
              <p>Web Developer 💻</p>
              <p>{isLoggedIn?.bio || "No bio available"}</p>
            </div>
            <button onClick={handlelogout} className="bg-red-700 rounded-md text-white px-2 py-1">Logout</button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t"></div>

        {/* ===== POSTS GRID ===== */}
        <div className=" grid grid-cols-2  gap-1">
          {post.map((post) => (
            <PostTile key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Profile;