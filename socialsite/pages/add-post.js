import Navbar from "../Components/NavBar";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddPost({ posts, setPosts }) {
  const [user, setUser] = useState("");
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    setPosts([
      ...posts,
      {
        id: Date.now(),
        user,
        text,
        likes: 0,
      },
    ]);

    toast.success("Post added successfully!");
    router.push("/");
  };

  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="User name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <textarea
            placeholder="Post text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Post
          </button>
        </form>
      </main>
    </>
  );
}
