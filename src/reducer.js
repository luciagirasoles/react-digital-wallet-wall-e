export const initialState = {
  transaction: {
    1: {
      id: 1,
      type: "ingresse",
      amount: 12.12,
      date: Date.now() - 7593867349,
      categoryId: 1
    },
    2: {
      id: 2,
      type: "withdraw",
      amount: 12.12,
      date: Date.now() - 5593867349,
      categoryId: 9
    },
    3: {
      id: 1,
      type: "ingresse",
      amount: 12.12,
      date: Date.now() - 4593867349,
      categoryId: 1
    },
    4: {
      id: 2,
      type: "ingresse",
      amount: 34,
      date: Date.now() - 567667472,
      categoryId: 1
    },
    5: {
      id: 3,
      type: "withdraw",
      amount: 8,
      date: Date.now() - 234565234,
      categoryId: 7
    },
    6: {
      id: 4,
      type: "ingresse",
      amount: 1.8,
      date: Date.now() - 8786766,
      categoryId: 1
    },
    7: {
      id: 7,
      type: "withdraw",
      amount: 10,
      date: Date.now() - 8786766,
      categoryId: 7
    },
    8: {
      id: 8,
      type: "withdraw",
      amount: 24,
      date: Date.now() - 7786165,
      categoryId: 7
    },
    9: {
      id: 9,
      type: "ingresse",
      amount: 44,
      date: Date.now() - 7786666,
      categoryId: 6
    },
    10: {
      id: 10,
      type: "ingresse",
      amount: 100,
      date: Date.now() - 7786166,
      categoryId: 4
    }
  },
  categories: {
    1: {
      id: 1,
      type: "ingresse",
      name: "Award",
      image: "/images/Award.png"
    },
    2: {
      id: 2,
      type: "ingresse",
      name: "Gifts",
      image: "/images/Gifts.png"
    },
    3: {
      id: 3,
      type: "ingresse",
      name: "Interest money",
      image: "/images/Interest money.png"
    },
    4: {
      id: 4,
      type: "ingresse",
      name: "Salary",
      image: "/images/Salary.png"
    },
    5: {
      id: 5,
      type: "ingresse",
      name: "Selling",
      image: "/images/Selling.png"
    },
    6: {
      id: 6,
      type: "ingresse",
      name: "Others",
      image: "/images/Others.png"
    },
    7: {
      id: 7,
      type: "withdraw",
      name: "Bills & utilities",
      image: "/images/Bills & utilities.png"
    },
    8: {
      id: 8,
      type: "withdraw",
      name: "Healt & fitness",
      image: "/images/Healt & fitness.png"
    },
    9: {
      id: 9,
      type: "withdraw",
      name: "Shopping",
      image: "/images/Shopping.png"
    },
    10: {
      id: 10,
      type: "withdraw",
      name: "Business",
      image: "/images/Business.png"
    },
    11: {
      id: 11,
      type: "withdraw",
      name: "Education",
      image: "/images/Education.png"
    },
    12: {
      id: 12,
      type: "withdraw",
      name: "Entertainment",
      image: "/images/Entertainment.png"
    },
    13: {
      id: 13,
      type: "withdraw",
      name: "Friends & lover",
      image: "/images/Friends & lover.png"
    },
    14: {
      id: 14,
      type: "withdraw",
      name: "Transportation",
      image: "/images/Transportation.png"
    }
  }
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      return {
        ...state,
        transaction: {
          ...state.transaction,
          [action.payload.id]: action.payload
        }
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
