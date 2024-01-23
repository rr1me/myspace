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

import digitalLine from './digital line.png';
import Marquee from '@/app/components/molecules/Marquee/Marquee';
import LoadingLog from '@/app/components/molecules/LoadingLog/LoadingLog';
import Lamp from '@/app/components/atoms/Lamp/Lamp';

const Background = ({ isMobile }: {isMobile: boolean}) => {
	const preloaderVisibility = useAnimationStore(s => s.preloaderVisibility);

	if (!isMobile)
		return (
			<div className={createClassName(s.background, mohave)}>
				<BackgroundLighting start={!preloaderVisibility} />

				{/*<PngLamp start={!preloaderVisibility} delay={600} duration={3000} cyan moreFalloff sx={{*/}
				{/*	opacity: 0.2,*/}
				{/*	height: 140,*/}
				{/*	width: 3000,*/}
				{/*	objectFit: 'fill',*/}
				{/*	top: 0*/}
				{/*}}/>*/}
				{/*<PngLamp start={!preloaderVisibility} delay={200} duration={3000} moreFalloff sx={{*/}
				{/*	opacity: 0.13,*/}
				{/*	height: 130,*/}
				{/*	width: 3000,*/}
				{/*	objectFit: 'fill',*/}
				{/*	top: 100*/}
				{/*}}/>*/}
				{/*<PngLamp start={!preloaderVisibility} delay={1500} duration={3000} sx={{*/}
				{/*	opacity: 0.1*/}
				{/*}}/>*/}
				{/*<PngLamp start={!preloaderVisibility} delay={2000} duration={3000} cyan sx={{*/}
				{/*	opacity: 0.11,*/}
				{/*	top: 850,*/}
				{/*}}/>*/}

				{!preloaderVisibility &&
			<>
				<TopElement />

				<RedCodeTopHelmets isMobile={isMobile}/>
				{!isMobile && <TopTextLine />}

				<RedMovingCode isMobile={isMobile}/>

				<ExtendingLine variant={ExtendingLineVariant.centered} color='g_separator' />

				<BackgroundBottom isMobile={isMobile}/>

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
					<LoadingLog delay={1000}/>
				</div>
				<div className={s.digitalLineWrapper}>
					<Marquee duration={20} delay={1}>
						<div className={s.digitalLine} />
						<div className={s.digitalLine} />
					</Marquee>
				</div>
				<div className={s.powerElement}/>

				<div className={s.taskManager}>
					<div className={s.managerTab}/>
					<p>
						TRN_TLCAS_BD0095
					</p>
					<div className={s.wrappedLabel}>
						<p>
							TASK_MANAGER_S011s
						</p>
						<div className={s.tmTab} />
						<p className={s.cadp}>
							COMBAT ADAPTIVE DEFENCE PROGRAM
						</p>
					</div>
				</div>
			</div>
		);
};

export default Background;
