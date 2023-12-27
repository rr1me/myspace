import s from './CryptoDataCheckerLining.module.scss';
import Tab from '@/app/components/atoms/Tab/Tab';
import LineBreaker from '@/app/components/atoms/LineBreaker/LineBreaker';
import { LineBreakerVariant } from '@/app/components/atoms/LineBreaker/utils';
import LiningWrapper from '@/app/components/atoms/LiningWrapper/LiningWrapper';
import { animated, easings, useSpring } from '@react-spring/web';

const cfg = {
	config: {
		easing: easings.easeInOutExpo,
	}
};

const CryptoDataCheckerLining = () => {
	const [breakerSprings, api] = useSpring(() => ({
		from: {
			opacity: '0'
		},
		to: {
			opacity: '1'
		},
		pause: true,
		...cfg
	}));

	const [springs] = useSpring(() => ({
		from: {
			width: '0',
			height: '0.8%'
		},
		to: [
			{
				width: '100%',
			},
			{
				height: '100%'
			}
		],
		delay: 1700,
		...cfg,
		onRest: () => {
			api.resume();
		}
	}));

	return (
		<LiningWrapper>
			<animated.div style={{
				overflow: 'hidden',
				position: 'absolute',
				...springs
			}}>
				<Tab sx={{ width: 282, height: 1 }} />
				<Tab sx={{ width: 308, height: 1, left: 292 }} />

				<Tab sx={{ width: 1, height: '100%' }} />
				<Tab sx={{ width: 1, height: '100%', left: 60 }} />
				<Tab sx={{ width: 1, height: '100%', left: 310 }} />
			</animated.div>

			<animated.div style={{
				width: '100%',
				height: '100%',
				position: 'absolute',
				...breakerSprings
			}}>
				<LineBreaker sx={{ top: -4 }} />
				<LineBreaker mirrored vertical sx={{ left: -4, top: 0 }} />
				<LineBreaker vertical sx={{ left: 65 }} />

				<LineBreaker mirrored vertical sx={{ left: -4, top: 60 }}
										 variant={LineBreakerVariant.startToEnd} />

				<LineBreaker mirrored vertical sx={{ left: 56, top: 20 }}
										 variant={LineBreakerVariant.startToEnd} />

				<LineBreaker sx={{ left: 233, top: -4 }}
										 variant={LineBreakerVariant.startToEnd} />

				<div className={s.square} />
			</animated.div>
		</LiningWrapper>
	);
};

export default CryptoDataCheckerLining;
