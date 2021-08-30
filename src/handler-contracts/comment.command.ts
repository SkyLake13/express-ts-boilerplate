
export class CreateCommentCommand {
    public static get commandName() {
        return 'CreateCommentCommand'
    }

    constructor(public email: string, public text: string, public movie_id: string) {}
}