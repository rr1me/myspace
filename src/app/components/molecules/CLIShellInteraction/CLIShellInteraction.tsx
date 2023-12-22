'use client';

import s from './CLIShellInteraction.module.scss';
import { useEffect, useState } from 'react';
import { getRandomArrayElement, katakana } from '@/app/components/shared/utils';
import SelfWritingText from '@/app/components/atoms/SelfWritingText/SelfWritingText';
import { nanoid } from 'nanoid';
import { useIsFirstRender } from '@/app/components/shared/hooks';
import Marquee from '@/app/components/molecules/Marquee/Marquee';

const answers = [
	'Hit:1 http://ru.archive.ubuntu.com/ubuntu jammy InRelease\n' +
	'Get:2 http://ru.archive.ubuntu.com/ubuntu jammy-updates InRelease [119 kB]\n' +
	'Hit:3 https://download.docker.com/linux/ubuntu jammy InRelease\n' +
	'Hit:4 http://ru.archive.ubuntu.com/ubuntu jammy-backports InRelease\n' +
	'Get:5 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]\n' +
	'Hit:6 https://apt.postgresql.org/pub/repos/apt jammy-pgdg InRelease\n' +
	'Get:7 https://deb.nodesource.com/node_19.x jammy InRelease [4 563 B]\n' +
	'Hit:8 https://packagecloud.io/AtomEditor/atom/any any InRelease\n' +
	'Fetched 234 kB in 1s (205 kB/s)\n' +
	'Reading package lists... Done\n' +
	'Building dependency tree... Done\n' +
	'Reading state information... Done\n' +
	'5 packages can be upgraded. Run \'apt list --upgradable\' to see them.',
];

const randText = [
	'sudo service nginx restart',
	'sudo apt update',
	'sudo apt upgrade',
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

	const isFirstRender = useIsFirstRender();

	useEffect(() => {
		if (isFirstRender) addText();
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
				<Marquee preWrap reverse duration={5}>
					{answers[0]}
				</Marquee>
			</div>
		</div>
	);
};

export default CLIShellInteraction;
