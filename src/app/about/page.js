import Link from "next/link";

export const metadata = {
  title: "About Us - SSR Blog",
  description: "Learn more about our blog and mission.",
  openGraph: {
    title: "About Us - SSR Blog",
    description: "Discover our blog's story, mission, and the team behind it.",
    type: "website",
    url: "https://yourdomain.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

      <p className="text-lg leading-relaxed text-center mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Sed cursus, sapien non cursus consequat, felis nunc hendrerit justo, non
        dignissim nulla velit vel risus.
      </p>

      <div className="p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold  mb-4">Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          vehicula nisl eu tortor sagittis, et luctus eros feugiat. Duis id
          metus vitae risus vestibulum suscipit. Aenean ac urna et metus
          vulputate dictum sed vel justo.
        </p>
      </div>

      <div className="mt-6 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
          lacus eu arcu porttitor euismod. Donec scelerisque dui in suscipit
          luctus. Nam ac malesuada dolor, ut dapibus sapien.
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/blogs"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition"
        >
          Explore Our Blog
        </Link>
      </div>
    </div>
  );
}
