import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
		<Router>
			<Switch>
				<Route path='/chat/:person'>
					<Header backButton="/chat" />
					<ChatScreen />
				</Route>
				<Route path='/chat'>
					<Header backButton="/" />
					<Chats />
				</Route>
				<Route path='/'>
					<Header />
					<TinderCards />
					<SwipeButton />
				</Route>
			</Switch>
		</Router>
	</div>
  );
}

export default App;
