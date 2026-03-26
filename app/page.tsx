export default function Home() {
  const blog = {
    title: "The Art of Simplicity in Design",
    excerpt:
      "Simplicity is not the absence of detail — it’s the presence of intention. Minimal design makes room for clarity, focus, and premium confidence.",
    date: "2026-03-26",
    imageUrl:
      "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=2400&q=80",
  };

  return (
    <div className="animate-fade-in">
      <section className="mx-auto w-full max-w-6xl px-6 pt-12">
        <div className="flex flex-col gap-3">
          <h1 className="font-sans text-4xl font-bold tracking-tight text-black md:text-5xl">
            Editorial Minimalism
          </h1>
          <p className="max-w-2xl text-base leading-7 text-black/70">
            A premium black-and-white blog experience. Smooth hover motion,
            refined typography, and intentional whitespace.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pt-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="group rounded-2xl border border-[#e5e5e5] bg-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(0,0,0,0.06)]">
            <a href="/sample" className="block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-white">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <dl className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-black/60">
                  <div>{blog.date}</div>
                  <div className="h-1 w-1 rounded-full bg-black/25" aria-hidden="true" />
                  <div className="font-medium uppercase tracking-widest">Blog</div>
                </dl>
                <h2 className="mt-4 text-xl font-bold tracking-tight text-black">
                  {blog.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-black/80">
                  {blog.excerpt}
                </p>
              </div>
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
