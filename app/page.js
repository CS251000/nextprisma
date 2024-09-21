import prisma from "@/lib/prisma";
import PostCard from "../components/Post";
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true},
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main>
      <h1 className="text-center">FEED</h1>
      <div className="p-6 bg-black min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <Link href={'/add-post'}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Add Post
        </button></Link>
      </div>
    </main>
  );
}
