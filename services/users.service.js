import { Users } from "../entities/users.entity.js";

async function createUsers(user) {
  return await Users.create(user).go();
}

function getUser(username) {
  return Users.get(username).go();
}

export { createUsers, getUser };
