import React from "react";

const PostDisplayCard = ({ post, isLiked }) => {

    return (
        <div className="bg-gray-100 py-6">
            <div className="max-w-md mx-auto">

                <div className="bg-white border rounded-md">

                    {/* Header */}
                    <div className="flex justify-between items-center p-3">
                        <div className="flex items-center">
                            <img
                                src={post.avatar}
                                alt="avatar"
                                className="w-9 h-9 rounded-full mr-3"
                            />
                            <span className="font-semibold">{post.userId}</span>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>

                    {/* Post Image */}
                    <img
                        src={post.image}
                        alt="post"
                        className="w-full object-cover"
                    />

                    {/* Actions */}
                    <div className="p-3">

                        <div className="flex space-x-4 text-xl mb-2">

                            {/* Like */}
                            <div className="flex gap-1 items-center">
                                {!isLiked ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" strokeWidth={1.5}
                                        stroke="currentColor" className="size-6">

                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935
                      0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733
                      -4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12
                      9 12s9-4.78 9-12Z" />

                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="red"
                                        className="size-6">

                                        <path d="m11.645 20.91..." />
                                    </svg>
                                )}

                                <span>{post?.likes?.length || 0}</span>
                            </div>

                            {/* Comment */}
                            <div className="flex gap-0.5 justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" /> </svg><span>0</span>
                                </div>
                                {/* Save */}
                                <div className="flex gap-0.5 justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" /> </svg><span>0</span> </div>
                            </div>

                            <p className="font-semibold">
                                {post?.likes?.length || 0} likes
                            </p>

                            <p>
                                <span className="font-semibold">{post.username}</span>{" "}
                                {post.caption}
                            </p>

                        </div>

                    </div>

                </div>
            </div>
            );
};

            export default PostDisplayCard;
