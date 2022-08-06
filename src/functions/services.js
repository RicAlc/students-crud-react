import axios from 'axios';

const URI = 'http://localhost:4000/students';
const getAllStudents = async (state) => {
  try {
    const res = await axios.get(URI);
    state(res);
  } catch (error) {
    console.error(error);
  }
};

export default getAllStudents;
