// context/PageTransitionC.js
'use client';
import { createContext, useState } from "react";

const PageTransitionC = createContext({
  completed: true,
  toggleCompleted: () => {},
});

export const PageTransitionProvider = ({ children }) => {
  const [completed, setCompleted] = useState(true);

  const toggleCompleted = (value) => setCompleted(value);

  return (
    <PageTransitionC.Provider value={{ completed, toggleCompleted }}>
      {children}
    </PageTransitionC.Provider>
  );
};

export default PageTransitionC;
