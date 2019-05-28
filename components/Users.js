import React, {Component} from 'react';
import User from './User';



export default function Users() {	
		return (
           <div className="right">
		   <User 
		   name="Person" alt="person" src="https://million-wallpapers.ru/wallpapers/4/14/425063662230815.jpg"/>
		    <div className="users__block">
		   <User 
		   min name="Person" alt="person" src="https://million-wallpapers.ru/wallpapers/4/14/425063662230815.jpg"/>
		   <User 
		   min name="Person" alt="person" src="https://million-wallpapers.ru/wallpapers/4/14/425063662230815.jpg"/>
		   <User 
		   min name="Person" alt="person" src="https://million-wallpapers.ru/wallpapers/4/14/425063662230815.jpg"/>
		   <User 
		   min name="Person" alt="person" src="https://million-wallpapers.ru/wallpapers/4/14/425063662230815.jpg"/>
		    </div>
		   </div>
		)
}

