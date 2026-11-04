import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import stc from "string-to-color";
import { Tag } from "./tag";
import Link from "next/link";

dayjs.extend(relativeTime);

export function ArticleCard({ article, noImage, horizontal }) {
  return (
    <div
      className="shadow-lg rounded-lg overflow-hidden p-4 border border-border bg-background flex-1 flex flex-col justify-between
          hover:shadow-2xl shadow-black/80 dark:shadow-purple-400 transition duration-200">
      <Link
        href={`/blog/${article.id}` || "#"}
        target="_blank"
        className={
          horizontal ? "flex flex-col sm:flex-row sm:gap-4 items-center" : ""
        }>
        {!noImage && article.social_image && (
          <img
            className={`aspect-video hover:scale-101 transition duration-200 object-cover block mb-4 w-full rounded-md shadow-md ${horizontal ? "sm:w-1/2 sm:shrink-0 sm:self-start" : ""}`}
            src={article.social_image}
            alt={article.title}
          />
        )}

        <div>
          <div className="text-purple-600 dark:text-purple-400 text-sm mb-1">
            {dayjs(article.published_timestamp).fromNow()}
          </div>
          <div className="font-bold text-lg mb-2">{article.title}</div>
          <div className="text-muted text-sm mb-4 line-clamp-3">
            {article.description}
          </div>
        </div>
      </Link>
      <div className="flex flex-wrap gap-2 mt-auto">
        {article.tag_list?.map((tag) => (
          <Link href={`https://dev.to/t/${tag}`} key={tag}>
            <Tag title={tag} color={stc(tag)} />
          </Link>
        ))}
      </div>
    </div>
  );
}
