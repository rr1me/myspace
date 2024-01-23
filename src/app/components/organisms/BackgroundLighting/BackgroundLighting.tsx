import Lamp from '@/app/components/atoms/Lamp/Lamp';
import PngLamp from '@/app/components/atoms/Lamp/PngLamp';

const BackgroundLighting = ({ start, png }: {start: boolean, png?: boolean}) => {
	return png ?
		<>
			<PngLamp start={start} delay={600} duration={3000} cyan moreFalloff sx={{
				opacity: 0.2,
				height: 140,
				width: 3000,
				objectFit: 'fill',
				top: 0
			}}/>
			<PngLamp start={start} delay={200} duration={3000} moreFalloff sx={{
				opacity: 0.13,
				height: 130,
				width: 3000,
				objectFit: 'fill',
				top: 100
			}}/>
			<PngLamp start={start} delay={1500} duration={3000} sx={{
				opacity: 0.1
			}}/>
			<PngLamp start={start} delay={2000} duration={3000} cyan sx={{
				opacity: 0.11,
				top: 850,
			}}/>
		</>
		:
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
		</>;
};

export default BackgroundLighting;
