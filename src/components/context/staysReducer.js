const staysReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_CITY":
      return state.filter(stay => stay.city === action.payload);

    case "FILTER_BY_GUESTS_NUMBER":
      return state.filter(stay => stay.maxGuests === action.payload);

    default:
      return state;
  }
};

export default staysReducer;
