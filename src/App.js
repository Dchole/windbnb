import "./App.scss";
import Header from "./components/Header";
import Listing from "./components/Listing";
import FilterSheet from "./components/FilterSheet";
import FilterContextProvider from "./components/context/FilterContext";

const App = () => (
  <FilterContextProvider>
    <Header />
    <Listing />
    <FilterSheet />
    <footer>Derek Oware @ DevChallenges.io</footer>
  </FilterContextProvider>
);

export default App;
