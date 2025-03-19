"use client";

import { useState, useEffect } from "react";

export default function LikeButton({ postId }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const storedLikes = localStorage.getItem(`post_${postId}_likes`) || "0";
    const wasLiked = localStorage.getItem(`post_${postId}_isLiked`) === "true";

    setLikes(parseInt(storedLikes, 10));
    setIsLiked(wasLiked);

    console.log(`Hyrdation completed for: ${postId}`);
  }, [postId]);

  const handleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    const newIsLiked = !isLiked;

    setLikes(newLikes);
    setIsLiked(newIsLiked);

    localStorage.setItem(`post_${postId}_likes`, newLikes.toString());
    localStorage.setItem(`post_${postId}_isLiked`, newIsLiked.toString());
  };

  return (
    <div className="flex items-center space-x-2 my-4">
      <button
        onClick={handleLike}
        className={`flex items-center space-x-1 px-4 py-2 rounded-md transition cursor-pointer
          ${
            isLiked
              ? "bg-red-600 text-red-100 hover:bg-red-400"
              : "bg-gray-950 hover:bg-gray-800"
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={isLiked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span>
          {isLiked ? "Liked" : "like"} ({likes})
        </span>
      </button>
    </div>
  );
}
