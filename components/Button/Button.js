import React from 'react';
import styles from './Button.css';
import Link from 'next/link';

export default function Button(props) {
	const { button } = styles;
	const { buttonText, link } = props;
	return (
		<Link href={link}>
			<button className={button}>
				<a className={link}>{buttonText}</a>
			</button>
		</Link>
	);
}
