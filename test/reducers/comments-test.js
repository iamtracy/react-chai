import { expect } from '../test-helper';
import commentReducer from '../../src/reducers/comments';
import { SAVECOMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles action with unknown type', () => {
        expect(commentReducer()).to.be.instanceOf(Array);
    });

    it('handles action of type SAVECOMMENT', () => {

    });
});