import { createUsers, getUser } from "../services/users.service.js";
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";

const genHashPassword = async (password) => {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

async function createNewUsers(request, response) {
  const data = request.body;
  const hashedPassword = await genHashPassword(data.password);

  //   if (data.password.length < 8) {
  //     response.status(400).send({ msg: "Password is too short" });
  //     return;
  //   }

  //   const getUserByName = getUser(data.username);

  //   if (getUserByName) {
  //     response.status(404).send({ msg: "user already exist" });
  //     return;
  //   }

  try {
    await createUsers({
      username: data.username,
      password: hashedPassword,
    });
    response.status(201).send(data);
  } catch (err) {
    response.status(500).send({ msg: "User already exist" });
  }
}

async function loginUser(request, response) {
  const data = request.body;

  const userFromDB = await getUser(data.username);

  if (!userFromDB.data) {
    response.status(400).send({ msg: "Invalid data" });
    return;
  } else {
    const storedPassword = userFromDB.data.password;
    const providedPassword = data.password;
    const isPasswordCheck = await bcrypt.compare(
      providedPassword,
      storedPassword
    );
    if (isPasswordCheck) {
      var token = jwt.sign(
        { nithin: userFromDB.data.username },
        process.env.SECRET_KEY
      );
      response
        .status(200)
        .send({ msg: ` ${data.username} Login success`, token });
    } else {
      response.status(400).send({ msg: "invalid data" });
    }
  }
}

export { createNewUsers, loginUser };
