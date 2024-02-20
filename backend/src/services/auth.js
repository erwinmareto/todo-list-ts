const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const { generateToken } = require("../lib/jwt");

const prisma = new PrismaClient();

class AuthService {
  static register = async ({ username, password }) => {
    const exist = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (exist) {
      throw {name: "UniqueName"};
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });
    return newUser;
  };

  static login = async ({ username, password }) => {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw { name: "InvalidCred" };
    }

    const isPasswordMatched = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatched) {
      throw { name: "InvalidCred" };
    }

    const userData = {
        id: user.id,
        username: user.username
    }
    const accessToken = generateToken(userData)
      
  };
}

module.exports = AuthService;
