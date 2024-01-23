'use client';

import s from './page.module.scss';
import { rajdhani } from '@/app/theme';
import { createClassName } from '@/app/components/shared/utils';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import SkillColumn from '@/app/components/organisms/SkillColumn/SkillColumn';
import { useShowPageAnimation } from '@/app/components/shared/hooks';
import { useSpring, animated, easings, useSpringRef, useChain } from '@react-spring/web';

const config = {
	easing: easings.easeOutExpo,
	duration: 1500
};

const Page = () => {
	const [pageAnimation, onAnimationEnd] = useShowPageAnimation('skills');

	let headerSprings, innerSprings, horizontalTabSprings, verticalTabSprings;

	if (pageAnimation){
		const verticalTabSpringsRef = useSpringRef();
		const horizontalTabSpringsRef = useSpringRef();
		const headerSpringsRef = useSpringRef();
		const innerSpringsRef = useSpringRef();

		verticalTabSprings = useSpring({
			ref: verticalTabSpringsRef,
			from: {
				scaleY: 0
			},
			to: {
				scaleY: 1
			},
			config
		});
		horizontalTabSprings = useSpring({
			ref: horizontalTabSpringsRef,
			from: {
				scaleX: 0
			},
			to: {
				scaleX: 1
			},
			config
		});
		headerSprings = useSpring({
			ref: headerSpringsRef,
			from: {
				y: '105%'
			},
			to: {
				y: '0'
			},
			config
		});
		innerSprings = useSpring({
			ref: innerSpringsRef,
			from: {
				y: '-100%'
			},
			to: {
				y: '0'
			},
			config: {
				duration: 1200,
				easing: easings.easeInOutQuint
			},
			onRest: onAnimationEnd
		});

		useChain([verticalTabSpringsRef, horizontalTabSpringsRef,
			headerSpringsRef, innerSpringsRef],
		[0, 0.5, 1, 1.3]
		);
	}

	return (
		<article className={createClassName(rajdhani, s.skills)}>
			<OverlayScrollbarsComponent className={s.scroll}>
				<div className={s.global}>
					<div className={s.wrapper}>
						<SkillColumn horizontalTabSprings={horizontalTabSprings}
							headerSprings={headerSprings}
							innerSprings={innerSprings}
							header='backend'>
							{back}
						</SkillColumn>
						<animated.div style={verticalTabSprings} className={s.tab} />
						<SkillColumn horizontalTabSprings={horizontalTabSprings}
							headerSprings={headerSprings}
							innerSprings={innerSprings}
							header='frontend'>
							{front}
						</SkillColumn>
						<animated.div style={verticalTabSprings} className={createClassName(s.tab, s.tabAdaptive)} />
						<SkillColumn horizontalTabSprings={horizontalTabSprings}
							headerSprings={headerSprings}
							innerSprings={innerSprings}
							header='miscellaneous'>
							{misc}
						</SkillColumn>
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
