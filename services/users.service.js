import { Users } from "../entities/users.entity.js";

async function createUsers(user) {
  return await Users.create(user).go();
}

async function getUser(username) {
  return await Users.get({ username }).go();
}

export { createUsers, getUser };
