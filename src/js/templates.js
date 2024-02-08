import axios from 'axios';

const fetchData = async (pathToResource, paramsObj) => {
  const res = await axios.get(`/${pathToResource}`, { params: paramsObj });
  return res.data.results;
};

export { fetchData };

// *** ============== example ============== ***

// const example = await fetchData('filters', { filter: 'Muscles', page: 2 });
// example.map(el => console.log(el));
