import React, {Component} from 'react';
import User from './User';


export default class Post extends Component {
	render() {	
		return (
           <div className="post">
		   <User 
		   min name="Person" alt="person" src="https://million-wallpapers.ru/wallpapers/4/14/425063662230815.jpg"/>
		    <img src={this.props.src} alt={this.props.alt}></img>
		    <div className="post__name">
		      some accaunt
		    </div>
			<div className="post__descr">
			  #tag
			</div>
		   </div>
		)
	}	
}

