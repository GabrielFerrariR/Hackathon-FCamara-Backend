class Model {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return this.model.create({ ...data });
  }

  async read() {
    return this.model.find();
  }

  async readById(id) {
    return this.model.findById(id);
  }

  async update(id, data) {
    return this.model.findOneAndUpdate(id, { ...data }, { new: true });
  }

  async delete(id) {
    return this.model.findOneAndDelete(id);
  }

  async insertMany(array) {
    return this.model.insertMany(array);
  }

  async deleteMany(array) {
    return this.model.deleteMany(array);
  }
}

module.exports = Model;
