import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const headingFont = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
});

const contentFont = Playfair_Display({
  variable: "--font-content",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MONO.BLOG",
  description: "A premium minimal editorial blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${contentFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        <header className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-sm font-bold tracking-tight text-black"
              aria-label="Home"
            >
              MONO.BLOG
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="text-black/70 hover:text-black">
                Home
              </Link>
              <Link
                href="/sample"
                className="text-black/70 hover:text-black"
              >
                Sample Blog
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
