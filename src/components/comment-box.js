import React, { Component } from 'react';

export default class CommentBox extends Component {

    constructor(props) {
        super(props);
        this.state = { comment: '' };
    }

    handleChange(event) {
        this.setState({ comment: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ comment: '' });
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit.bind(this)} className="row comment-box">
            <div className="form-group">
                <textarea 
                    className="form-control" 
                    value={this.state.comment} 
                    onChange={this.handleChange.bind(this)}/>
            </div>
            <div className="form-group">
                <button 
                    type="submit" 
                    className="btn btn-primary">
                    Submit Comment
                </button>
            </div>
        </form>
        );
    }
}
