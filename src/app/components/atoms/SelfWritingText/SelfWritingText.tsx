'use client';

import s from './SelfWritingText.module.scss';
import { Children, ReactNode, useEffect, useRef, useState } from 'react';
import { delay } from '@/app/components/shared/utils';
import clsx from 'clsx';

const SelfWritingText = ({ children, onAnimationEnd, nixWrapped = true,
	duration = 50, className, delay: delayMs, immediate = true }:
	{children: ReactNode, onAnimationEnd?: () => void, nixWrapped?: boolean,
		duration?: number, className?: string, delay?: number, immediate?: boolean}) => {
	const textRef = useRef<HTMLParagraphElement>(null);
	const [animationEnd, setAnimationEnd] = useState(false);

	useEffect(() => {
		if (!textRef.current || !immediate) return;

		const element = textRef.current;
		if (element.innerText !== '') element.innerText = '';

		(async () => {
			if (delayMs) await delay(delayMs);

			let currentText = '';
			const arr = Children.toArray(children);
			for (const char of arr) {

				if (typeof char !== 'string'){
					if (typeof char === 'object' && (char as {type: string}).type === 'br'){
						currentText += '\n';
					}
					else
						currentText += char;

					element.textContent = currentText;
					await delay(duration);
				}
				else{
					for (const symbol of (char as string)) {
						currentText += symbol;
						element.textContent = currentText;
						await delay(duration);
					}
				}
			}
			if (onAnimationEnd) {
				onAnimationEnd();
				setAnimationEnd(true);
			}
		})();
	}, [immediate]);

	const textClassName = clsx({
		[className!]: !!className
	});

	return nixWrapped ?
		<div className={s.selfWritingText}>
			<span className={s.nixPreCmd}>:~$</span>
			<p className={textClassName} ref={textRef}></p>
			{!animationEnd && <span className={s.nixTab} />}
		</div>
		:
		<p className={textClassName} ref={textRef}></p>;
};

export default SelfWritingText;
