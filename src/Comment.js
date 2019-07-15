// add Comment component here
import React, { Component } from 'react'
import BlogPost from './BlogPost'

class X extends React.Component {
  render(){
    return(
      <div className="comment">{this.props.commentText}</div>
    )
  }
}

export default X;
