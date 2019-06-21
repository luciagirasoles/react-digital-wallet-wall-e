function addTransaction({ type, amount, categoryId }) {
  const id = Date.now();
  return {
    type: "ADD_TRANSACTION",
    payload: {
      id,
      amount,
      type,
      categoryId,
      date: new Date(id).toISOString()
    }
  };
}

export { addTransaction };
