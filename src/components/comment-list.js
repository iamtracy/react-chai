import React from 'react';
import { connect } from 'react-redux';

const CommentList = props => {
    const list = props.comments.map((comment, index) => {
        return (
            <div className="panel panel-default" key={index}><p className="panel-body" key={index}>{comment}</p></div>
        );
    });
    return (
        <div className="detailBox">
            <div className="commentBox">
                <p className="taskDescription">Comment List:</p>
            </div>
            <div className="commentText comment-list">
                {list}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);