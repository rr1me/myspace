'use client';

import s from './SelfWritingText.module.scss';
import { useEffect, useRef, useState } from 'react';
import { delay } from '@/app/components/shared/utils';

const SelfWritingText = ({ children, onAnimationEnd, nixWrapped = true, duration = 50 }:
	{children: string, onAnimationEnd?: () => void, nixWrapped?: boolean, duration?: number}) => {
	const textRef = useRef<HTMLParagraphElement>(null);
	const [animationEnd, setAnimationEnd] = useState(false);

	useEffect(() => {
		if (!textRef.current) return;

		const element = textRef.current;
		if (element.innerText !== '') element.innerText = '';

		(async () => {
			let currentText = '';
			for (const char of children) {
				currentText += char;
				element.innerText = currentText;
				await delay(duration);
			}
			if (onAnimationEnd) {
				onAnimationEnd();
				setAnimationEnd(true);
			}
		})();
	}, []);

	return nixWrapped ?
		<div className={s.selfWritingText}>
			<span className={s.nixPreCmd}>:~$</span>
			<p className={s.text} ref={textRef}></p>
			{!animationEnd && <span className={s.nixTab} />}
		</div>
		:
		<p className={s.text} ref={textRef}></p>;
};

export default SelfWritingText;
