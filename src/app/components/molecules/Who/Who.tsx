'use client';

import s from './Who.module.scss';
import LiningWrapper from '@/app/components/atoms/LiningWrapper/LiningWrapper';
import restyle from '@/app/components/shared/restyle';
import TabToChange from '@/app/components/atoms/Tab/Tab';
import { colorVars } from '@/app/theme';
import { animated, easings, useChain, useSpring, useSpringRef } from '@react-spring/web';

const Tab = restyle(TabToChange, {
	background: colorVars.g_separator_oneway_main,
	height: 1,
	width: '50%'
});
const TabVert = restyle(TabToChange, {
	background: colorVars.g_separator_oneway_main_vertical,
	width: 1,
	height: '100%'
});

const config = {
	duration: 1500,
	easing: easings.easeInOutExpo
};

let initialized: boolean | undefined = false;
const Who = () => {
	const springsWidthRef = useSpringRef();
	const [springsWidth] = useSpring(() => (initialized ?
		{
			ref: springsWidthRef,
			from: {
				height: '1px',
				width: '0',
				left: '50%'
			},
			to: {
				width: '100%',
				left: '0'
			},
			config
		} : undefined
	));
	const springsHeightRef = useSpringRef();
	const [springsHeight] = useSpring(() => (initialized ?
		{
			ref: springsHeightRef,
			from:{
				height: '1%'
			},
			to: {
				height: '100%'
			},
			config,
			onRest: () => {
				initialized = undefined;
			}
		} : undefined
	));

	useChain(initialized ? [springsWidthRef, springsHeightRef] : [], [0, 0.8]);
	if (initialized === false) initialized = true;

	return (
		<div className={s.wrapper}>
			<animated.div style={{ ...springsWidth, ...springsHeight }}
				className={s.who}>
				<LiningWrapper>
					<Tab sx={{ bottom: 0 }} />
					<TabVert sx={{}} />
					<Tab sx={{
						right: 0,
						rotate: '180deg'
					}} />
					<TabVert sx={{
						right: 0,
						rotate: '180deg'
					}} />
				</LiningWrapper>

				<article className={s.innerWho}>
					<h1 className={s.me}>
						Hello there<br />
						I&apos;m Rime<br />
						Fullstack Developer
					</h1>
					<h2 className={s.desc}>
						I&apos;m in love with designing, modelling <br />
						and programming <br />
						I like to solve difficult problems, <br />
						build deep algorithms and create stuff
					</h2>
				</article>
			</animated.div>
		</div>
	);
};

export default Who;
