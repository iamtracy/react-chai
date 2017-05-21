import { expect } from '../test-helper';
import commentReducer from '../../src/reducers/comments';
import { SAVECOMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles empty action', () => {  
        expect(commentReducer(undefined, {type: ''})).to.eql([]);
    });

    it('handles action with unknown type', () => {
        const action = { type: SAVECOMMENT, payload: 'new comment' }; 
        expect(commentReducer([], action)).to.eql(['new comment']);
    });
});