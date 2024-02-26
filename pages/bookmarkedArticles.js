import { useBookmark } from "../contexts/bookmarkContext";
import { useEffect, useState } from 'react';

const BookmarkedArticles = () => {
  const { bookmarks, removeBookmark } = useBookmark();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Sätter isClient till true när komponenten har monterats, vilket indikerar att vi är på klienten
    setIsClient(true);
  }, []);

  // Rendera endast innehållet om vi är säkra på att vi är på klienten
  return (
    <div className="mx-auto p-4 space-y-4">
      <h1 className="text-xl font-extrabold">Your Bookmarks</h1>
      {isClient && bookmarks.map((article) => (
        <div
          key={article.article_id}
          className="shadow-md rounded-lg p-4 bg-white"
        >
          <h2 className="text-xl font-bold">{article.title}</h2>
          <img
            src={article.image_url}
            className="w-64 h-auto rounded-lg"
            alt={article.title}
          />
          <button
            onClick={() => removeBookmark(article.article_id)} // Anropa removeBookmark när knappen klickas
            className="mt-2 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
          >
            Ta bort
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookmarkedArticles;
