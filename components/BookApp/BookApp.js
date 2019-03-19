import React from 'react';
import styles from './BookApp.css';

import NextArrow from '../../static/arrow-left.svg';
import Link from 'next/link';
import { HeaderText, ParagraphText } from '../Typography/Typography';

export default function BookApp(props) {
	const {
		main,
		Header,
		openBook,
		headerText,
		onBoardingText,
		navigation,
		navigationIndicator,
		indicator,
		indicator__Big,
		leftArrow,
		skip
	} = styles;

	const { headerTextProps, onBoardingTextProps, span, link, svgImage } = props;

	return (
		<main className={main}>
			<section className={Header}>
				<div className={openBook}>{svgImage}</div>
				<HeaderText headerText={headerTextProps} />

				<ParagraphText paragraphText={onBoardingTextProps} />
			</section>

			<section className={navigation}>
				<div className={navigationIndicator}>
					<span className={span === 1 ? `${indicator} ${indicator__Big}` : `${indicator}`} />
					<span className={span === 2 ? `${indicator} ${indicator__Big}` : `${indicator}`} />
					<span className={span === 3 ? `${indicator} ${indicator__Big}` : `${indicator}`} />
				</div>

				<Link href={link}>
					<div className={leftArrow}>
						<NextArrow alt="test" />
					</div>
				</Link>
			</section>
			<input className={skip} type="button" value="Skip intro" />
		</main>
	);
}
