import React from 'react';
import styles from './BookList.css';
import SearchImg from '../../static/search.svg';
import RemoteBookImg from '../../static/remote-book.svg';
import ReviewStarsImage from '../../static/stars.svg';

export default function BookList() {
	const { main } = styles;
	return (
		<main className={main}>
			<h1 className="header">My Book List</h1>
			<form>
				<label htmlFor="book-search">
					<SearchImg className="searchImage" />
					<input type="text" className="BookSearch" name="book-search" />
				</label>
			</form>
			<p className="title">books reviewed by you</p>
			<div className={styles.bookCard}>
				<section className={styles.bookCardImage}>
					<RemoteBookImg />
				</section>

				<section className={styles.bookCardText}>
					<h1 className={styles.headerText}>Remote: Office Not Required</h1>

					<p className={styles.paragraphText}>Jason Fried</p>

					<section className={styles.ReviewStars}>
						<ReviewStarsImage />
					</section>
				</section>
			</div>
		</main>
	);
}
