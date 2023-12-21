'use client';

import s from './CLIShellInteraction.module.scss';
import { useEffect, useState } from 'react';
import { getRandomArrayElement, katakana } from '@/app/components/shared/utils';
import SelfWritingText from '@/app/components/atoms/SelfWritingText/SelfWritingText';
import { nanoid } from 'nanoid';

const randText = [
	'sudo service nginx restart',
	'sudo rm -r /etc',
	'u’re gonna die',
	katakana.slice(0, 17).join(''),
	// 'echo "$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 42 ; echo \'\')"'
	'1B4ﾝD<KJHﾈ5ﾐ9ｱ4    ﾁ9 1B4ﾝD<KJHﾈ5ﾐ9ｱ4    ﾁ91B4ﾝD<'
];

const CLIShellInteraction = () => {
	const [writtenCommands, setWrittenCommands] = useState<{id: string, str: string}[]>([]);
	const addText = () => setWrittenCommands(x => x.concat({ id: nanoid(), str: getRandomArrayElement(randText) }));

	const onAnimationEnd = () => {
		if (writtenCommands.length < 5) addText();
		else{
			setWrittenCommands(x => {
				const arr = x.concat({ id: nanoid(), str: getRandomArrayElement(randText) });
				arr.shift();
				return arr;
			});
		}
	};

	useEffect(() => {
		addText();
	}, []);

	return (
		<div className={s.interaction}>
			<div className={s.cmdZone}>
				{writtenCommands.map(x =>
					(
						<SelfWritingText key={x.id} onAnimationEnd={onAnimationEnd} duration={70}>
							{x.str}
						</SelfWritingText>
					))}
			</div>

			<div className={s.codeZone}>

			</div>
		</div>
	);
};

export default CLIShellInteraction;
