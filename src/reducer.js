const initialState = {
  transaction: {
    1: {
      id: 1,
      type: "ingresse",
      amount: 12.12,
      date: new Date().toISOString(),
      categoryId: 1
    },
    2: {
      id: 1,
      type: "withdraw",
      amount: 12.12,
      date: new Date().toISOString(),
      categoryId: 1
    }
  },
  categories: {
    1: {
      id: 1,
      type: "ingresse",
      name: "Award"
    },
    2: {
      id: 2,
      type: "ingresse",
      name: "Gifts"
    },
    3: {
      id: 3,
      type: "ingresse",
      name: "Interest money"
    },
    4: {
      id: 4,
      type: "ingresse",
      name: "Salary"
    },
    5: {
      id: 5,
      type: "ingresse",
      name: "Selling"
    },
    6: {
      id: 6,
      type: "ingresse",
      name: "Others"
    },
    7: {
      id: 7,
      type: "withdraw",
      name: "Bills & utilities"
    },
    8: {
      id: 8,
      type: "withdraw",
      name: "Healt & fitness"
    },
    9: {
      id: 9,
      type: "withdraw",
      name: "Shopping"
    },
    10: {
      id: 10,
      type: "withdraw",
      name: "Business"
    },
    11: {
      id: 11,
      type: "withdraw",
      name: "Education"
    },
    12: {
      id: 12,
      type: "withdraw",
      name: "Entertainment"
    },
    13: {
      id: 13,
      type: "withdraw",
      name: "Friends & lover"
    },
    14: {
      id: 14,
      type: "withdraw",
      name: "Transportation"
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
