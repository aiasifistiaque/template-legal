import React from 'react';
import SectionContainerOne from './SectionContainerOne';
import SectionHeadingText from './SectionHeadingText';
import Image from 'next/image';
import styles from './styles/ClientsFeedback.module.css';

const items = [
	{
		name: 'John Doe',
		image: '/laywer3.jpeg',
	},
	{
		name: 'Tommy Doe',
		image: '/laywer.jpeg',
	},
	{
		name: 'George RR. Martin',
		image: '/laywer2.jpeg',
	},
];

const ClientsFeedback = () => {
	return (
		<SectionContainerOne>
			<SectionHeadingText title='Clients Feedback'>
				Lorem ipsum dolor amet, consectetur adipisice elitesede eiusmod tempor
				incidide labeore dolore magna
			</SectionHeadingText>
			<div className={styles.cfbContainer}>
				{items.map((item, i) => (
					<Item key={i} item={item} />
				))}
			</div>
		</SectionContainerOne>
	);
};

const Item = ({ item }) => {
	return (
		<div className={styles.item}>
			<div className={styles.imageContainer}>
				<Image
					src={item.image}
					height={50}
					width={50}
					className={styles.image}
				/>
			</div>
			<blockquote>
				{
					'"Legal represented me on a matter where I was looking at significant prison time. Immediately, I knew that I was in good hands."'
				}
			</blockquote>
			<h5> - {item.name}</h5>
		</div>
	);
};

export default ClientsFeedback;
