import axios from 'axios';

const fetchData = async (pathToResource, params) => {
  const res = await axios.get(`/${pathToResource}`, { params: { params } });
  return res.data;
};

async function getRes() {
  try {
    const res = await fetchData('filters');
    return res.results.filter(el => el.name === 'waist');
  } catch {
    err => console.log(err);
  }
}

export { fetchData };
