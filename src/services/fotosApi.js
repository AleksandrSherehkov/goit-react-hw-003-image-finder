import axios from 'axios';

const API_KEY = '28592682-30ff71119c6d581761e4defab';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getFotos = async (page = 1, query = '', editorsChoice = false) => {
  const data = await axios.get('', {
    params: {
      page,
      q: query,
      editors_choice: editorsChoice,
    },
  });
  return data;
};

// export const getEditorChoiceFotos = async (page = 1) => {

//   const data = await axios.get('', {
//     params: {
//       page,
//       editors_choice: true,
//     },
//   });
//   return data;
// };

// export const getSearchFotos = async (page = 1, query) => {
//   const data = await axios.get('', {
//     params: {
//       q: query,
//       page,
//
//     },
//   });
//   return data;
//
