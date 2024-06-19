'use client';

import s from './page.module.scss';
import Experience from '@/app/components/organisms/Experience/Experience';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const Page = () => {
	return (
		<article className={s.experience}>
			<OverlayScrollbarsComponent className={s.scroll}>
				<Experience places={[
					{
						name: 'CodeWave', position: 'Fullstack Developer',
						responsibilities: [
							'Development of CRM system and it\'s modules, such as statistics, kanban board and electronic document management',
							'Creation Pixel-Perfect webpage layouts with complex animations',
							'Creating authorization & authentication',
							'Integration of modern architectural methodologies, such as Atomic Design and FSD in projects',
							'Integration of modern development instruments, such as NextJS, reducing FPC and LCP metrics',
							'Code review, task complexity estimation, refactoring',
							'Cooperation with a team consisting of Frontend, Backend developers, Designer and SDET',
						],
						stack: [
							'JavaScript, TypeScript',
							'Node, Nest, TypeORM',
							'React, Next, Axios',
							'Redux, Redux Toolkit, Redux Thunk, Redux Middleware, React Query',
							'React-PDF, React-XLSX, React-Spring',
							'SASS, Module Styles, Material UI, Styled Components',
							'WebSocket(socket.io), REST',
							'PostgreSQL, Redis, JWT',
							'Docker, Nginx',
							'FSD, Atomic Design',
							'Eslint, Prettier',
							'Figma',
							'Vite'
						],
						dateFrom: '2022-2-1',
						dateTo: '2024-5-1'
					},
					{
						name: 'Aspect', position: 'Frontend Developer',
						responsibilities: [
							'Creating Pixel-Perfect webpage layouts',
							'Binding Backend and Frontend using HTTP, Rest, Axios',
							'Cooperation with a team consisting of 2 Frontend developers and designer',
							'Project supporting, modifying and refactoring'
						],
						stack: [
							'JavaScript, React, Redux',
							'HTML/CSS, SASS, Adaptive',
							'REST, Axios',
							'Figma',
							'Webpack'
						],
						dateFrom: '2021-3-1',
					}
				]} />
			</OverlayScrollbarsComponent>
		</article>
	);
};

export default Page;
