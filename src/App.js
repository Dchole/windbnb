import "./App.scss";
import Header from "./components/Header";
import Listing from "./components/Listing";
import FilterSheet from "./components/FilterSheet";
import FilterDrawer from "./components/FilterDrawer";
import { useContext } from "react";
import { FilterContext } from "./components/context/FilterContext";

const App = () => {
  const { searchMode } = useContext(FilterContext);

  return (
    <>
      <Header />
      <Listing />
      {searchMode && (
        <FilterDrawer>
          <FilterSheet />
        </FilterDrawer>
      )}
      <footer>Derek Oware @ DevChallenges.io</footer>
    </>
  );
};

export default App;
