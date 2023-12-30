'use client';

import s from './Background.module.scss';
import RedMovingCode from '@/app/components/organisms/RedMovingCode/RedMovingCode';
import ExtendingLine from '@/app/components/atoms/ExtendingLine/ExtendingLine';
import { ExtendingLineVariant } from '@/app/components/atoms/ExtendingLine/utils';
import TopTextLine from '@/app/components/molecules/TopTextLine/TopTextLine';
import BackgroundBottom from '@/app/components/organisms/BackgroundBottom/BackgroundBottom';
import RedCodeTopHelmets from '@/app/components/organisms/RedCodeTopHelmets/RedCodeTopHelmets';
import BackgroundLighting from '@/app/components/organisms/BackgroundLighting/BackgroundLighting';
import { useContext } from 'react';
import AnimationContext from '@/app/components/shared/AnimationContext';
import { mohave } from '@/app/theme';
import TopElement from '@/app/components/organisms/TopElement/TopElement';
import { createClassName } from '@/app/components/shared/utils';


const Background = () => {  //fixme horizontal marquee animation(start but)
	const { preloaderVisibility } = useContext(AnimationContext);

	return !preloaderVisibility &&
		<div className={createClassName(s.background, mohave.className)}>
			<BackgroundLighting />

			{/*<div className={s.justToSeeIt}/>*/}

			<TopElement />

			<RedCodeTopHelmets />

			<TopTextLine />

			<RedMovingCode />

			<ExtendingLine variant={ExtendingLineVariant.centered} color='g_separator' />

			<BackgroundBottom />
		</div>;
};

export default Background;
