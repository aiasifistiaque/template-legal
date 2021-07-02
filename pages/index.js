import { useRef, useEffect } from 'react';
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
	const freeConsiltationRef = useRef();
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
		<Page
			setScrollItem={item => scroll(item)}
			style={{ overflowY: 'hidden', overflowX: 'hidden' }}>
			<div ref={heroRef}>
				<Hero />
			</div>
			<div ref={aboutRef}>
				<AnimatedDiv>
					<AboutOurFirm />
				</AnimatedDiv>
			</div>

			<div ref={practiceAreasRef}>
				<AnimatedDiv>
					<PracticeAreas />
				</AnimatedDiv>
			</div>

			<div ref={expertedAttorniesRef}>
				<AnimatedDiv>
					<ExpertedAttornies />
				</AnimatedDiv>
			</div>

			<AnimatedDiv>
				<WhyHireUs />
			</AnimatedDiv>

			<AnimatedDiv>
				<ClientsFeedback />
			</AnimatedDiv>

			<div ref={freeConsiltationRef}>
				<AnimatedDiv>
					<FreeConsultation />
				</AnimatedDiv>
			</div>
		</Page>
	);
}

const AnimatedDiv = ({ children }) => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
			once: true,
			mirror: false,
		});
	}, []);
	return <div data-aos='fade-up'>{children}</div>;
};
