import { useContext, useState, createContext } from "react";

const BookmarkContext = createContext();

//A custom hook to be used by components to access the bookmark context (the array and the functions )
export const useBookmark = () => {
  return useContext(BookmarkContext);
};

//The provider component (could be moved to its own component)
export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  //functions for adding and removing bookmarks
  const addBookmark = (article) => {
    setBookmarks([...bookmarks, article]);
  };

  const removeBookmark = (articleId) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== articleId));
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
