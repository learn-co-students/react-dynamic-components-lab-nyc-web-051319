import React, { Component } from 'react'
import BlogPost from './BlogPost.js'

class X extends React.Component {
    render() {
        return (
            <div className="comment">{this.props.commentText}</div>
        )
    }

}

export default X