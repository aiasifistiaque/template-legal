import React from 'react';
import styles from './styles/HeroActionButton.module.css';

const HeroActionButton = ({ children }) => {
	return <a className={styles.heroActionButton}>{children}</a>;
};

export default HeroActionButton;
