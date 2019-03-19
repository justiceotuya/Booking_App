import React from 'react';
import styles from './index.css';
import BookApp from '../components/BookApp/BookApp';
import BookImg from '../static/book_onboarding.svg';

export default function index() {
	return (
		<BookApp
			headerTextProps="Read Books"
			onBoardingTextProps="Create your account to get started. After that, you can share books and make friends."
			span={1}
			link="/onboarding"
			svgImage={<BookImg />}
		/>
	);
}
