import React from 'react';
import styles from './styles/PracticeAreas.module.css';

//this section container containes many child array items and header

const SectionContainerOne = ({ children, style }) => {
	return (
		<div className={styles.practiceAreas} style={style}>
			{children}
		</div>
	);
};

export default SectionContainerOne;
