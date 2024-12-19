import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
        <div className="w-full mb-4">
          
          <div className="relative w-full pb-[68%] overflow-hidden rounded-xl bg-gray-200">
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 hover:text-gray-600 transition-colors">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
