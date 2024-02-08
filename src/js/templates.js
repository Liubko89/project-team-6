import axios from 'axios';

axios
  .get('/filters?filter=Equipment')
  .then(({ data: { results } }) => console.log(results));
