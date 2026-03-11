import React from "react";
import { stories } from "../data/data";
import PostDisplayCard from "../component/postDisplayCard";
import usePostHook from "../hooks/usePostHook";

const StoryTile = ({ story, mystory = false, onOpenstory }) => {

  return (
    <div onClick={onOpenstory} className="flex size-24 flex-col items-center relative ">
      <div className="size-20 flex items-center overflow-visible justify-center rounded-full  border-3 border-gray-500/30">
        <img
          src={(story && story?.user?.avatar) || "/assets/noprofile.avif"}
          alt="story"
          className="size-20 rounded-full object-cover"
        />
      </div>
      {mystory && (
        <div className="size-4 bg-white flex items-center justify-center absolute rounded-full bottom-6 right-2 border-3 border-gray-500/30">
          +
        </div>
      )}
      <p className="truncate max-w-24 text-xs ">
        {story?.user.name || "nameet mandwal"}
      </p>
    </div>
  );
};

const Home = ({ open, setOpen, setStoryIndex }) => {
  const { posts, loading } = usePostHook()
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loading) {
    return (<>
      <div className="h-screen w-full flex items-center justify-center flex-col"></div>
      <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 animate-spin">
        <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
      </svg>
   </div>
   <div>Loading....</div> </>)
  }
  return (<>
    <div className="w-full overflow-x-scroll">
      <div className="px-2 flex items-center gap-2 w-fit py-2">
        {stories.map((story, idx) => (
          <StoryTile
            onOpenstory={() => {
              setStoryIndex(idx);
              setOpen(true);
            }}
            key={story.id}
            story={story}
          />
        ))}
      </div>
    </div>
    <div><div>
  {posts.map((post) => (
    <PostDisplayCard
      key={post.id}
      post={post}
      isLiked={post?.likes?.includes(isLoggedIn?.id)}
    />
  ))}
</div>

   
    </div>
  </>
  );
};

export default Home;
