import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">News Site</h1>
      </header>
      <div>
        <h1>
          hello world
        </h1>
      </div>
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

      <footer className="bg-blue-500 text-white p-4">
        <p>©  2024 News Site</p>
      </footer>
    </div>
  );
};

export default HomePage;
