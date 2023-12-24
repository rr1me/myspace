import s from './CLIShellBack.module.scss';
import CircleSymbolPair from '@/app/components/atoms/CircleSymbolPair/CircleSymbolPair';
import { katakana } from '@/app/components/shared/utils';
import { animated, easings, useSpring } from '@react-spring/web';

const CLIShellBack = () => {
	const [wrapperSprings] = useSpring(() => ({
		from: {
			left: '-100%'
		},
		to: {
			left: '0'
		},
		delay: 3000,
		config: {
			easing: easings.easeInOutExpo
		}
	}));

	const [shellTabSprings] = useSpring(() => ({
		from: {
			height: '0'
		},
		to: {
			height: '100%'
		},
		delay: 3500,
		config: {
			easing: easings.easeInOutExpo
		}
	}));

	return (
		<div className={s.wrapper}>
			<animated.div style={wrapperSprings} className={s.backShell}>
				<div className={s.quadroSymbols}>
					<CircleSymbolPair>
						{katakana[2]}
					</CircleSymbolPair>
					<CircleSymbolPair red>
						{katakana[14]}
					</CircleSymbolPair>
					<CircleSymbolPair>
						{'<'}
					</CircleSymbolPair>
					<CircleSymbolPair>
						¿
					</CircleSymbolPair>
				</div>
				<div className={s.shellTabWrapper}>
					<animated.div style={shellTabSprings} className={s.shellTab}/>
				</div>
			</animated.div>
		</div>
	);
};

export default CLIShellBack;
