const connection = require("./connection");

function getSleep(id, db = connection) {
  return db("sleep")
    .where("id", id)
    .select()
}

function addSleep(sleep, db = connection) {
  return db("sleep")
    .insert({
      sleep: sleep.sleep,
      wake: sleep.wake
    })
}

// function updateSleep(id, db = connection) {
//   return db("sleep")
//     .where("id", id)
//     .select()
// }

// function deleteSleep(id, db = connection) {
//   return db("sleep")
//     .where("id", id)
//     .delete()
// }

module.exports = {
  getSleep,
  addSleep
  // updateSleep,
  // deleteSleep
}