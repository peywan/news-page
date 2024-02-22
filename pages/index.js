const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        <div className="grid grid-cols-3 gap-4">
          {/* News articles will go here */}
          <div className="bg-white shadow-md p-4">
            <h2 className="text-xl font-bold">Article Title</h2>
            <p className="text-gray-700">Article summary...</p>
          </div>
          {/* Repeat the above div for each article */}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
