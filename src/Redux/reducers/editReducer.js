import { typesEditProduct } from "../types/types";

const initialState = {
  Product: [],
};

export const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesEditProduct.edit:
      return {
        ...state,
      };
    default:
      return state;
  }
};
