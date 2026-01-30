import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
 /*  const [search, setSearch] = useState(""); */
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <SearchContext.Provider
      value={{
       /*  search, */
        /* setSearch, */
        category,
        setCategory,
        rating,
        setRating,
        price,
        setPrice,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
