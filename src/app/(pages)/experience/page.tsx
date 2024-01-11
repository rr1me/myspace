import Experience from '@/app/components/organisms/Experience/Experience';
import dayjs from 'dayjs';

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
					],
					// dateMark: new Date(2022, 7, 7)
					dateMark: dayjs('2022-8-7')
				},
				// { name: 'CodeWave', position: 'Fullstack Developer',
				// 	responsibilities: [
				// 		'q'
				// 	], dateMark: dayjs('2022-9-7')
				// }
			]}/>
		</article>
	);
};

export default Page;
