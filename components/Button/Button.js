import React from 'react';
import styles from './Button.css';
import Link from 'next/link';

export default function Button(props) {
	const { button } = styles;
	const { buttonText, link } = props;
	return (
		<button className={button}>
			<Link href={link}>
				<a className={link}>{buttonText}</a>
			</Link>
		</button>
	);
}
