const LibrarySkeleton = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="skeleton h-9 w-52 bg-[#242424]"></div>
        <div className="skeleton mt-3 h-4 w-80 bg-[#1b1b1b]"></div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-[#101010] p-5"
          >
            <div className="skeleton h-44 w-full rounded-xl bg-[#242424]"></div>
            <div className="skeleton mt-5 h-6 w-40 bg-[#242424]"></div>
            <div className="skeleton mt-4 h-4 w-full bg-[#1b1b1b]"></div>
            <div className="skeleton mt-2 h-4 w-4/5 bg-[#1b1b1b]"></div>
            <div className="mt-6 flex items-center justify-between">
              <div className="skeleton h-4 w-20 bg-[#242424]"></div>
              <div className="skeleton h-8 w-24 rounded-lg bg-[#242424]"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LibrarySkeleton;
