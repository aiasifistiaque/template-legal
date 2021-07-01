import React, { useState, useEffect } from 'react';

const useIsDomInView = ref => {
	//const refHeight = ref.current.offsetTop;
	const [inView, setInView] = useState(false);

	useEffect(() => {
		if (window.scrollY >= ref.current.offsetTop) setInView(true);

		function handleScroll() {
			const height = window.innerHeight;
			if (window.scrollY >= ref.current.offsetTop - height) {
				setInView(() => true);
				//console.log('i am set to true');
			} else {
				//setInView(false);
				//console.log('i am set to false');
			}
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [ref]);

	return { inView };
};

export default useIsDomInView;
