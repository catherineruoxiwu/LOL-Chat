const users = [];

function userJoin(id, username, room) {
  const user = { id, username, room };
  users.push(user);
  console.log(users)
  return user;
}

function getCurrentUser(id) {
  console.log('getCurrentUser', users)
  return users.find((user) => user.id === id);
}

function userLeave(id) {
  console.log('userLeave', users)
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
}

function getRoomUsers(room) {
  console.log('getRoomUsers', users)
  return users.filter((user) => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
