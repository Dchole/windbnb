import "@material/react-floating-label/dist/floating-label.css";
import "@material/react-button/dist/button.css";
import "@material/react-list/dist/list.css";
import "./styles/filter-sheet.scss";

import { useCallback, useContext, useEffect, useState } from "react";
import List, {
  ListItem,
  ListItemText,
  ListItemGraphic
} from "@material/react-list";
import Button from "@material/react-button";
import FloatingLabel from "@material/react-floating-label";
import Icon from "./Icon";
import { FilterContext } from "./context/FilterContext";

const FilterSheet = () => {
  const [float, setFloat] = useState(false);
  const [city, setCity] = useState("");

  const {
    autoComplete,
    exitSearchMode,
    handleAutoComplete,
    handleFilterByCity
  } = useContext(FilterContext);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(city);
    handleFilterByCity(city);
  };

  const handleFieldFocus = () => setFloat(true);
  const handleFieldBlur = event => !event.target.value && setFloat(false);
  const handleCityInput = event => {
    setCity(event.target.value);
    handleAutoComplete(event.target.value);
  };

  const handleClickAway = useCallback(
    event => event.target.id === "backdrop" && exitSearchMode(),
    [exitSearchMode]
  );

  useEffect(() => {
    window.addEventListener("click", handleClickAway);

    return () => window.removeEventListener("click", handleClickAway);
  }, [handleClickAway]);

  return (
    <>
      <div id="backdrop" />
      <section id="drawer">
        <form onSubmit={handleSubmit} id="filter-input">
          <div id="location">
            <FloatingLabel htmlFor="location--fields" float={float}>
              Location
            </FloatingLabel>
            <input
              id="location--fields"
              name="location"
              type="text"
              value={city}
              onFocus={handleFieldFocus}
              onBlur={handleFieldBlur}
              onChange={handleCityInput}
              autoFocus
            />
          </div>
          <div id="guests">
            <FloatingLabel htmlFor="guests--fields" float>
              Guests
            </FloatingLabel>
            <input
              id="guests--fields"
              name="guests"
              type="text"
              placeholder="Add guests"
            />
          </div>
          <Button
            type="submit"
            icon={<Icon icon="search" />}
            disabled={!Boolean(city)}
            unelevated
          >
            Search
          </Button>
        </form>
        <section id="filter-result">
          <List>
            {autoComplete.map(location => (
              <ListItem key={location}>
                <ListItemGraphic graphic={<Icon icon="location_on" />} />
                <ListItemText primaryText={location} />
              </ListItem>
            ))}
          </List>
        </section>
      </section>
    </>
  );
};

export default FilterSheet;
