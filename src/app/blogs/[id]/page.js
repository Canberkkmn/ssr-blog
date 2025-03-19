import { getPostById, getPosts } from "../../../lib/api";
import Link from "next/link";
import LikeButton from "../../../components/LikeButton";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    return {
      title: "Blog didn't found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.body?.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.body?.slice(0, 160),
      type: "article",
      authors: [post.author?.name],
    },
  };
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post || post.comments.length === 0 || !post.author) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Blog could not be found</h1>
        <p className="mb-6">
          The blog post you are looking for does not exist.
        </p>
        <Link
          href="/blogs"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Return to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href="/blogs"
        className="inline-block mb-6 text-blue-500 hover:text-blue-700"
      >
        ← Return to Blog List
      </Link>

      <article className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-black">{post.title}</h1>
        <div className="mb-6 text-black">
          <p>
            <strong>Author:</strong> {post.author.name}
          </p>
          <p>
            <strong>Email:</strong> {post.author.email}
          </p>
        </div>

        <LikeButton postId={post.id} />

        <div className="prose max-w-none mb-8 text-black">
          <p>{post.body}</p>
          <p>{post.body}</p>
        </div>

        <div className="border-t pt-6 mt-8 text-black">
          <h3 className="text-xl font-semibold mb-4">
            Comments ({post.comments.length})
          </h3>

          <div className="space-y-4">
            {post.comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold">{comment.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{comment.email}</p>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
