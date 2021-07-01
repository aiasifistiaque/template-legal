import { useRef, useEffect, useState } from 'react';
import Page from '../components/layout/Page';
import Hero from '../components/home/Hero';
import PracticeAreas from '../components/home/PracticeAreas';
import ExpertedAttornies from '../components/home/ExpertedAttornies';
import AboutOurFirm from '../components/home/AboutOurFirm';
import WhyHireUs from '../components/home/WhyHireUs';
import ClientsFeedback from '../components/home/ClientsFeedback';
import FreeConsultation from '../components/home/FreeConsultation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
	const heroRef = useRef();
	const aboutRef = useRef();
	const practiceAreasRef = useRef();
	const expertedAttorniesRef = useRef();
	const whyHireUsRef = useRef();
	const freeConsiltationRef = useRef();
	const clientsFeedbackRef = useRef();
	const refParams = { behavior: 'smooth', block: 'start' };

	const scroll = item => {
		console.log(item);
		if (item == 'home') {
			heroRef.current.scrollIntoView(refParams);
		} else if (item == 'about') {
			aboutRef.current.scrollIntoView(refParams);
		} else if (item == 'practice') {
			practiceAreasRef.current.scrollIntoView(refParams);
		} else if (item == 'team') {
			expertedAttorniesRef.current.scrollIntoView(refParams);
		} else if (item == 'contact') {
			freeConsiltationRef.current.scrollIntoView(refParams);
		}
	};

	return (
		<Page setScrollItem={item => scroll(item)} style={{ overflowY: 'hidden' }}>
			<div ref={heroRef}>
				<Hero />
			</div>

			<AnimatedDiv ref={aboutRef}>
				<AboutOurFirm />
			</AnimatedDiv>

			<AnimatedDiv ref={practiceAreasRef}>
				<PracticeAreas />
			</AnimatedDiv>
			<AnimatedDiv ref={expertedAttorniesRef}>
				<ExpertedAttornies />
			</AnimatedDiv>
			<AnimatedDiv ref={whyHireUsRef}>
				<WhyHireUs />
			</AnimatedDiv>
			<AnimatedDiv ref={clientsFeedbackRef}>
				<ClientsFeedback />
			</AnimatedDiv>

			<AnimatedDiv ref={freeConsiltationRef}>
				<FreeConsultation />
			</AnimatedDiv>
		</Page>
	);
}

const AnimatedDiv = ({ ref, children }) => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
			once: true,
			mirror: false,
		});
		//AOS.refresh();
	}, []);
	return (
		<div
			ref={ref}
			data-aos='fade-up'
			style={{
				overflowY: 'hidden',
				scrollbarWidth: 'none',
			}}>
			{children}
		</div>
	);
};
