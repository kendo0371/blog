export const instant = false;

export default async function articlePage({ params }) {
  const { articleId } = await params;
  const data = await fetch(`https://dev.to/api/articles/${articleId}`);
  const article = await data.json();

  return (
    <div
      className="prose dark:prose-invert mx-auto"
      dangerouslySetInnerHTML={{ __html: article.body_html }}></div>
  );
}
