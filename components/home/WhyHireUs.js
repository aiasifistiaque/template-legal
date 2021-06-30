import React from 'react';
import styles from './styles/WhyHireUs.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBalanceScale,
	faHandshake,
	faShieldAlt,
	faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import SectionHeadingText from './SectionHeadingText';

const items = [
	{
		icon: faBalanceScale,
		title: 'Exclusively Areas',
	},
	{
		icon: faHandshake,
		title: 'Group Of Lawyers',
	},
	{
		icon: faShieldAlt,
		title: 'Cases Results',
	},
	{
		icon: faUserTie,
		title: 'Experts In Law',
	},
];

const WhyHireUs = () => {
	return (
		<div className={styles.whsSection}>
			<div className={styles.imageContainer}></div>
			<div className={styles.textContainer}>
				<SectionHeadingText left title='Why Hire Us?'>
					Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod
					tempor incidide labeore dolore magna.
				</SectionHeadingText>
				<div className={styles.itemContainer}>
					{items.map((item, i) => (
						<Item key={i} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

const Item = ({ item }) => {
	return (
		<div className={styles.item}>
			<FontAwesomeIcon icon={item.icon} className={styles.icon} />
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

export default WhyHireUs;
