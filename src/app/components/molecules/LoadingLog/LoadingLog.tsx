'use client';

import s from './LoadingLog.module.scss';
import { orbitron } from '@/app/theme';
import { createClassName } from '@/app/components/shared/utils';
import SelfWritingText from '@/app/components/atoms/SelfWritingText/SelfWritingText';
import { animated, easings, useChain, useSpring, useSpringRef } from '@react-spring/web';
import { useState } from 'react';

const LoadingLog = ({ delay }: {delay?: number}) => {
	const springsRef = useSpringRef();
	const [springs] = useSpring(() => ({
		ref: springsRef,
		from: {
			opacity: 0
		},
		to: {
			opacity: 1
		},
		config: {
			duration: 1000
		}
	}));
	const [startWriting, setStartWriting] = useState(false);
	const innerSpringsRef = useSpringRef();
	const [innerSprings] = useSpring(() => ({
		ref: innerSpringsRef,
		from: {
			y: '-100%'
		},
		to: {
			y: '0'
		},
		delay,
		config: {
			easing: easings.easeInOutExpo
		},
		onRest: () => {
			setStartWriting(true);
		}
	}));
	useChain([innerSpringsRef, springsRef]);

	const timingClassName = createClassName(s.timing, s.wideNumber);
	return (
		<div className={createClassName(s.element, orbitron)}>
			<animated.div style={innerSprings} className={s.inner}>
				<div className={s.square}>
					<div className={s.bound}>
						<div className={s.innerBound}>
							<div className={s.boundLine} />
						</div>
					</div>
				</div>

				<article className={s.protocol}>
					<SelfWritingText nixWrapped={false} className={s.text} duration={25} immediate={startWriting}>
						success ui loading<br/>
						-CONNECTION ESTABLISHED<br/>
						-ENGAGED PROTOCOL C350Q010<br/>
						-tf65 success<br/>
						no errors
					</SelfWritingText>
				</article>

				<article className={s.timings}>
					<SelfWritingText nixWrapped={false} className={timingClassName} immediate={startWriting}>
						3.25604 0 . 4&nbsp;&nbsp;&nbsp;4
					</SelfWritingText>
					<SelfWritingText nixWrapped={false} className={timingClassName} immediate={startWriting}>
						0.93743 0 . 4&nbsp;&nbsp;4 5 2
					</SelfWritingText>
					<SelfWritingText nixWrapped={false} className={timingClassName} immediate={startWriting}>
						0.93743 0 . 4&nbsp;&nbsp;4 5 2
					</SelfWritingText>
				</article>

				<animated.article style={springs}
					className={createClassName(s.digits, s.timings)}>
					<p className={s.timing}>2</p>
					<p className={s.timing}>4</p>
					<p className={s.timing}>1</p>
				</animated.article>
			</animated.div>
		</div>
	);
};

export default LoadingLog;
