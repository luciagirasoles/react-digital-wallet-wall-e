const initialState = {
  transaction: {
    1: {
      id: 1,
      type: "ingreesse",
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
      type: "ingreesse",
      name: "Award"
    },
    2: {
      id: 2,
      type: "ingreesse",
      name: "Gifts"
    },
    3: {
      id: 3,
      type: "ingreese",
      name: "Interest money"
    },
    4: {
      id: 4,
      type: "ingreese",
      name: "Salary"
    },
    5: {
      id: 5,
      type: "ingreese",
      name: "Selling"
    },
    6: {
      id: 6,
      type: "ingreese",
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
    12: {
      id: 12,
      type: "withdraw",
      name: "Friends & lover"
    },
    13: {
      id: 13,
      type: "withdraw",
      name: "Transportation"
    }
  }
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      return {
        state
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
