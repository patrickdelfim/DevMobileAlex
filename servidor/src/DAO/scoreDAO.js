const mysql = require("mysql");

class scoreDAO {
  constructor() {
    this.connectionPool = mysql.createPool({
      connectionLimit: 10,
      host: "devmobile.c5lv36ieinj8.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "Thays123",
      database: "bd_devmobile",
      port: 3306,
    });
  }

  async addScoreToDatabase(newScore) {
    const result = await new Promise((resolve, reject) => {
      this.connectionPool.query(
        "INSERT INTO `pontuacao` (`nome`, `score`) VALUES (?, ?)",
        [newScore.nome, newScore.score],
        function (error, results, fields) {
          if (error) {
            throw error;
          }
          resolve(results);
        }
      );
    });
    return result;
  }

  async getScoreFromDatabase() {
    const result = await new Promise((resolve, reject) => {
      this.connectionPool.query(
        "SELECT * FROM pontuacao",
        function (error, results, fields) {
          if (error) {
            throw error;
          }
          resolve(results);
        }
      );
    });

    return result;
  }
}
module.exports = scoreDAO;
