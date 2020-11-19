import "./App.scss";
import { lazy, Suspense, useContext } from "react";
import Header from "./components/Header";
import Listing from "./components/Listing";
import { FilterContext } from "./components/context/FilterContext";

const FilterDrawer = lazy(() => import("./components/FilterDrawer"));
const FilterSheet = lazy(() => import("./components/FilterSheet"));

const App = () => {
  const { searchMode } = useContext(FilterContext);

  return (
    <>
      <Header />
      <Listing />
      {searchMode && (
        <Suspense fallback={<div id="backdrop" />}>
          <FilterDrawer>
            <FilterSheet />
          </FilterDrawer>
        </Suspense>
      )}
      <footer>Derek Oware @ DevChallenges.io</footer>
    </>
  );
};

export default App;
