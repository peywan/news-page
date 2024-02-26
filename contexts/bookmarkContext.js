import React, { createContext, useContext, useState, useEffect } from 'react';

const BookmarkContext = createContext();

export const useBookmark = () => useContext(BookmarkContext);

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem('bookmarks');
      return localData ? JSON.parse(localData) : [];
    }
    return [];
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  const addBookmark = (article) => {
    const newBookmarks = bookmarks.some(bookmark => bookmark.article_id === article.article_id)
      ? [...bookmarks]
      : [...bookmarks, article];
    setBookmarks(newBookmarks);
  };

  const removeBookmark = (articleId) => {
    const updatedBookmarks = bookmarks.filter(bookmark => bookmark.article_id !== articleId);
    setBookmarks(updatedBookmarks);
  };

  const value = { bookmarks, addBookmark, removeBookmark };

  return <BookmarkContext.Provider value={value}>{children}</BookmarkContext.Provider>;
};