'use client';

import s from './CLIShellInteraction.module.scss';
import ShellRow from '@/app/components/molecules/ShellRow/ShellRow';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { getRandomArrayElement, katakana } from '@/app/components/shared/utils';
import SelfWritingText from '@/app/components/atoms/SelfWritingText/SelfWritingText';
import { useHydrated } from '@/app/components/shared/hooks';

const randText = [
	'hello there',
	'aboba',
	katakana.slice(0, 10).join(''),
	'randomText'
];

const CLIShellInteraction = () => {
	const [writtenCommands, setWrittenCommands] = useState<string[]>([]);

	const onAnimationEnd = () => {
		if (writtenCommands.length < 5)
			setWrittenCommands(x => {
				x.push(getRandomArrayElement(randText));
				return x;
			});
	};

	console.log('render');

	useEffect(() => {
		setWrittenCommands(x => x.concat(getRandomArrayElement(randText)));
	}, []);

	return (
		<div className={s.interaction}>
			<div className={s.cmdZone}>
				{
					writtenCommands.map((x, i) =>
						(
							<SelfWritingText key={i} onAnimationEnd={onAnimationEnd}>
								{x}
							</SelfWritingText>
						))
				}
			</div>

			<div className={s.codeZone}>

			</div>
		</div>
	);
};

export default CLIShellInteraction;
