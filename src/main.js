import axios from 'axios';
import { fetchData } from './js/templates';

axios.defaults.baseURL = 'https://energyflow.b.goit.study/api';
console.log(fetchData('filters'));
