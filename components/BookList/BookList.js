import React from 'react';
import styles from './BookList.css';
import BookCard from '../BookCard/BookCard';
import Button from '../Button/Button';
import SearchImg from '../../static/search.svg';
import RemoteBookImg from '../../static/remote.png';
import PapilonBookImg from '../../static/papillon.png';
import DarkTowerBookImg from '../../static/dark-tower.png';
import Timeline from '../../static/home.svg';
import Books from '../../static/book-open-menu.svg';
import Review from '../../static/add-like.svg';
import Notifications from '../../static/bell.svg';

export default function BookList() {
	const {
		main,
		header,
		search_image,
		search_label,
		book_search,
		title,
		book_list,
		addBookReview,
		menu_bar,
		menu_item
	} = styles;

	return (
		<main className={main}>
			<h1 className={header}>My Book List</h1>

			<label htmlFor="book-search" className={search_label}>
				<SearchImg className={search_image} />
				<input type="text" className={book_search} name="book-search" />
			</label>

			<p className={title}>books reviewed by you</p>
			<section className={book_list}>
				<BookCard bookName="Remote: Office Not Required" bookAuthor="Jason Fried" bookImage={RemoteBookImg} />

				<BookCard bookName="Papillon" bookAuthor="Henri Charriere" bookImage={PapilonBookImg} />

				<BookCard bookName="The Dark Tower:
The Gunslinger" bookAuthor="Stephen King" bookImage={DarkTowerBookImg} />
			</section>

			<section className={addBookReview}>
				<Button buttonText="Add Book Review" link="/add-book-review" />
			</section>

			<section className={menu_bar}>
				<div className={menu_item}>
					<Timeline />
					<p>Timeline</p>
				</div>
				<div className={menu_item}>
					<Books />
					<p>My Books</p>
				</div>
				<div className={menu_item}>
					<Review />
					<p>Add Review</p>
				</div>
				<div className={menu_item}>
					<Notifications />
					<p>Notifications</p>
				</div>
			</section>
		</main>
	);
}
