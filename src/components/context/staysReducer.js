import initialState from "../../stays.json";

const staysReducer = (_state, action) => {
  switch (action.type) {
    case "FILTER_BY_CITY":
      return initialState.filter(stay =>
        action.payload
          ?.split(",")
          .map(word => word?.trim().toLowerCase())
          .includes(stay.city?.toLowerCase())
      );

    case "FILTER_BY_GUESTS_NUMBER":
      return initialState.filter(stay => stay.maxGuests === action.payload);

    default:
      return initialState;
  }
};

export default staysReducer;
