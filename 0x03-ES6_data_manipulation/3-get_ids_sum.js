export default function getListStudentIds(array) {
  return array.reduce((accumulator, k) => accumulator + k.id, 0);
}
