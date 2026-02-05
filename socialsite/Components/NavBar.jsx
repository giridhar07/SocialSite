import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold text-lg">Mini Social App</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">
          Feed
        </Link>
        <Link href="/add-post" className="hover:underline">
          Add Post
        </Link>
      </div>
    </nav>
  );
}