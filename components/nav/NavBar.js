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

const NavBar = ({ barPressed, open, close }) => {
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
				<a>Legal</a>
			</div>
			<div className={scroll > 50 ? styles.navitemsInverted : styles.navitems}>
				{width > 1000 ? (
					<NavItemsBigScreen />
				) : (
					<FontAwesomeIcon
						icon={barPressed ? faTimes : faBars}
						onClick={open}
						className={styles.navcollapse}
					/>
				)}
			</div>
			<animated.div className={styles.navitemsSmall} style={springStyle}>
				<NavItemsSmallScreen close={close} />
			</animated.div>
			{/* <motion.div
				animate={barPressed ? 'open' : 'closed'}
				variants={variants}
				className={styles.smallscreenitems}>
				<NavItemsBigScreen />
			</motion.div> */}
		</div>
	);
};

const NavItemsBigScreen = () => {
	return (
		<>
			<a>Home</a>
			<a>About</a>
			<a>Feature</a>
			<a>Team</a>
			<a>Contact</a>
		</>
	);
};

const NavItemsSmallScreen = ({ close }) => {
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
			<a>Home</a>
			<a>About</a>
			<a>Feature</a>
			<a>Team</a>
			<a>Contact</a>
			<a>Legal</a>
			<a>History</a>
			<a>Terms of use</a>
			<a>Privacy Policy</a>
		</>
	);
};

export default NavBar;
