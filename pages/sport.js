import { useBookmark } from "../contexts/bookmarkContext";


const Sport = ({ articles }) => {
  const { bookmarks, addBookmark } = useBookmark();

  const isBookmarked = (articleId) =>
    bookmarks.some((bookmark) => bookmark.id === articleId);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        <div className="grid grid-cols-3 gap-4">
          {articles.map((article) => (
            <div key={article.article_id} className="bg-white shadow-md p-4">
              <button
                onClick={() => addBookmark(article)}
                className={`rounded-xl border-2 border-red-700 px-2 py-0.5 text-sm text-black bg-red-600/5 hover:text-grey hover:border-red-900 transition duration-200 hover:bg-blue-600/5 active:bg-blue-900/5 ${isBookmarked(article.article_id) ? "bookmarked" : ""
                  }`}
              >

                {isBookmarked(article.article_id) ? "Bookmarked" : "Bookmark"}
              </button>
              <h2 className="text-xl font-bold">{article.title}</h2>
              <img src={article.image_url} alt={article.title} className="w-full h-auto rounded-lg" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const API_KEY = "pub_38633481d241041912d1acb86a53616512d68"; // Replace with your actual API key
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=sports`
  );
  const data = await res.json();
  const articles = data.results || [];

  return {
    props: {
      articles,
    },
  };
}

export default Sport;
