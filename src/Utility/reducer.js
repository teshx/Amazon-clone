import { Type } from "./action.type";
export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      //check if the ithem is exist
      const existingItem = state.basket.find((item) => {
    return    item.id === action.item.id;
      });

      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updateItem = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });

        return {
          ...state,
          basket: updateItem,
        };
      }

    default:
      return state;
  }
};
