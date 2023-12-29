'use client';

import s from './Preloader.module.scss';
import { useContext } from 'react';
import AnimationContext from '@/app/components/shared/AnimationContext';
import PreloaderProtocol from '@/app/components/molecules/PreloaderProtocol/PreloaderProtocol';
import Lamp from '@/app/components/atoms/Lamp/Lamp';
import { useSpring, animated, easings } from '@react-spring/web';

const Preloader = () => {
	const { setPreloaderVisibility } = useContext(AnimationContext);

	const [springs] = useSpring(() => ({
		from: {
			width: '30%'
		},
		to: {
			width: '100%'
		},
		config: {
			duration: 2000,
			easing: easings.easeInOutQuart
		}
	}));

	return (
		<section className={s.preloader}>
			<Lamp nonAnimated color={'rgba(255,0,0,0.09)'} sx={{
				height: 3500,
				width: 3500,
				position: 'fixed',
			}}/>

			<button onClick={() => {
				setPreloaderVisibility(false);
			}}>ale</button>

			<h1 className={s.article}>
				rr1me&apos;s space
			</h1>

			<div className={s.inner}>
				<div className={s.loader}>
					<animated.div style={springs} className={s.loadingElement}/>
				</div>

				<div className={s.bottom}>
					<PreloaderProtocol/>
				</div>
			</div>
		</section>
	);
};

export default Preloader;
