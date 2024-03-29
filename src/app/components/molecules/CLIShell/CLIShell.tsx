'use client';

import s from './CLIShell.module.scss';
import LiningWrapper from '@/app/components/atoms/LiningWrapper/LiningWrapper';
import TabToChange from '@/app/components/atoms/Tab/Tab';
import restyle from '@/app/components/shared/restyle';
import { colorVars } from '@/app/theme';
import CLIShellInteraction from '@/app/components/molecules/CLIShellInteraction/CLIShellInteraction';
import { useEffect, useRef, useState } from 'react';
import { createClassName } from '@/app/components/shared/utils';

const Tab = restyle(TabToChange, {
	background: colorVars.g_separator_oneway,
});
const TabVert = restyle(TabToChange, {
	background: colorVars.g_separator_oneway_vertical,
});

const CLIShell = () => {
	const [interactionMount, setInteractionMount] = useState(false);

	const elemRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const elem = elemRef.current;
		if (!elem) return;

		elem.style.animationPlayState = 'running';
		setTimeout(() => {
			setInteractionMount(true);
		}, 4500);
	}, []);

	return (
		<div ref={elemRef} className={createClassName(s.shell, s.animation)}>
			<LiningWrapper>
				<Tab sx={{ width: '50%', height: 1 }} />
				<TabVert sx={{ width: 1, height: '100%', rotate: '180deg' }} />
				<TabVert sx={{ width: 1, height: '100%', right: 0 }} />
				<Tab sx={{ width: '50%', height: 1, bottom: 0, right: 0, rotate: '180deg' }} />
			</LiningWrapper>

			<CLIShellInteraction start={interactionMount}/>
		</div>
	);
};

export default CLIShell;
