import Page from '../components/layout/Page';
import Hero from '../components/home/Hero';
import PracticeAreas from '../components/home/PracticeAreas';
import ExpertedAttornies from '../components/home/ExpertedAttornies';
import AboutOurFirm from '../components/home/AboutOurFirm';
import WhyHireUs from '../components/home/WhyHireUs';
import ClientsFeedback from '../components/home/ClientsFeedback';
import FreeConsultation from '../components/home/FreeConsultation';

export default function Home() {
	return (
		<Page>
			<Hero />
			<AboutOurFirm />
			<PracticeAreas />
			<ExpertedAttornies />
			<WhyHireUs />
			<ClientsFeedback />
			<FreeConsultation />
		</Page>
	);
}
