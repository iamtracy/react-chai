import { expect } from '../test-helper';
import { SAVECOMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions/index';

describe('actions', () => {
    describe('saveComment', () => {
        it('has the correct type', () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVECOMMENT);
        });

        it('has the correct payload', () => {
            const action = saveComment('new comment');
            expect(action.payload).to.equal('new comment');
        });
    });
});