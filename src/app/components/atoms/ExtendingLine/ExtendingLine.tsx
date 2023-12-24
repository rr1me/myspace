'use client';

import s from './ExtendingLine.module.scss';

import { animated, easings, useSpring } from '@react-spring/web';
import { Colors, colorVars } from '@/app/theme';
import { ExtendingLineVariant, getVariant } from '@/app/components/atoms/ExtendingLine/utils';
import { CSSProperties } from 'styled-components';

const ExtendingLine = ({ sx, variant = ExtendingLineVariant.normal, color = 'c_main_dark', delay }:
	{sx?: CSSProperties, variant?: ExtendingLineVariant, color?: Colors, delay?: number}) => {
	const direction = getVariant(variant);

	const [springs] = useSpring(() => ({
		...direction,
		delay,
		config: {
			duration: 2000,
			easing: easings.easeInOutExpo
		}
	}));

	return (
		<animated.div
			className={s.line}
			style={{
				background: colorVars[color],
				height: 4,
				borderRadius: 2,
				position: variant ? 'relative' : 'static',
				...springs,
				...sx,
			}}
		/>
	);
};

export default ExtendingLine;
