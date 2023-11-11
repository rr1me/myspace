'use client';
import s from './Background.module.scss';
import BackgroundInner from '@/app/components/BackgroundInner/BackgroundInner';

const Background = () => {

	return (
		<div className={s.background}>
			<BackgroundInner/>
		</div>
	);
};

export default Background;
