export default function PostCard({ post, onLike }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="font-semibold text-gray-800">{post.user}</h3>
      <p className="text-gray-600 my-2">{post.text}</p>

      <button
        onClick={() => onLike(post.id)}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        👍 <span>{post.likes}</span>
      </button>
    </div>
  );
}
