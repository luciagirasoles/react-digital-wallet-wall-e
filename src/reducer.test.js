import reducer from "./reducer";

test("reducer - default", () => {
  const finalState = reducer(
    {
      transaction: {
        1: {
          id: 1,
          type: "ingresse",
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
        }
      }
    },
    { type: "random" }
  );

  const expectedState = {
    transaction: {
      1: {
        id: 1,
        type: "ingresse",
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
      }
    }
  };
  expect(finalState).toEqual(expectedState);
});
