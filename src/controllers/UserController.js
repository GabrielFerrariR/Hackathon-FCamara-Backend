const { StatusCodes } = require("http-status-codes");

const Controller = require(".");
const UserService = require("../services/UserService");

class UserController extends Controller {
  constructor() {
    super();
    this.service = new UserService();
    this.route = "/user";

    this.create = super.create.bind(this);
    this.read = super.read.bind(this);
    this.readById = super.readById.bind(this);
    this.update = super.update.bind(this);
    this.delete = super.delete.bind(this);
    this.toggleCompletedContent = this.toggleCompletedContent.bind(this);
  }

  async toggleCompletedContent(req, res, _next) {
    const { id, contentId } = req.params;

    const { completedContents } = await this.service.toggleCompletedContent(id, contentId);

    return res.status(StatusCodes.OK).json(completedContents);
  }
}

module.exports = UserController;
