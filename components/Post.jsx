"use client";

import { useRouter } from "next/navigation";

const PostCard = ({ post }) => {
const router= useRouter();
  async function handleClick(){
    
        
    try {
        await fetch(`/api/deletepost/${post.id}`, {
            method: 'DELETE'
        })
        router.refresh()
    } catch(e){
        console.error(e)
    }
}
  return (
    <div className="border border-gray-900 rounded-lg p-4 mb-4 bg-black shadow-md">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="mt-2 text-gray-700">{post.content}</p>
      <p className="mt-2">
        <strong>Published:</strong> {post.published ? 'Yes' : 'No'}
      </p>
      {post.author && (
        <div className="mt-4 border-t border-gray-900 pt-2">
          <h4 className="font-semibold">Author Details:</h4>
          <p>
            <strong>Name:</strong> {post.author.name || 'N/A'}
          </p>
          
        </div>
      )}
      <button className="btn btn-red bg-red-500 my-5" onClick={handleClick}>DELETE</button>
    </div>
  );
};
export default PostCard;

