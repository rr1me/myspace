import s from './ExtendingLine.module.scss';

import { animated, easings, useSpring } from '@react-spring/web';
import { Colors, colorVars } from '@/app/theme';

export enum ExtendingLineVariant {
	normal,
	backward,
	centered
}

const ExtendingLine = ({ variant = ExtendingLineVariant.normal, color = 'c_main_dark' }:
												 {variant?: ExtendingLineVariant, color?: Colors}) => {
	const direction = (() => {
		switch (variant){
		case ExtendingLineVariant.normal:
			return {
				from: {
					width: '0'
				},
				to: {
					width: '100%'
				}
			};
		case ExtendingLineVariant.backward:
			return {
				from: {
					left: '100%'
				},
				to: {
					left: '0'
				}
			};
		case ExtendingLineVariant.centered:
			return {
				from: {
					left: '50%',
					width: '0'
				},
				to: {
					left: '0',
					width: '100%'
				}
			};

		}
	})();

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
