'use client';

import s from './Preloader.module.scss';
import { useContext } from 'react';
import AnimationContext from '@/app/components/shared/AnimationContext';
import PreloaderProtocol from '@/app/components/molecules/PreloaderProtocol/PreloaderProtocol';

const Preloader = () => {
	const { setPreloaderVisibility } = useContext(AnimationContext);

	return (
		<section className={s.preloader}>
			<button onClick={() => {
				setPreloaderVisibility(false);
			}}>ale</button>

			<h1 className={s.article}>
				rr1me&apos;s space
			</h1>

			<div className={s.inner}>
				<div className={s.loader}>
					<div className={s.loadingElement}/>
				</div>

				<div className={s.bottom}>
					<PreloaderProtocol/>
					<span>sign</span>
				</div>
			</div>
		</section>
	);
};

export default Preloader;
