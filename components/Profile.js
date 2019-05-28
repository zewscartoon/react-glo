import React from 'react';
import User from './User';
import Palette from './Palette';


const Profile = () => {
	return (
	 <div className="container profile">
	   <User
	   src="https://s1.funon.cc/img/orig/201803/17/5aad0b7772250.jpg"
	   alt="girl"
	   name="some account"/>
	  
	   <Palette/>
	 </div>
	)
}

export default Profile;

