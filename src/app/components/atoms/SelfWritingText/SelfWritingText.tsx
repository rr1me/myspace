'use client';

import s from './SelfWritingText.module.scss';
import { useEffect, useRef } from 'react';
import { delay } from '@/app/components/shared/utils';

const SelfWritingText = ({ children }: {children: string}) => {
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
		})();
	}, []);

	return <p className={s.text} ref={textRef}></p>;
};

export default SelfWritingText;
