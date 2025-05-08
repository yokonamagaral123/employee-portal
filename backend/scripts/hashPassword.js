const bcrypt = require('bcrypt');

const hashPassword = async () => {
  const plainPassword = 'admin123'; // Replace with your desired admin password
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  console.log('Hashed Password:', hashedPassword);
};

hashPassword();