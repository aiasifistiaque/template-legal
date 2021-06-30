import React from 'react';
import styles from './styles/PracticeAreas.module.css';
import stylesTwo from './styles/WhyHireUs.module.css';

const SectionHeadingText = ({ title, children, left }) => {
	if (left)
		return (
			<div className={stylesTwo.sectionHeaderLeft}>
				<h2>{title}</h2>
				<h4>
					Lorem ipsum dolor amet, consectetur adipisice elitesede eiusmod tempor
					incidide labeore dolore magna
				</h4>
				<span />
			</div>
		);
	else
		return (
			<div className={styles.practiceAreaHeaders}>
				<h2>{title}</h2>
				<h4>
					Lorem ipsum dolor amet, consectetur adipisice elitesede eiusmod tempor
					incidide labeore dolore magna
				</h4>
				<span />
			</div>
		);
};

export default SectionHeadingText;
