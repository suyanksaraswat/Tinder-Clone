import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

import './SwipeButtons.css';

const SwipeButtons = () => {
	return (
		<div className="swipeButtons">
			<IconButton className="swipeButtons__repeat" style={{padding: '3vw', color: '#f5b748'}}>
				<ReplayIcon fontSize="large" />
			</IconButton>
			<IconButton className="swipeButtons__left" style={{padding: '3vw', color: '#ec5e6f'}}>
				<CloseIcon fontSize="large" />
			</IconButton>
			<IconButton className="swipeButtons__star" style={{padding: '3vw', color: '#62b4f9'}}>	
				<StarRateIcon fontSize="large" />
			</IconButton>
			<IconButton className="swipeButtons__right" style={{padding: '3vw', color: '#76e2b3'}}>
				<FavoriteIcon fontSize="large" />
			</IconButton>
			<IconButton className="swipeButtons__lightning" style={{padding: '3vw', color: '#915dd1'}}>
				<FlashOnIcon fontSize="large" />
			</IconButton>
		</div>
	)
}

export default SwipeButtons;
