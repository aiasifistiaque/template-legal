import React, { useState, useEffect } from 'react';
import styles from './styles/NavBar.module.css';
import useGetWindowSize from '../../hooks/useGetWindowSize';
import {
	faBars,
	faTimes,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import useGetWindowScroll from '../../hooks/useGetWindowScroll';
import { useSpring, animated } from 'react-spring';

const variants = {
	open: { opacity: 1 },
	closed: { display: 'none', opacity: 0 },
};

const NavBar = ({ barPressed, open, close, select }) => {
	const { height, width, isDesktop } = useGetWindowSize();
	const { scroll } = useGetWindowScroll();

	const springStyle = useSpring({
		from: {
			x: '120%',
		},
		to: {
			x: barPressed ? '0%' : '120%',
		},

		delay: 100,
	});

	useEffect(() => {
		isDesktop && close();
	}, [isDesktop]);

	return (
		<div
			className={
				barPressed
					? styles.navbarBlurred
					: scroll > 50
					? styles.navbarInverted
					: styles.navbar
			}>
			<div className={styles.navbrand}>
				<a>Think Legal</a>
			</div>
			<div className={scroll > 50 ? styles.navitemsInverted : styles.navitems}>
				{width > 1000 ? (
					<NavItemsBigScreen select={item => select(item)} />
				) : (
					<FontAwesomeIcon
						icon={faBars}
						onClick={open}
						className={styles.navcollapse}
					/>
				)}
			</div>
			<animated.div className={styles.navitemsSmall} style={springStyle}>
				<NavItemsSmallScreen close={close} select={item => select(item)} />
			</animated.div>
		</div>
	);
};

const NavItemsBigScreen = ({ select }) => {
	return (
		<>
			<a onClick={() => select('home')}>Home</a>
			<a onClick={() => select('about')}>About</a>
			<a onClick={() => select('practice')}>Practice Areas</a>
			<a onClick={() => select('team')}>Team</a>
			<a onClick={() => select('contact')}>Contact</a>
		</>
	);
};

const NavItemsSmallScreen = ({ close, select }) => {
	const sel = item => {
		close();
		setTimeout(
			function () {
				select(item);
			},
			[100]
		);
	};
	return (
		<>
			<a>
				<FontAwesomeIcon
					icon={faChevronRight}
					onClick={close}
					height={20}
					className={styles.navCloseBtn}
				/>
			</a>
			<a onClick={() => sel('home')}>Home</a>
			<a onClick={() => sel('about')}>About</a>
			<a onClick={() => sel('practice')}>Practice Areas</a>
			<a onClick={() => sel('team')}>Team</a>
			<a onClick={() => sel('contact')}>Contact</a>
		</>
	);
};

export default NavBar;
