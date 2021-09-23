import axios from 'axios';
const KEY = '21418455-02afedd09f38bf37a8407aa32';
const API = 'https://pixabay.com/api';
const fetchPictures = ({ searchImage = '', currentPage = 1 }) => {
  return axios
    .get(
      `${API}/?q=${searchImage}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then((response) => response.data.hits);
};

export default fetchPictures;
