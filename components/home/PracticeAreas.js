import React from 'react';
import styles from './styles/PracticeAreas.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBalanceScale,
	faHandHoldingUsd,
	faGavel,
	faDesktop,
	faLandmark,
	faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import SectionHeadingText from './SectionHeadingText';
import SectionContainerOne from './SectionContainerOne';

const items = [
	{
		icon: faGavel,
		title: 'Criminal Law',
	},
	{
		icon: faLandmark,
		title: 'Real Estate Law',
	},
	{
		icon: faBalanceScale,
		title: 'Family Law',
	},
	{
		icon: faGlobe,
		title: 'International Law',
	},
	{
		icon: faHandHoldingUsd,
		title: 'Finincial Law',
	},
	{
		icon: faDesktop,
		title: 'Technology Law',
	},
];

const PracticeAreas = () => {
	return (
		<SectionContainerOne style={{ backgroundColor: 'whitesmoke' }}>
			<SectionHeadingText title='Practice Areas'>
				Lorem ipsum dolor amet, consectetur adipisice elitesede eiusmod tempor
				incidide labeore dolore magna
			</SectionHeadingText>

			<div className={styles.practiceAreaContainer}>
				{items.map((item, i) => (
					<PracticeAreaItems key={i} item={item} />
				))}
			</div>
		</SectionContainerOne>
	);
};

const PracticeAreaItems = ({ item }) => {
	return (
		<div className={styles.areaItem}>
			<FontAwesomeIcon icon={item.icon} className={styles.areaItemIcon} />
			<div>
				<h5>{item.title}</h5>
				<p>
					Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod tempor
					incidide.
				</p>
			</div>
		</div>
	);
};

export default PracticeAreas;
