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


const Background = () => {
	const preloaderVisibility = !useAnimationStore(s => s.preloaderVisibility);

	return (
		<div className={createClassName(s.background, mohave.className)}>
			<BackgroundLighting start={!preloaderVisibility} />

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
