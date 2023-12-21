'use client';

import s from './SelfWritingText.module.scss';
import { useEffect, useRef } from 'react';
import { delay } from '@/app/components/shared/utils';

const SelfWritingText = ({ children, onAnimationEnd, nixWrapped = true }:
	{children: string, onAnimationEnd?: () => void, nixWrapped?: boolean}) => {
	const textRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (!textRef.current) return;

		const element = textRef.current;
		if (element.innerText !== '') element.innerText = '';

		(async () => {
			let currentText = '';
			for (const char of children) {
				currentText += char;
				element.innerText = currentText;
				await delay(50);
			}
			if (onAnimationEnd) onAnimationEnd();
		})();
	}, []);

	return nixWrapped ?
		<div>
			<span className={s.nixPreCmd}>:~$</span>
			<p className={s.text} ref={textRef}></p>
			<span className={s.nixTab} />
		</div>
		:
		<p className={s.text} ref={textRef}></p>;
};

export default SelfWritingText;
