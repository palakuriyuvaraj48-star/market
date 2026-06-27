export const ProductSkeleton = () => (
  <div className="glass animate-pulse rounded-xl p-3">
    <div className="aspect-[4/3] rounded-lg bg-slate-200 dark:bg-white/10" />
    <div className="mt-4 h-4 w-3/4 rounded bg-slate-200 dark:bg-white/10" />
    <div className="mt-3 h-3 w-1/2 rounded bg-slate-200 dark:bg-white/10" />
    <div className="mt-5 h-10 rounded-lg bg-slate-200 dark:bg-white/10" />
  </div>
);

export const SkeletonGrid = ({ count = 8 }) => (
  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
    {Array.from({ length: count }).map((_, index) => (
      <ProductSkeleton key={index} />
    ))}
  </div>
);
