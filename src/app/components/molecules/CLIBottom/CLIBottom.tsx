import s from './CLIBottom.module.scss';
import { animated, easings, useSpring } from '@react-spring/web';
import CLITabArray from '@/app/components/molecules/CLITabArray/CLITabArray';
import ExtendingLine from '@/app/components/atoms/ExtendingLine/ExtendingLine';
import { ExtendingLineVariant } from '@/app/components/atoms/ExtendingLine/utils';
import { useState } from 'react';

const CLIBottom = () => {
	const [shadow, setShadow] = useState(false);

	const [springs] = useSpring(() => ({
		from: {
			y: '-105%'
		},
		to: {
			y: '0',
		},
		delay: 3400,
		config: {
			easing: easings.easeInOutExpo
		},
		onRest: () => {
			setShadow(true);
		}
	}));

	return (

		<>
			{/*<div className={s.nonEndingSeparator}/>*/}
			<ExtendingLine
				variant={ExtendingLineVariant.centered}
				color={'g_separator_nonEnding'}
				sx={{ height: 2, marginTop: 10 }}
				delay={2000}
			/>

			<div className={shadow ? undefined : s.bottomWrapper}>
				<animated.div style={springs} className={s.bottom}>
					<CLITabArray big shadowOpacity={shadow ? 1 : 0}/>
					<div className={s.clipPathWrapper}>
						<div className={s.clipPathLine}/>
						<div className={s.skewWrapper}>
							{Array(5).fill(0).map((_, i) => (
								<div className={s.skewed} key={i}/>
							))}
						</div>
					</div>
				</animated.div>
			</div>
		</>
	);
};

export default CLIBottom;
