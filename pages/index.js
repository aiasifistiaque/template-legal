import { useRef } from 'react';
import Page from '../components/layout/Page';
import Hero from '../components/home/Hero';
import PracticeAreas from '../components/home/PracticeAreas';
import ExpertedAttornies from '../components/home/ExpertedAttornies';
import AboutOurFirm from '../components/home/AboutOurFirm';
import WhyHireUs from '../components/home/WhyHireUs';
import ClientsFeedback from '../components/home/ClientsFeedback';
import FreeConsultation from '../components/home/FreeConsultation';

export default function Home() {
	//const [scrollItem, setScrollItem] = useState('home');

	const heroRef = useRef();
	const aboutRef = useRef();
	const practiceAreasRef = useRef();
	const expertedAttorniesRef = useRef();
	const whyHireUsRef = useRef();
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
		<Page setScrollItem={item => scroll(item)}>
			<div ref={heroRef}>
				<Hero />
			</div>
			<div ref={aboutRef}>
				<AboutOurFirm />
			</div>
			<div ref={practiceAreasRef}>
				<PracticeAreas />
			</div>
			<div ref={expertedAttorniesRef}>
				<ExpertedAttornies />
			</div>
			<WhyHireUs />
			<ClientsFeedback />
			<div ref={freeConsiltationRef}>
				<FreeConsultation />
			</div>
		</Page>
	);
}
