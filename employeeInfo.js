const employee = [
  {
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      address: {
        city: "Anytown",
        state: "NY",
        postalCode: "12345",
      },
    },
  },
  {
    employmentDetails: {
      position: "Software Engineer",
      department: "Engineering",
      startDate: "2022-01-01",
      endDate: null,
      manager: {
        firstName: "Alice",
        lastName: "Smith",
        email: "alice@example.com",
      },
    },
  },
];

function getEmployeeInfo(employee, key) {
  for (let section of employee) {
    for (let subSection in section) {
      if (section[subSection].hasOwnProperty(key)) {
        return section[subSection][key];
      }
    }
  }
  return "Klucz nie istnieje";
}

console.log(getEmployeeInfo(employee, "firstName")); // Powinno zwrócić: "John"
console.log(getEmployeeInfo(employee, "lastName")); // Powinno zwrócić: "Doe"
console.log(getEmployeeInfo(employee, "position")); // Powinno zwrócić: "Software Engineer"
console.log(getEmployeeInfo(employee, "street")); // Powinno zwrócić: "Klucz nie istnieje"
