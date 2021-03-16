const connection = require("./connection");
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
};
