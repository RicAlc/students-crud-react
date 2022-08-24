import axios from 'axios';
const URI = 'https://students-crud-node-production.up.railway.app/students';

// Metodos HTTP

// Rescatar todos los estudiantes
const getAllStudents = async (state) => {
  try {
    const res = await axios.get(URI);
    state(res);
  } catch (error) {
    console.error(error);
  }
};

// Rescatar solo un estudiante
const getStudent = async (id, state) => {
  try {
    const res = await axios.get(URI + id);
    state(res);
  } catch (error) {
    console.error(error);
  }
};

// Agregar un nuevo estudiante
const createStudent = async (name, lastName, active) => {
  try {
    await axios.post(URI, {
      nameST: name,
      lastNameST: lastName,
      activeST: active,
    });
  } catch (error) {}
};

// Actualizar datos de estudiante
const updateStudent = async (id, changes) => {
  try {
    await axios.put(URI + id, {
      ...changes,
    });
  } catch (error) {}
};

// Borrar un estudante
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
