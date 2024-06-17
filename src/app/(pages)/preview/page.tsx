'use client';

import { mohave } from '@/app/theme';
import { createClassName } from '@/app/components/shared/utils';
import s from './page.module.scss';
import Experience from '@/app/components/organisms/Experience/Experience';

const page = () => {
	return (
		<div className={createClassName(mohave, s.prev)}>
			{/*<CryptoDataChecker/>*/}
			{/*<Who/>*/}
			<article className={s.article}>
				<Experience places={[
					{
						name: 'CodeWave', position: 'Fullstack Developer',
						responsibilities: [
							'Developing internal CRM system',
							'Building projects from start to MVP and production',
							'Creating authorization & authentication',
							'Cooperation with a team consisting of Frontend, Backend developers, Designer and SDET',
							'Optimization of web applications'
						],
						dateFrom: '2022-3-1',
					},
					{
						name: 'Aspect', position: 'Frontend Developer',
						responsibilities: [
							'Developing internal CRM system',
							'Building projects from start to MVP and production',
							'Creating authorization & authentication',
							'Cooperation with a team consisting of Frontend, Bacrkend developers, Designer and SDET',
							'Cooperation with a team consisting of Frontend, Backtend developers, Designer and SDET',
							'Cooperation with a team consisting of Frontend, Backegnd developers, Designer and SDET',
							'Cooperation with a team consisting of Frontend, Backhend developers, Designer and SDET',
							'Optimization of web applications'
						],
						dateFrom: '2021-3-1',
						// dateTo: '2022-1-1'
					}
				]} />
			</article>
		</div>
	);
};

export default page;
