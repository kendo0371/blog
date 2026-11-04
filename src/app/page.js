import Link from "next/link";
import { ArticleCard } from "./common/article-card";
import { Hero } from "./components/hero";
export const instant = false;

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const page = params?.page || "1";

  const data = await fetch(
    `https://dev.to/api/articles?username=sarvar_04&per_page=6&page=${page}`,
  );
  const articles = await data.json();

  return (
    <div className="p-10">
      <Hero articles={articles} />
      <div className="p-10 mx-auto">
        <div className="font-bold mb-5 text-xl">All blog posts</div>
        <div>
          <div className="grid md:grid-cols-2"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 xl:grid-cols-3 ">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="flex justify-center my-8">
          {["1", "2", "3", "4", "5"].map((p) => (
            <Link
              key={p}
              className={`px-3 py-1 rounded-full hover:bg-purple-200 dark:hover:bg-purple-900 m-2 ${page === p ? "font-extrabold " : ""}`}
              href={`?page=${p}`}>
              {p}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
