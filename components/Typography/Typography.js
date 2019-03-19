import React from 'react';
import style from './Typography.css';

export const HeaderText = props => {
	return <h1 className={style.headerTextStyle}>{props.headerText}</h1>;
};

export const ParagraphText = props => {
	return <p className={style.paragraphTextStyle}>{props.paragraphText}</p>;
};
