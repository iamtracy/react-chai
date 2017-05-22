import { renderComponent, expect } from '../test-helper';
import CommentList from '../../src/components/comment-list';

describe('CommentList', () => {
    let component;
    let props;
    
    beforeEach(() => {
        props = { comments: ['New Comment', 'Other New Comment'] };
        component = renderComponent(CommentList, null, props);
    });

    it('shows an p for each comment', () => {
        expect(component.find('p').length).to.equal(3);
    });

    it('shows each comment that is provided', () => {  
        props.comments.map(comment => {
            expect(component.find('p')).to.contain(comment);
        });
    });
});