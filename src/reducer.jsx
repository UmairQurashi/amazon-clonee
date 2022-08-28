export const initalState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD to the Basket":
      return {
        ...state,
        basket: [state.basket, action.item],
      };
    case "Remove to the Basket":
      return { state };
    default:
      return state;
  }
};
export default reducer;
