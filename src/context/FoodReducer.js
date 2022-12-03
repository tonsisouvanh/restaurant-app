const FoodReducer = (state, action) => {
  switch (action.type) {
    case "GETFOODS":
      return state;
    case "DELETE":
      return state.foods.filter(food => food.id !== action.payload.id);
    default:
      return state;
  }
};

export default FoodReducer;
