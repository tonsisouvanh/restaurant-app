const FoodReducer = (state, action) => {
  switch (action.type) {
    case "SETFOODS": {
      console.log(action.payload)
      return {
        foods: action.payload,
        isLoading: true,
        isError: false
      };
    }
    case "GETFOODS":
      return state.foods;
    // isLoading: state.isLoading

    default:
      return state;
  }
};

export default FoodReducer;
