const { query } = require("./connection");
const connection = require("./connection");

const objToSql = (ob) => {
  const arr = [];

  // Loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    let value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(`${key}=${value}`);
    }
  }

  // Translate array of strings to a single comma-separated string
  return arr.toString();
};

const orm = {
  selectAll: (tableName, cb) => {
    const queryString = `SELECT * FROM ${tableName};`;
    connection.query(queryString, (err, res) => {
      if (err) {
        throw err;
      } else {
        cb(res);
      }
    });
  },

  insertOne: (tableName, col, value, cb) => {
    const queryString = `INSERT INTO ${tableName} (${col}) VALUES ('${value}')`;
    connection.query(queryString, (err, res) => {
      if (err) {
        throw err;
      } else {
        cb(res);
      }
    });
  },

  updateOne: function (colVal, id, cb) {
    var queryString = `UPDATE burgers SET devoured='1' WHERE ${colVal}=${id}`;
    connection.query(queryString, [id], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
