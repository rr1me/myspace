'use client';

import s from './Preloader.module.scss';
import { useContext, useState } from 'react';
import AnimationContext from '@/app/components/shared/AnimationContext';
import PreloaderProtocol from '@/app/components/molecules/PreloaderProtocol/PreloaderProtocol';
import Lamp from '@/app/components/atoms/Lamp/Lamp';
import { animated, easings, useSpring } from '@react-spring/web';
import Button from '@/app/components/atoms/Button/Button';
import { delay } from '@/app/components/shared/utils';

const Preloader = () => {
	const { setPreloaderVisibility } = useContext(AnimationContext);

	const [innerSprings, api] = useSpring(() => ({
		from: {
			y: '0'
		},
		to: {
			y: '110%'
		},
		pause: true
	}));
	const [innerSpringsButton, apiButton] = useSpring(() => ({
		from: {
			y: '-110%'
		},
		to: {
			y: '0'
		},
		pause: true
	}));
	const [springs] = useSpring(() => ({
		from: {
			width: '30%'
		},
		to: {
			width: '100%'
		},
		config: {
			duration: 3000,
			easing: easings.easeInOutQuart
		},
		onRest: () => {
			api.resume();
			apiButton.resume();
		}
	}));
	const [mount, setMount] = useState(true);
	const [preloaderSprings, apiPreloader] = useSpring(() => ({
		from: {
			opacity: 1
		},
		to: {
			opacity: 0
		},
		pause: true,
		onRest: async () => {
			setMount(false);
			await delay(250);
			setPreloaderVisibility(false);
		}
	}));

	const onConnectClick = () => apiPreloader.resume();

	return mount &&
		<animated.section style={preloaderSprings} className={s.preloader}>
			<Lamp nonAnimated color={'rgba(255,0,0,0.09)'} sx={{
				height: 3500,
				width: 3500,
				position: 'fixed',
			}}/>

			<h1 className={s.article}>
				rr1me&apos;s space
			</h1>

			<div className={s.inner}>

				<div className={s.buttonZone}>
					<animated.div style={innerSpringsButton} className={s.animatedButton}>
						<Button onClick={onConnectClick} className={s.button}>CONNECT</Button>
					</animated.div>
				</div>

				<animated.div style={innerSprings} className={s.animatedInner}>
					<div className={s.loadingZone}>
						<div className={s.loader}>
							<animated.div style={springs} className={s.loadingElement}/>
						</div>

						<div className={s.bottom}>
							<PreloaderProtocol/>
						</div>
					</div>
				</animated.div>
			</div>
		</animated.section>;
};

export default Preloader;
