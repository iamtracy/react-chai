import React, { Component } from 'react';
import CommentBox from './comment-box';
import CommentList from './comment-list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <p>A simple React comment component built using the <a href="http://chaijs.com/api/" target="_blank">Chai</a> testing suites Test Driven Development (TDD) approach.</p>
          <p className="small">Per Wikipedia: Test-driven development (TDD) is a software development process that relies on 
            the repetition of a very short development cycle: requirements are turned into very specific test cases, 
            then the software is improved to pass the new tests, only. This is opposed to software development that 
            allows software to be added that is not proven to meet requirements.</p>
          <CommentBox/>
          <CommentList/>
        </div>
      </div>
    );
  }
}
