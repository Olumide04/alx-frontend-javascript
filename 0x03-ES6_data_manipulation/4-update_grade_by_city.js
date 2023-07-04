export default function getStudentsByLocation(array, city, grad) {
  return array
    .filter((k) => k.location === city)
    .map((student) => {
      const gradeI = grad
        .filter((k) => k.studentId === student.id)
        .map((x) => x.grade)[0];
      const grade = gradeI || 'N/A';
      return { ...student, grade };
    });
}
