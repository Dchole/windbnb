import PropTypes from "prop-types";
import useMediaQuery from "../hooks/useMediaQuery";

const PropertyCard = ({ stay }) => {
  const { superHost, title, rating, type, beds, photo } = stay;

  const large = useMediaQuery("lg");

  return (
    <div className="property-card">
      <img src={photo} alt={title} />
      {superHost && large && <div className="super-host in-lg">SUPER HOST</div>}
      <div>
        <div>
          {superHost && !large && (
            <span className="super-host">SUPER HOST</span>
          )}
          <span className="type--beds">
            {type} {beds && `. ${beds} beds`}
          </span>
        </div>
        <div className="rating">
          <i className="material-icons">star</i>
          <span>{rating}</span>
        </div>
      </div>
      <p>{title}</p>
    </div>
  );
};

PropertyCard.propTypes = {
  stay: PropTypes.shape({
    superHost: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    beds: PropTypes.number,
    photo: PropTypes.string.isRequired
  }).isRequired
};

export default PropertyCard;
