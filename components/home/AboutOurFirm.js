import React from 'react';
import styles from './styles/AboutOurFirm.module.css';
import Image from 'next/image';

const AboutOurFirm = () => {
	return (
		<div className={styles.aofContainer}>
			<div className={styles.imageContainer}>
				<Image
					src='/tommy.jpeg'
					height={100}
					width={1000}
					className={styles.image}
				/>
			</div>
			<div className={styles.textContainer}>
				<h2>About Our Firm</h2>
				<span />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sede do
					eiusmod tempor incididunt ut labore dolore magna aliqa Ut enim ad
					minim veniam, quis nostrud exercitation.
				</p>
				<p>
					Euis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida.
				</p>
			</div>
		</div>
	);
};

export default AboutOurFirm;
