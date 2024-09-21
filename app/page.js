import prisma from "@/lib/prisma";
import PostCard from "./components/Post";

async function getPosts(){
  const posts= await prisma.post.findMany({
    where:{published:true},
    include:{
      author:{
        select:{name:true, email:true}
      }
    }
  });
  return posts;
}


export default async function Home() {
  const posts= await getPosts();
  console.log({posts});
  return (
    <main>
      <h1 className="text-center">FEED</h1>
      <div className="p-6 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
    </main>
  );
}
