import Lamp from '@/app/components/atoms/Lamp/Lamp';

const BackgroundLighting = () =>
	(
		<>
			<Lamp color={'rgba(40, 134, 154, .3)'} sx={{
				height: 1000,
				width: 1000,
				left: '60vw',
				top: -600,
				transform: 'scale(4, 1)',
			}} delay={600} duration={3000} />

			<Lamp color={'rgba(154, 40, 73, .2)'} sx={{
				height: 500,
				width: 500,
				left: '60vw',
				top: -80,
				transform: 'scale(8, .3)',
			}} delay={200} duration={3000} />

			<Lamp color={'rgba(154, 40, 73, .15)'} sx={{
				height: 500,
				width: 500,
				left: '65vw',
				top: 250,
				transform: 'scale(8, 2.5)',
			}} delay={1500} duration={3000} />

			<Lamp color={'rgba(40, 134, 154, .1)'} sx={{
				height: 500,
				width: 500,
				left: '60vw',
				top: 750,
				transform: 'scale(4, 1)',
			}} delay={700} duration={3000} />

			<Lamp color={'rgba(40, 134, 154, .04)'} sx={{
				height: 1000,
				width: 1000,
				left: '60vw',
				top: 750,
				transform: 'scale(4, 1)',
			}} delay={2000} duration={3000} />

			<Lamp color={'rgba(40, 134, 154, .06)'} sx={{
				height: 1000,
				width: 1000,
				left: '55vw',
				top: 800,
				transform: 'scale(4, 1)',
			}} delay={2000} duration={3000} />
		</>
	);

export default BackgroundLighting;
