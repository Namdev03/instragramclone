import React from 'react'

function PostTile({post}) {
  return (
     <div className="relative w-full aspect-square overflow-hidden group cursor-pointer">

      {/* Image */}
      <img
        src={post?.image}
        alt={post?.caption}
        className="w-full h-full object-cover"
      />
  </div>
  )
}

export default PostTile