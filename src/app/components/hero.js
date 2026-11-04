import { ArticleCard } from "../common/article-card";

export function Hero({ articles }) {
  const latest4Articles = articles
    ?.slice()
    .sort(
      (a, b) =>
        new Date(b.published_timestamp) - new Date(a.published_timestamp),
    )
    .slice(0, 4);
  const [first, second, third, fourth] = latest4Articles ?? [];

  if (!first) return null;

  return (
    <div className="p-5">
      <div className="font-bold text-xl mb-4">Recent blog posts</div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="md:row-span-2 flex">
          <ArticleCard article={first} />
        </div>

        {second && <ArticleCard horizontal article={second} />}
        {third && <ArticleCard article={third} horizontal />}

        {fourth && (
          <div className="md:col-span-2 flex">
            <ArticleCard article={fourth} horizontal />
          </div>
        )}
      </div>
    </div>
  );
}
