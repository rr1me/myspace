'use client';

import s from './ExtendingLine.module.scss';

import { animated, easings, useSpring } from '@react-spring/web';
import { Colors, colorVars } from '@/app/theme';
import { ExtendingLineVariant, getVariant } from '@/app/components/atoms/ExtendingLine/utils';

const ExtendingLine = ({ variant = ExtendingLineVariant.normal, color = 'c_main_dark' }:
	{variant?: ExtendingLineVariant, color?: Colors}) => {
	const direction = getVariant(variant);

	const [springs] = useSpring(() => ({
		...direction,
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
			}}
		/>
	);
};

export default ExtendingLine;
