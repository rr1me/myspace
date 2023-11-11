import s from './ExtendingLine.module.scss';

import { animated, easings, useSpring } from '@react-spring/web';

const ExtendingLine = ({ backward = false }: {backward?: boolean}) => {
	const direction = backward ?
		{
			from: {
				left: '2750px'
			},
			to: {
				left: '0'
			}
		}
		:
		{
			from: {
				width: '0'
			},
			to: {
				width: '100%'
			}
		};
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
				height: 4,
				borderRadius: 2,
				position: backward ? 'relative' : 'static',
				...springs,
			}}
		/>
	);
};

export default ExtendingLine;
