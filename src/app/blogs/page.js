import { getPosts } from "../../lib/api";
import BlogCard from "../../components/BlogCard";

export const dynamic = "force-dynamic";

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
