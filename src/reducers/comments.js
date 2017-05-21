import { SAVECOMMENT } from '../actions/types';

export default function(state = [], action) {

    if (!action) {
        return state;
    }
    
    switch(action.type) {
        case SAVECOMMENT:
        return [ ...state, action.payload ];
    }
    return state;
}