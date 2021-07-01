import React from 'react';
import SectionContainerOne from './SectionContainerOne';
import SectionHeadingText from './SectionHeadingText';
import Image from 'next/image';
import styles from './styles/ExpertedAttornies.module.css';

const data = [
	{ name: 'John Doe', image: '/laywer3.jpeg', position: 'CEO & Manager' },
	{ name: 'Tommy Printz', image: '/laywer2.jpeg', position: 'Family Lawyer' },
	{
		name: 'Sajeeb Martin',
		image: '/sajeeb.jpeg',
		position: 'Finincial Laywer',
	},
];

const ExpertedAttornies = () => {
	return (
		<SectionContainerOne>
			<SectionHeadingText title='Experted Attorneys'>
				Lorem ipsum dolor amet, consectetur adipisice elitesede eiusmod tempor
				incidide labeore dolore magna
			</SectionHeadingText>
			<div className={styles.eAttContainer}>
				{data.map((item, i) => (
					<Items key={i} item={item} />
				))}
			</div>
		</SectionContainerOne>
	);
};

const Items = ({ item }) => {
	return (
		<div className={styles.item}>
			<div className={styles.imageContainer}>
				<Image
					src={item.image}
					height={450}
					width={400}
					className={styles.image}
					alt={item.name}
				/>
			</div>
			<div className={styles.textContainer}>
				<h5>{item.name}</h5>
				<p>{item.position}</p>
			</div>
		</div>
	);
};

export default ExpertedAttornies;
