import axios from 'axios';

const URI = 'http://localhost:4000/students/';

const getAllStudents = async (state) => {
  try {
    const res = await axios.get(URI);
    state(res);
  } catch (error) {
    console.error(error);
  }
};
const getStudent = async (id, state) => {
  try {
    const res = await axios.get(URI + id);
    state(res);
  } catch (error) {
    console.error(error);
  }
};
const createStudent = async (name, lastName, active) => {
  try {
    await axios.post(URI, {
      nameST: name,
      lastNameST: lastName,
      activeST: active,
    });
  } catch (error) {}
};
const updateStudent = async (id, name, lastName, active) => {
  try {
    await axios.put(URI + id, {
      nameST: name,
      lastNameST: lastName,
      activeST: active,
    });
  } catch (error) {}
};
const deleteStudent = async (id) => {
  try {
    await axios.delete(URI + id);
  } catch (error) {
    console.error(error);
  }
};

export {
  getAllStudents,
  getStudent,
  updateStudent,
  createStudent,
  deleteStudent,
};
