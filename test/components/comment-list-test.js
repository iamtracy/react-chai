import { renderComponent, expect } from '../test-helper';
import CommentList from '../../src/components/comment-list';

describe('CommentList', () => {
    let component;
    let props;
    
    beforeEach(() => {
        props = { comments: ['New Comment', 'Other New Comment'] };
        component = renderComponent(CommentList, null, props);
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {  
        props.comments.map(comment => {
            expect(component.find('li')).to.contain(comment);
        });
    });
});