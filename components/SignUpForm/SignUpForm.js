import React from 'react';
import styles from './SignUpForm.css';
import Link from 'next/link';
import LightBulb from '../../static/light-bulb.svg';
import Button from '../Button/Button';
import { HeaderText, ParagraphText } from '../Typography/Typography';

const handleForm = e => {
	e.preventDefault();
	console.log(e);
};

export default function SignUpForm() {
	const { button, main, headerText, onBoardingText, form, loginText, formButton } = styles;

	return (
		<main className={main}>
			<LightBulb />
			<HeaderText headerText="Welcome!" />
			<ParagraphText paragraphText="Create your account to get started. After that, you can share books and make friends." />
			<form className={form} onSubmit={handleForm}>
				<label htmlFor="email">
					email
					<input type="email" name="email" required="required" />
				</label>
				<label htmlFor="password">
					password
					<input type="password" name="password" required="required" />
				</label>
				<label htmlFor="confirm password">
					type password again
					<input type="password" name="confirm password" required="required" />
				</label>

				<section className={formButton}>
					<Button buttonText="sign up" link="/book-list" />
				</section>
			</form>

			<p className={loginText}>
				Already have an account?{' '}
				<Link href="/login">
					<a>Login</a>
				</Link>
			</p>
		</main>
	);
}
