const staysReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_CITY":
      return state.filter(stay =>
        action.payload
          ?.split(",")
          .map(word => word?.trim().toLowerCase())
          .includes(stay.city?.toLowerCase())
      );

    case "FILTER_BY_GUESTS_NUMBER":
      return state.filter(stay => stay.maxGuests === action.payload);

    default:
      return state;
  }
};

export default staysReducer;
