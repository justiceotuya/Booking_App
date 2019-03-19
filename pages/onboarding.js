import React from 'react';
import BookApp from '../components/BookApp/BookApp';
import styles from './index.css';
import StarImg from '../static/Star.svg';

export default function Onboarding() {
	return (
		<BookApp
			headerTextProps="Review Them"
			onBoardingTextProps="Create your account to get started. After that, you can share books and make friends."
			span={2}
			svgImage={<StarImg />}
			link="/signup"
		/>
	);
}
