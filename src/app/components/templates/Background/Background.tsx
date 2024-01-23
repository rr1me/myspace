'use client';

import s from './Background.module.scss';
import RedMovingCode from '@/app/components/organisms/RedMovingCode/RedMovingCode';
import ExtendingLine from '@/app/components/atoms/ExtendingLine/ExtendingLine';
import { ExtendingLineVariant } from '@/app/components/atoms/ExtendingLine/utils';
import TopTextLine from '@/app/components/molecules/TopTextLine/TopTextLine';
import BackgroundBottom from '@/app/components/organisms/BackgroundBottom/BackgroundBottom';
import RedCodeTopHelmets from '@/app/components/organisms/RedCodeTopHelmets/RedCodeTopHelmets';
import BackgroundLighting from '@/app/components/organisms/BackgroundLighting/BackgroundLighting';
import { mohave, rajdhani } from '@/app/theme';
import TopElement from '@/app/components/organisms/TopElement/TopElement';
import { createClassName } from '@/app/components/shared/utils';
import { useAnimationStore } from '@/app/components/shared/syncStore';
import BlueCrossArray from '@/app/components/molecules/BlueCrossArray/BlueCrossArray';
import Marquee from '@/app/components/molecules/Marquee/Marquee';
import LoadingLog from '@/app/components/molecules/LoadingLog/LoadingLog';
import TaskManagerLabel from '@/app/components/molecules/TaskManagerLabel/TaskManagerLabel';
import PowerElement from '@/app/components/molecules/PowerElement/PowerElement';

const Background = ({ isMobile }: {isMobile: boolean}) => {
	const preloaderVisibility = useAnimationStore(s => s.preloaderVisibility);

	if (!isMobile)
		return (
			<div className={createClassName(s.background, mohave)}>
				<BackgroundLighting start={!preloaderVisibility} />

				{!preloaderVisibility &&
						<>
							<TopElement />

							<RedCodeTopHelmets/>

							<TopTextLine />

							<RedMovingCode/>

							<ExtendingLine variant={ExtendingLineVariant.centered} color='g_separator' />

							<BackgroundBottom/>

							<BlueCrossArray quantity={30} additionalClassName={s.bottomCrosses}/>
						</>
				}
			</div>
		);

	if (!preloaderVisibility)
		return (
			<div className={createClassName(s.mobBackground, rajdhani)}>
				<div className={s.addLight}/>
				<div className={s.loadingLogWrapper}>
					<LoadingLog delay={1000} topOffset={20}/>
				</div>

				<div className={s.digitalLineWrapper}>
					<Marquee duration={20} delay={1}>
						<div className={s.digitalLine} />
						<div className={s.digitalLine} />
					</Marquee>
				</div>

				<PowerElement/>

				<TaskManagerLabel/>
			</div>
		);
};

export default Background;
