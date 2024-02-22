import { GetStaticProps } from "next";

const Culture = ({ articles }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        <div className="grid grid-cols-3 gap-4">
          {articles.map((article) => (
            <div key={article.article_id} className="bg-white shadow-md p-4">
              <h2 className="text-xl font-bold">{article.title}</h2>
              <img src={article.image_url} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

//the API should probably be in its own file (but it works for now)

const API_KEY = "pub_38633481d241041912d1acb86a53616512d68";
export const getStaticProps = async () => {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=culture`
  );
  const articles = await res.json();
  console.log(articles);

  return {
    props: {
      articles: articles.results,
    },
  };
};

export default Culture;
