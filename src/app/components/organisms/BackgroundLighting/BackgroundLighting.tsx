import Lamp from '@/app/components/atoms/Lamp/Lamp';

const BackgroundLighting = ({ start }: {start: boolean}) => {
	return (
		<>
			<Lamp color={'rgba(40, 134, 154, .2)'} falloff={35} sx={{
				height: 260,
				width: '100%',
				top: -40,
			}} delay={600} duration={3000} start={start}/>

			<Lamp color={'rgba(154, 40, 73, .2)'} falloff={40} sx={{
				height: 150,
				width: '100%',
				top: 80
			}} delay={200} duration={3000} start={start}/>

			<Lamp color={'rgba(154,40,73, .11)'} falloff={16} sx={{
				height: 1020,
				width: '100%',
				top: 20,
			}} delay={1500} duration={3000} start={start}/>

			<Lamp color={'rgba(40, 134, 154, .1)'} falloff={15} sx={{
				height: 1300,
				width: '100%',
				top: 750,
			}} delay={2000} duration={3000} start={start}/>
		</>
	);
};

export default BackgroundLighting;
