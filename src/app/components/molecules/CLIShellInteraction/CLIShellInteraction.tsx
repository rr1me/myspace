'use client';

import s from './CLIShellInteraction.module.scss';
import { useEffect, useRef, useState } from 'react';
import { getRandomArrayIndex, shellRandomText } from '@/app/components/shared/utils';
import SelfWritingText from '@/app/components/atoms/SelfWritingText/SelfWritingText';
import { nanoid } from 'nanoid';
import { useIsFirstRender } from '@/app/components/shared/hooks';
import Marquee from '@/app/components/molecules/Marquee/Marquee';

const getCommandItem = (index: number) => ({ id: nanoid(), str: shellRandomText[index].req });
const getRandTextIndex = () => getRandomArrayIndex(shellRandomText.length);

//fixme problems in onAnimationEnd(?), some texts disappear before it completely pass overflow border
const CLIShellInteraction = ({start = false}: {start: boolean}) => {
	const [writtenCommands, setWrittenCommands] = useState<{id: string, str: string}[]>([]);

	const randomArrayIndexRef = useRef<number>(8);

	const addText = () => {
		requestAnimationFrame(() => {
			setWrittenCommands(x => x.concat(getCommandItem(randomArrayIndexRef.current)));
		});
	};

	const [shellReturn, setShellReturn] = useState<null | string>(null);

	const onAnimationEnd = () => {
		if (!shellReturn) setShellReturn(shellRandomText[randomArrayIndexRef.current].res);
	};

	// const isFirstRender = useIsFirstRender();
	useEffect(() => {
		if (start) addText();
	}, [start]);

	const onMarqueeAnimationEnd = () => {
		setShellReturn(null);

		const index = getRandTextIndex();
		randomArrayIndexRef.current = index;

		if (writtenCommands.length < 5) addText();
		else{
			requestAnimationFrame(() => {
				setWrittenCommands(x => {
					const arr = x.concat(getCommandItem(index));
					arr.shift();
					return arr;
				});
			});
		}
	};

	return (
		<div className={s.interaction}>
			<div className={s.cmdZone}>
				{writtenCommands.map(x =>
					(
						<SelfWritingText
							key={x.id} onAnimationEnd={onAnimationEnd}
							duration={70} className={s.command}>
							{x.str}
						</SelfWritingText>
					))}
			</div>

			<div className={s.codeZone}>
				{!!shellReturn &&
					<Marquee whitespacePreWrap reverse duration={5} once onAnimationEnd={onMarqueeAnimationEnd}>
						{shellReturn}
					</Marquee>
				}
			</div>
		</div>
	);
};

export default CLIShellInteraction;
