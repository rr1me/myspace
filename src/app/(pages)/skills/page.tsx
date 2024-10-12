'use client';

import s from './page.module.scss';
import { rajdhani } from '@/app/theme';
import { createClassName } from '@/app/components/shared/utils';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import SkillColumn, { SkillData } from '@/app/components/organisms/SkillColumn/SkillColumn';
import { useChainedSprings, useShowPageAnimation } from '@/app/components/shared/hooks';
import { animated, easings } from '@react-spring/web';

const config = {
	easing: easings.easeOutExpo,
	duration: 1500
};

const Page = () => {
	const [pageAnimation, onAnimationEnd] = useShowPageAnimation('skills');

	const [
		verticalTabAnim,
		horizontalTabAnim,
		headerAnim,
		innerAnim
	] = useChainedSprings([
		{ options: [{ scaleY: 0 }, { scaleY: 1 }, config], timing: 0 },
		{ options: [{ scaleX: 0 }, { scaleX: 1 }, config], timing: 0.5 },
		{ options: [{ y: '105%' }, { y: '0' }, config], timing: 1 },
		{ options: [{ y: '-105%' }, { y: '0' },
			{ duration: 1200, easing: easings.easeInOutQuint }, onAnimationEnd], timing: 1.3 },
	], pageAnimation);

	const EncapsulatedSkillColumn = ({ header, children }: {header: string, children: SkillData[]}) =>
		<SkillColumn
			horizontalTabSprings={horizontalTabAnim}
			headerSprings={headerAnim}
			innerSprings={innerAnim}
			header={header}>
			{children}
		</SkillColumn>;

	return (
		<article className={createClassName(rajdhani, s.skills)}>
			<OverlayScrollbarsComponent className={s.scroll}>
				<div className={s.global}>
					<div className={s.wrapper}>
						<EncapsulatedSkillColumn header='backend'>{back}</EncapsulatedSkillColumn>
						<animated.div style={verticalTabAnim} className={s.tab} />
						<EncapsulatedSkillColumn header='frontend'>{front}</EncapsulatedSkillColumn>
						<animated.div style={verticalTabAnim} className={createClassName(s.tab, s.tabAdaptive)} />
						<EncapsulatedSkillColumn header='miscellaneous'>{misc}</EncapsulatedSkillColumn>
					</div>
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
			{
				header: 'testing',
				content: [
					{
						header: 'unit | integration',
						content: [
							'jest',
							'react testing library'
						]
					},
					{
						header: 'e2e',
						content: ['playwright']
					}
				]
			}
		],
	},
];
const back = [
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
