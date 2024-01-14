'use client';

import s from './Background.module.scss';
import RedMovingCode from '@/app/components/organisms/RedMovingCode/RedMovingCode';
import ExtendingLine from '@/app/components/atoms/ExtendingLine/ExtendingLine';
import { ExtendingLineVariant } from '@/app/components/atoms/ExtendingLine/utils';
import TopTextLine from '@/app/components/molecules/TopTextLine/TopTextLine';
import BackgroundBottom from '@/app/components/organisms/BackgroundBottom/BackgroundBottom';
import RedCodeTopHelmets from '@/app/components/organisms/RedCodeTopHelmets/RedCodeTopHelmets';
import BackgroundLighting from '@/app/components/organisms/BackgroundLighting/BackgroundLighting';
import { mohave } from '@/app/theme';
import TopElement from '@/app/components/organisms/TopElement/TopElement';
import { createClassName } from '@/app/components/shared/utils';
import { useAnimationStore } from '@/app/components/shared/syncStore';
import PngLamp from '@/app/components/atoms/Lamp/PngLamp';


const Background = () => {
	const preloaderVisibility = useAnimationStore(s => s.preloaderVisibility);

	return (
		<div className={createClassName(s.background, mohave)}>
			<BackgroundLighting start={!preloaderVisibility} />

			{/*<PngLamp delay={600} duration={3000} cyan moreFalloff sx={{*/}
			{/*	opacity: 0.2,*/}
			{/*	height: 140,*/}
			{/*	width: 3000,*/}
			{/*	objectFit: 'fill',*/}
			{/*	top: 0*/}
			{/*}}/>*/}
			{/*<PngLamp delay={200} duration={3000} moreFalloff sx={{*/}
			{/*	opacity: 0.13,*/}
			{/*	height: 130,*/}
			{/*	width: 3000,*/}
			{/*	objectFit: 'fill',*/}
			{/*	top: 100*/}
			{/*}}/>*/}
			{/*<PngLamp delay={1500} duration={3000} sx={{*/}
			{/*	opacity: 0.1*/}
			{/*}}/>*/}
			{/*<PngLamp delay={2000} duration={3000} cyan sx={{*/}
			{/*	opacity: 0.11,*/}
			{/*	top: 850,*/}
			{/*	// transform: 'translateY(60%) scale(100%, 45%)'*/}
			{/*}}/>*/}
			{/*fixme need more optimization*/}

			{!preloaderVisibility &&
			<>
				<TopElement />

				<RedCodeTopHelmets />

				<TopTextLine />

				<RedMovingCode />

				<ExtendingLine variant={ExtendingLineVariant.centered} color='g_separator' />

				<BackgroundBottom />
			</>
			}
		</div>
	);
};

export default Background;
