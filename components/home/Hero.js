import React from 'react';
import styles from './styles/Hero.module.css';
import HeroActionButton from './HeroActionButton';

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.heroImageOverlay}>
				<h1>Welcome to Legal Firm</h1>
				<h3>
					This should be used to tell a story and let your users know a little
					more about your service.
				</h3>
				<HeroActionButton>Contact us</HeroActionButton>
			</div>
		</div>
	);
};

export default Hero;
