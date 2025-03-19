import Image from "next/image";
import Link from "next/link";

/**
 * BlogCard component is a server component
 * Gets post data as prop 
 */
export default function BlogCard({ post }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
        <Image
          src={`https://picsum.photos/seed/${post.id}/800/600`}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <h2 className="text-xl font-semibold mb-3 line-clamp-2 text-black whitespace-nowrap overflow-hidden text-ellipsis w-full block">
        {post.title}
      </h2>
      <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
      <Link
        href={`/blogs/${post.id}`}
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Read More
      </Link>
    </div>
  );
}
