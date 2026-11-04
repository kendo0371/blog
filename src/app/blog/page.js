import Link from "next/link";
import { ArticleCard } from "../common/article-card";

export const instant = false;

export default async function Page() {
  const [articlesRes, articleRes] = await Promise.all([
    fetch(`https://dev.to/api/articles?username=sarvar_04&per_page=12`),
    fetch(`https://dev.to/api/articles/naveena_rk_46207795d265c/blog-2ndp`),
  ]);
  const articles = await articlesRes.json();
  const article = await articleRes.json();

  return (
    <div className="flex gap-8 mx-5 md:mx-20">
      <div className="hidden md:grid md:grid-cols-1 gap-8 flex-1">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <div className="flex-2 min-w-0 mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">{article.title}</h1>

        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: article.body_html }}></div>

        <div className="text-center flex flex-col gap-3">
          <p className="text-[#8f71ca] dark:text-[#7F56D9] text-xl">
            Newsletter
          </p>

          <h1 className="dark:text-white text-5xl">Stories and interviews</h1>

          <p className="text-[#323336] dark:text-[#C0C5D0] text-xl">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>

          <div className="flex justify-center gap-10">
            <input
              placeholder="Enter your email"
              type=""
              className="w-70 rounded-xl border-2 border-purple-400 px-4 focus:outline-0"></input>

            <button className="bg-purple-400 px-5 py-2 rounded-xl cursor-pointer transition duration-150 hover:bg-purple-500 active:bg-purple-600 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400">
              Subscribe
            </button>
          </div>

          <div className="flex gap-1 m-auto">
            <p>We care about your data in our</p>

            <Link href="" className="border-b dark:border-b-purple-200">
              privacy policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
