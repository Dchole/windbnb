import "./styles/main.scss";
import stays from "../stays.json";
import PropertyCard from "./PropertyCard";

const Listing = () => {
  return (
    <main>
      <div id="heading">
        <h1>Stays in Finland</h1>
        <span>12+ stays</span>
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
