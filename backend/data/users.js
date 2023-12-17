import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Vazeer Khan",
    email: "khan@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Aisha Begum",
    email: "begum@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];
export default users;
