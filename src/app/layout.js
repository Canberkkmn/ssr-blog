import "./globals.css";

export const metadata = {
  title: "SSR Blog",
  description:
    "A simple blog application with server-side rendering using Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10 h-16">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">SSR Blog</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/blogs" className="hover:text-gray-300">
                    Blogs
                  </a>
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
            <p>© {new Date().getFullYear()} SSR Blog</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
