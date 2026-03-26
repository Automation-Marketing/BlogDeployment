import Link from "next/link";

export default function SampleBlogPage() {
  const blog = {
    title: "The Art of Simplicity in Design",
    date: "2026-03-26",
    imageUrl:
      "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=2400&q=80",
    content: {
      intro:
        "Simplicity is not the absence of detail — it’s the presence of intention. In a world of constant noise, minimal design offers space to think, breathe, and focus on what matters.",
      sections: [
        {
          heading: "Why simplicity feels premium",
          body:
            "Luxury isn’t always loud. Editorial design earns trust through restraint: generous whitespace, crisp typography, and clear hierarchy. When every element has a reason to exist, the experience feels deliberate — and deliberate feels expensive.",
        },
        {
          heading: "The discipline of removing",
          body:
            "Good minimalism is subtraction with taste. Remove features that don’t serve the story. Reduce decorative choices. Keep the structure, elevate the rhythm. The goal isn’t emptiness; it’s clarity.",
        },
        {
          heading: "Typography as the voice",
          body:
            "When color and ornament step back, type does the talking. Pair a confident sans for headings with a classic serif for long-form reading. Let spacing and line-length carry the tone.",
        },
      ],
      conclusion:
        "Simplicity is a craft. When you design with fewer ingredients, quality becomes visible. And that’s the quiet signature of premium work.",
    },
  };

  return (
    <div className="animate-fade-in">
      <section className="mx-auto w-full max-w-6xl px-6 pt-12">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-black/70 hover:text-black"
          >
            ← Back to Home
          </Link>
          <div className="text-xs font-medium uppercase tracking-widest text-black/60">
            {blog.date}
          </div>
        </div>

        <h1 className="mt-6 font-sans text-4xl font-bold tracking-tight text-black md:text-5xl">
          {blog.title}
        </h1>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="h-80 w-full object-cover md:h-[420px]"
            loading="eager"
          />
        </div>
      </section>

      <article className="mx-auto w-full max-w-3xl px-6 pb-16 font-serif">
        <p className="mt-8 text-base leading-8 text-black/85">{blog.content.intro}</p>

        {blog.content.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-black">
              {s.heading}
            </h2>
            <p className="mt-4 text-base leading-8 text-black/85">
              {s.body}
            </p>
          </section>
        ))}

        <div className="mt-12 rounded-2xl border border-[#e5e5e5] bg-white/70 p-6">
          <blockquote className="text-base leading-8 text-black/75">
            {blog.content.conclusion}
          </blockquote>
        </div>
      </article>
    </div>
  );
}

