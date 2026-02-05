import Navbar from "../Components/NavBar";
import PostCard from "../Components/PostCard";

export default function Home({ posts, setPosts }) {
  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto p-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onLike={handleLike} />
        ))}
      </main>
    </>
  );
}
