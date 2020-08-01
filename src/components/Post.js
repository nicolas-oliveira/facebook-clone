import React from 'react';
import '../styles/Post.css';
import Avatar from './Avatar';
import Comment from './Comment';
import AvatarImage from '../../images/avatar2.jpeg';
import AvatarImage2 from '../../images/avatar5.jpeg';

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus fuga tempora quas accusamus quod temporibus error labore repellendus, eaque impedit dolor voluptatum nihil pariatur, animi sequi dolorem veniam nemo."
export default class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="content">
          <Avatar 
            avatar={ AvatarImage } 
            name={ "Júlio Alcantara" } 
            date={"02 Jun 2020"}
          />
          <div className="content-self">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a in, cupiditate eligendi dicta eaque quos voluptatum delectus quod corporis dolorem est alias tempore ut perspiciatis id totam molestiae ea.</p>
          </div>
        </div>
      <hr/>
        <Comment 
          avatar={AvatarImage2} 
          name={"Cézar Toledo"} 
          comment={lorem}
        />
        <Comment 
          avatar={AvatarImage2} 
          name={"Cézar Toledo"} 
          comment={lorem}
        />
      </div>
    );
  }
}