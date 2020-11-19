import "./styles/main.scss";
import PropertyCard from "./PropertyCard";
import { useContext } from "react";
import { FilterContext } from "./context/FilterContext";

const Listing = () => {
  const { stays } = useContext(FilterContext);

  return (
    <main>
      <div id="heading">
        <h1>Stays in Finland</h1>
        <span>{stays.length}+ stays</span>
      </div>
      <section>
        {stays.map(stay => (
          <PropertyCard key={stay.title} stay={stay} />
        ))}
      </section>
    </main>
  );
};

export default Listing;
