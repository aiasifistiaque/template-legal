import { useState, useEffect } from 'react';

const useIntersection = (element, rootMargin) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ rootMargin }
		);

		element && observer.observe(element);

		//return () => observer.unobserve(element);
	}, []);

	return isVisible;
};

export default useIntersection;
