import { CommentService, UserService } from "../domain-services";
import { models } from "../persistence";
import { DB_CONNECTION } from "../configurations";

const _models = models(DB_CONNECTION);

const userService = new UserService(_models.User);
const commentService = new CommentService(_models.Comment);

export { userService, commentService }