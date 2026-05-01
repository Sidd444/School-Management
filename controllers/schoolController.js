const db = require('../db');
const haversine = require('haversine-distance');

exports.addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    await db.execute(query, [name, address, latitude, longitude]);
    res.status(201).json({ message: 'School added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

exports.listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;
  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const [schools] = await db.execute('SELECT * FROM schools');
    const userLocation = { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };

    const sortedSchools = schools.map(school => {
      const schoolLocation = { latitude: school.latitude, longitude: school.longitude };
      school.distance = haversine(userLocation, schoolLocation);
      return school;
    }).sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};