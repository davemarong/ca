interface User {
  school: string;
  firstName: string;
  lastName: string;
  age: number;
  isAdmin?: boolean;
}

const createUser = (
  firstName: string,
  lastName: string,
  age: number,
  isAdmin: boolean = false
): User => {
  return {
    school: "Noroff",
    firstName,
    lastName,
    age,
    isAdmin,
  };
};

const newUser = createUser("Ola", "Nordmann", 18);
const newAdmin = createUser("Kari", "Nordmann", 36, true);
