const mysql = require("mysql");
const { dbConfig } = require("./config");

async function query(sql) {
  const connection = mysql.createConnection(dbConfig);

  const query = new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
  const result = await query;

  connection.end();
  return result;
}

module.exports = {
  query,
};
