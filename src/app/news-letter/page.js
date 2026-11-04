import Link from "next/link";
import { ArticleCard } from "../common/article-card";

export default async function Home() {
  const data = await fetch(
    `https://dev.to/api/articles?username=sarvar_04&per_page=3`,
  );
  const articles = await data.json();
  return (
    <div>
      <div className="text-center flex flex-col gap-3">
        <p className="text-[#8f71ca] dark:text-[#7F56D9] text-xl">Newsletter</p>

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

      <div className="grid grid-cols-3 gap-8 ">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
