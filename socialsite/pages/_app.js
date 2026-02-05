import "@/styles/globals.css";
import { useState } from "react";

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
      <Component {...pageProps} posts={posts} setPosts={setPosts} />
    </>
  );
}
