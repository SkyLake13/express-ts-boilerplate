import { commentCommandHandler } from './comment';

export function registerHandlers() {
    commentCommandHandler().then();
}