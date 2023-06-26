export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let employeeIndex = 0;
  let departmentIndex = 0;

  return {
    next() {
      const currentDepartment = departments[departmentIndex];
      const currentEmployee = currentDepartment[employeeIndex];

      if (employeeIndex < currentDepartment.length - 1) {
        employeeIndex++;
      } else {
        employeeIndex = 0;
        departmentIndex++;
      }

      const done = departmentIndex >= departments.length;

      return {
        value: currentEmployee,
        done,
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

