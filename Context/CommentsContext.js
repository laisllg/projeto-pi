"use client";

import { createContext, useContext, useState } from "react";

const CommentsContext = createContext({});

export const CommentsContextProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  const getComments = (categoria) => {
    const filteredComments = comments.filter((c) => c.categoria === categoria);
    return filteredComments;
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <CommentsContext.Provider value={{ getComments, addComment }}>
      {children}
    </CommentsContext.Provider>
  );
};

export const useCommentsContext = () => useContext(CommentsContext);
