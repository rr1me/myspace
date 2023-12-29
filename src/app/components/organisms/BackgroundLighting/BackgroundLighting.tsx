import Lamp from '@/app/components/atoms/Lamp/Lamp';

const clr = 'rgba(154,40,73,0.11)'

const BackgroundLighting = () =>
	(
		<>
			<Lamp color={'rgba(40, 134, 154, .2)'} falloff={50} sx={{
				height: 1000,
				width: 1000,
				left: '60vw',
				top: -600,
				transform: 'scale(10, 0.5)',
			}} delay={600} duration={3000} />

			<Lamp color={'rgba(154, 40, 73, .2)'} sx={{
				height: 500,
				width: 500,
				left: '60vw',
				top: -80,
				transform: 'scale(8, .3)',
			}} delay={200} duration={3000} />

			<Lamp color={'rgba(154,40,73, 0.11)'} falloff={50} sx={{
				height: 500,
				width: 500,
				left: '65vw',
				top: 250,
				transform: 'scale(15, 2)'
			}} delay={1500} duration={3000} />

			<Lamp color={'rgba(40, 134, 154, .06)'} falloff={40} sx={{
				height: 500,
				width: 500,
				left: '63vw',
				top: 770,
				transform: 'scale(8, 0.7)',
			}} delay={2000} duration={3000} />

			<Lamp color={'rgba(40, 134, 154, .035)'} falloff={55} sx={{
				height: 1000,
				width: 1000,
				left: '60vw',
				top: 840,
				transform: 'scale(8, 1)',
			}} delay={2000} duration={3000} />

			<Lamp color={'rgba(40, 134, 154, .02)'} sx={{
				height: 1000,
				width: 1000,
				left: '55vw',
				top: 800,
				transform: 'scale(4, 1)',
			}} delay={2000} duration={3000} />
		</>
	);

export default BackgroundLighting;
