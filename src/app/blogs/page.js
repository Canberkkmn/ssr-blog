import { getPosts } from "../../lib/api";
import BlogCard from "../../components/BlogCard";

/**
 * 📌 BlogsPage (React Server Component)
 *
 * - This is a **React Server Component (RSC)** in Next.js 15.
 * - Fetches blog posts **on the server** using `getPosts()`, which makes an API call.
 * - The posts are fetched **before rendering**, meaning this page **does not run on the client**.
 * - Uses the `BlogCard` component to render each post.
 *
 * ✅ Server-Side Behavior:
 * - This page does **not use Client-Side Rendering (CSR)**.
 * - `getPosts()` fetches data from an external API.
 * - Since this is a Server Component, it **does not use React hooks like useState or useEffect**.
 */
export default async function BlogsPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to the Blog Page
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
