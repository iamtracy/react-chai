import { SAVECOMMENT } from './types';

export function saveComment(comment) {
    return {
        type: SAVECOMMENT,
        payload: comment
    };
}