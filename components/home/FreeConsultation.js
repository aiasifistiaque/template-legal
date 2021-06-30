import React from 'react';
import SectionHeadingText from './SectionHeadingText';
import styles from './styles/FreeConsultation.module.css';

const FreeConsultation = () => {
	return (
		<div className={styles.fcSection}>
			<div className={styles.textContainer}>
				<SectionHeadingText left title='Free Consultation'>
					Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod
					tempor incidide labeore dolore magna.
				</SectionHeadingText>
				<div className={styles.inputContainer}>
					<input type='text' placeholder='Your Name' />
					<input type='email' placeholder='Your Email' />
					<input type='text' placeholder='Practice Area' />
					<textarea
						type='text'
						rows={8}
						cols={100}
						placeholder='Your Message'></textarea>
					<input
						type='submit'
						value='Send Request'
						className={styles.submitButton}
					/>
				</div>
			</div>
			<div className={styles.imageContainer}></div>
		</div>
	);
};

export default FreeConsultation;
