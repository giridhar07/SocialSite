import "@/styles/globals.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Giridhar",
      text: "Hello! This is my first post.",
      likes: 0,
    },
  ]);

  return (
    <>
      <Toaster position="top-right" />
      <Component {...pageProps} posts={posts} setPosts={setPosts} />
    </>
  );
}
