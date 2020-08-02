import React from 'react';
//import './Chats.css';
import Chat from './Chat';

function Chats() {
	return (
		<div className="chats">
			<Chat 
				name="MArk"
				message="whats uppp"
				timeStamp="40 sec ago"
				profilePic="..."
			/>
			<Chat 
				name="MArk"
				message="whats uppp"
				timeStamp="40 sec ago"
				profilePic="..."
			/>
			<Chat 
				name="MArk"
				message="whats uppp"
				timeStamp="40 sec ago"
				profilePic="..."
			/>
			<Chat 
				name="MArk"
				message="whats uppp"
				timeStamp="40 sec ago"
				profilePic="..."
			/>
		</div>
	)
}

export default Chats;
