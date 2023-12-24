'use client';

import s from './CLIShell.module.scss';
import LiningWrapper from '@/app/components/atoms/LiningWrapper/LiningWrapper';
import TabToChange from '@/app/components/atoms/Tab/Tab';
import restyle from '@/app/components/shared/restyle';
import { colorVars } from '@/app/theme';
import CLIShellInteraction from '@/app/components/molecules/CLIShellInteraction/CLIShellInteraction';
import { animated, easings, useSpring } from '@react-spring/web';
import { useState } from 'react';

const Tab = restyle(TabToChange, {
	background: colorVars.g_separator_oneway,
});
const TabVert = restyle(TabToChange, {
	background: colorVars.g_separator_oneway_vertical,
});

const CLIShell = () => {
	const [interactionMount, setInteractionMount] = useState(false);

	const [springs] = useSpring(() => ({
		from: {
			height: '0',
			width: '0',
		},
		to: [
			{
				width: '100%'
			},
			{
				height: '100%'
			}
		],
		delay: 2000,
		config: {
			easing: easings.easeInOutExpo,
			duration: 1000 //todo with or without?
		},
		onRest: () => {
			setInteractionMount(true);
		}
	}));

	return (
		<animated.div style={springs} className={s.shell}>
			<LiningWrapper>
				<Tab sx={{ width: '50%', height: 1 }} />
				<TabVert sx={{ width: 1, height: '100%', rotate: '180deg' }} />
				<TabVert sx={{ width: 1, height: '100%', right: 0 }} />
				<Tab sx={{ width: '50%', height: 1, bottom: 0, right: 0, rotate: '180deg' }} />
			</LiningWrapper>

			{interactionMount &&
				<CLIShellInteraction/>
			}
		</animated.div>
	);
};

export default CLIShell;
