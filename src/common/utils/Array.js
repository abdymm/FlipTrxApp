const Array = {
  sort: (array, sortBy, sortType = 'ASC') => {
    return array.sort((a, b) => {
      const firstItem = a[sortBy];
      const secondItem = b[sortBy];
      return sortType === 'ASC'
        ? firstItem > secondItem
          ? 1
          : -1
        : firstItem < secondItem
        ? 1
        : -1;
    });
  },
};

export default Array;
