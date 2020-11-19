import { createContext, useReducer, useState } from "react";
import staysReducer from "./staysReducer";
import initialState from "../../stays.json";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [stays, dispatch] = useReducer(staysReducer, initialState);
  const [searchMode, setSearchMode] = useState(false);
  const [autoComplete, setAutoComplete] = useState([]);
  const [filter, setFilter] = useState("");

  const enterSearchMode = () => setSearchMode(true);
  const exitSearchMode = () => setSearchMode(false);

  const handleAutoComplete = value => {
    const city_country = stays
      .filter(
        stay =>
          value &&
          (stay.city.toLowerCase().includes(value.toLowerCase()) ||
            value.toLowerCase().includes(stay.city.toLowerCase()))
      )
      .map(stay => `${stay.city}, ${stay.country}`);

    setAutoComplete([...new Set(city_country)]);
  };

  const handleFilterByCity = city => {
    dispatch({ type: "FILTER_BY_CITY", payload: city });
    setFilter(city);
    exitSearchMode();
  };

  const handleFilterByGuestsNumber = guestsNumber =>
    dispatch({ type: "FILTER_BY_GUESTS_NUMBER", payload: guestsNumber });

  return (
    <FilterContext.Provider
      value={{
        stays,
        filter,
        searchMode,
        autoComplete,
        enterSearchMode,
        exitSearchMode,
        handleAutoComplete,
        handleFilterByCity,
        handleFilterByGuestsNumber
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
