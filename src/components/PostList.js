import React from 'react';
import Post from './Post';
import '../styles/PostList.css';

export default class PostList extends React.Component {
  render() {
    return (
      <div className="postList">
        <Post />
        <Post />
      </div>
    );
  }
}