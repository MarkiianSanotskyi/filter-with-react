import axios from 'axios';

const baseURL = 'https://api.hatchways.io/assessment/students'

export default axios.create({ baseURL });