import React from 'react';
import Post from './Post';

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