const db = require('../db');

const School = {
  add: async (name, address, latitude, longitude) => {
    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    return db.execute(query, [name, address, latitude, longitude]);
  },

  getAll: async () => {
    const query = 'SELECT * FROM schools';
    return db.execute(query);
  }
};

module.exports = School;