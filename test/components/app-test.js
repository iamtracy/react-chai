import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';
import CommentBox from '../../src/components/comment-box';

describe('App', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('shows a CommentBox', () => {
        expect(component.find('.comment-box')).to.exist;
    });

    it('shows a CommentList', () => {
        expect(component.find('.comment-list')).to.exist;
    });


});