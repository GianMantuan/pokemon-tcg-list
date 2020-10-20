const CardsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CARDS':
      return {
        ...state,
        cards: action.payload,
      };

    default:
      return state;
  }
};

export default CardsReducer;
