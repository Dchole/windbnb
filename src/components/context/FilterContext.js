import { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [searchMode, setSearchMode] = useState(false);
  const [filter, setFilter] = useState("");

  const handleToggleSearchMode = () => setSearchMode(true);
  const handleFilterInput = event => setFilter(event.target.value);

  return (
    <FilterContext.Provider
      value={{ searchMode, filter, handleToggleSearchMode, handleFilterInput }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
