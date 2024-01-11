'use client';

import s from './page.module.scss';
import { rajdhani } from '@/app/theme';
import { createClassName } from '@/app/components/shared/utils';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import SkillColumn from '@/app/components/organisms/SkillColumn/SkillColumn';

const Page = () => {
	return (
		<article className={createClassName(rajdhani, s.skills)}>
			<OverlayScrollbarsComponent className={s.scroll}>
				<div className={s.wrapper}>
					<SkillColumn header='backend'>
						{back}
					</SkillColumn>
					<div className={s.tab} />
					<SkillColumn header='frontend'>
						{front}
					</SkillColumn>
					<div className={createClassName(s.tab, s.tabAdaptive)} />
					<SkillColumn header='miscellaneous'>
						{misc}
					</SkillColumn>
				</div>
			</OverlayScrollbarsComponent>
		</article>
	);
};

export default Page;

const front = [
	{
		header: 'javascript',
		content: [
			'typescript',
			{
				header: 'react',
				content: [
					'next',
					'hooks',
					'router',
					'context',
				],
			},
			{
				header: 'redux',
				content: [
					'redux toolkit',
					'redux thunk',
					'rtk query',
				],
			},
			{
				header: 'layout design',
				content: [
					'html5',
					'css3 | scss | sass',
					'adaptive',
					'semantics',
				],
			},
			{
				header: 'building',
				content: [
					'webpack',
					'vite',
				],
			},
			'canvas | webgl',
		],
	},
];
const back = [
	{
		header: 'c#',
		content: [
			{
				header: 'asp .net core',
				content: [
					'entity framework',
					'linq',
					'swashbuckle',
				],
			},
		],
	},
	{
		header: 'node js',
		content: [
			'nest',
			'express',
			{
				header: 'orms',
				content: [
					'typeorm',
					'prismaorm',
				],
			},
		],
	},
];
const misc = [
	{
		header: 'databases',
		content: [
			'postgresql',
			'mysql',
			'redis',
			'acid',
			'transact sql',
		],
	},
	{
		header: 'protocols',
		content: [
			'http | https',
			'tcp | udp',
			'webrtc',
			'smtp',
			{ header: 'websocket', content: ['raw', 'socket.io'] },
		],
	},
	{
		header: 'tools',
		content: [
			'docker',
			'figma',
			'git',
			'postman',
			'blender',
			'pureref',
			'photoshop',
		],
	},
	{
		header: 'systems',
		content: [
			'linux: ubuntu',
			'windows',
		],
	},
	{
		header: 'network',
		content: [
			'nginx',
			'apache',
		],
	},
	{
		header: 'methodology',
		content: [
			'oop',
			'fp',
			'solid',
			'design patterns',
			{
				header: 'principles',
				content: [
					'kiss',
					'dry',
					'yagni',
					'bduf',
				],
			},
		],
	},
];
