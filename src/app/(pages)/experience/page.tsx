import Experience from '@/app/components/organisms/Experience/Experience';

const Page = () => {
	return (
		<article>
			<Experience places={[
				{ name: 'CodeWave', position: 'Fullstack Developer',
					responsibilities: [
						'Developing internal CRM system',
						'Building projects form start to MVP and production',
						'Creating authorization & authentication',
						'Cooperation with a team consisting of Frontend, Backend developers, Designer and SDET',
						'Optimization of web applications'
					], dateMark: new Date(2022, 7, 7)
				},
				// { name: 'CodeWave', position: 'Fullstack Developer',
				// 	responsibilities: [
				// 		'q'
				// 	], dateMark: new Date(2022, 7, 7)
				// }
			]}/>
		</article>
	);
};

export default Page;
