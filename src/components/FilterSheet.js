import "@material/react-floating-label/dist/floating-label.css";
import "@material/react-button/dist/button.css";
import "@material/react-list/dist/list.css";
import "./styles/filter-sheet.scss";

import { useContext, useEffect, useState } from "react";
import List, {
  ListItem,
  ListItemText,
  ListItemGraphic
} from "@material/react-list";
import Button from "@material/react-button";
import FloatingLabel from "@material/react-floating-label";
import Icon from "./Icon";
import useClickAwayListener from "../hooks/useClickAwayListener";
import useMediaQuery from "../hooks/useMediaQuery";
import { FilterContext } from "./context/FilterContext";

const FilterSheet = () => {
  const {
    filter,
    autoComplete,
    exitSearchMode,
    handleAutoComplete,
    handleFilterByCity
  } = useContext(FilterContext);

  const [float, setFloat] = useState(false);
  const [city, setCity] = useState(filter);
  const clickedAway = useClickAwayListener();
  const mobile = useMediaQuery("sm");

  const handleSubmit = event => {
    event.preventDefault();
    handleFilterByCity(city);
  };

  useEffect(() => {
    if (clickedAway) exitSearchMode();
  }, [exitSearchMode, clickedAway]);

  const handleListItemClick = value => () => handleFilterByCity(value);
  const handleFieldFocus = () => setFloat(true);
  const handleFieldBlur = () => !city && setFloat(false);

  const handleCityInput = event => {
    setCity(event.target.value);
    handleAutoComplete(event.target.value);
  };

  return (
    <>
      <div id="backdrop" />
      <section id="drawer">
        {mobile && <p>Edit your search</p>}
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
          {!mobile && (
            <Button type="submit" icon={<Icon icon="search" />} unelevated>
              Search
            </Button>
          )}
        </form>
        <section id="filter-autocomplete">
          <List>
            {autoComplete.map(location => (
              <ListItem key={location} onClick={handleListItemClick(location)}>
                <ListItemGraphic graphic={<Icon icon="location_on" />} />
                <ListItemText primaryText={location} />
              </ListItem>
            ))}
          </List>
        </section>
        {mobile && (
          <div id="button-wrapper">
            <Button
              icon={<Icon icon="search" />}
              onClick={handleSubmit}
              unelevated
            >
              Search
            </Button>
          </div>
        )}
      </section>
    </>
  );
};

export default FilterSheet;
