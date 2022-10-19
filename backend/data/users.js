import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Michael O Grady',
    email: 'mogrady.professional@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
];

export default users;
