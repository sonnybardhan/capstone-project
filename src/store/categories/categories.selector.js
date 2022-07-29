import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => {
  // console.log('selector 1 ran');
  // console.log('1. state.categories: ', state.categories);
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => {
    // console.log('selector 2 ran');
    // console.log('2. categoriesSlice.categories: ', categoriesSlice.categories);
    return categoriesSlice.categories;
  }
);

export const selectCategory = createSelector(
  [selectCategories],
  (categories) => {
    // console.log('selector 3 ran');
    const result = categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
    // console.log('3. categories: ', result);
    return result;
  }
);
// export const selectCategory = createSelector(
//   [selectCategories],
//   (categories) => {
//     console.log('selector 3 ran');
//     const result = categories.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {});
//     console.log('3. categories: ', result);
//     return result;
//   }
// );
