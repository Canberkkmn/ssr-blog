import Link from "next/link";

import "./globals.css";

export const metadata = {
  title: {
    default: "SSR Blog",
    template: "%s | SSR Blog",
  },
  description:
    "A simple blog application with server-side rendering using Next.js and Tailwind CSS.",
  keywords: [
    "Next.js",
    "SSR",
    "Server-Side Rendering",
    "Blog",
    "React",
    "JavaScript",
  ],
  authors: [{ name: "Canberk Kaman" }],
  creator: "Canberk Kaman",
  publisher: "SSR Blog",
  metadataBase: new URL("http://localhost:3000"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: "SSR Blog",
    description:
      "A simple blog application with server-side rendering using Next.js and Tailwind CSS.",
    url: "http://localhost:3000",
    siteName: "SSR Blog",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "../public/vercel.svg",
        width: 1200,
        height: 630,
        alt: "SSR Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSR Blog",
    description:
      "A simple blog application with server-side rendering using Next.js and Tailwind CSS.",
    images: ["../public/vercel.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10 h-16">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">SSR Blog</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-gray-300">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-4 mt-16 mb-16 min-h-[calc(100vh-128px)]">
          {children}
        </main>

        <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full h-16">
          <div className="container mx-auto text-center">
            <p>© {new Date().getFullYear()} SSR Blog - All rights reserved</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
