import React from 'react';
import styles from './BookCard.css';
import DarkTowerBookImg from '../../static/Dark-towerBook.svg';
import ReviewStarsImage from '../../static/stars.svg';
import PapilonBookImg from '../../static/Papilon-Book.svg';

export default function BookCard(props) {
	return (
		<div className={styles.bookCard}>
			<section className={styles.bookCardImage}>
				{/* <RemoteBookImg /> */}
				<img src={props.bookImage} alt={`${props.bookName} book`} />

				{/* <PapilonBookImg /> */}
			</section>

			<section className={styles.bookCardText}>
				<h1 className={styles.headerText}>
					{/* Remote: Office Not Required */}
					{props.bookName}
				</h1>

				<p className={styles.paragraphText}>
					{/* Jason Fried */}
					{props.bookAuthor}
				</p>

				<section className={styles.ReviewStars}>
					<ReviewStarsImage />
				</section>
			</section>
		</div>
	);
}
