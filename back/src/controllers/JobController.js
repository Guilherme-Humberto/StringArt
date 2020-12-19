const { Job } = require("../models/Job");

module.exports = {
  async index(req, res) {
    try {
      const jobs = await Job.find();
      return res.json(jobs);
    } catch (err) {
      return res.send({ error: err.message });
    }
  },
  async create(req, res) {
    try {
      const { filename } = req.file;
      const { name, desc, price } = req.body;

      const job = await Job.create({
        img: filename,
        name,
        desc,
        price,
      });

      return res.json(job);
    } catch (err) {
      return res.send({ error: err.message });
    }
  },
};
