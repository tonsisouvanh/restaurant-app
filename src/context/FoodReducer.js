const FoodReducer = (state, action) => {
  switch (action.type) {
    case "FETCHFOODS": {
      return { foods: [...action.payload], isLoading: false };
    }
    case "ADDFOOD": {
      return state;
    }
    case "DELETEFOOD": {
      return { foods: state.foods.filter((food) => food.id !== action.id) };
    }
    default:
      return state;
  }
};

export default FoodReducer;
