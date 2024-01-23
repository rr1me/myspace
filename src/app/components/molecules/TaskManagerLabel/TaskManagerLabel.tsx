import s from './TaskManagerLabel.module.scss';
import SelfWritingText from '@/app/components/atoms/SelfWritingText/SelfWritingText';
import { useSpring, animated, useSpringRef, useChain, easings } from '@react-spring/web';

const config = {
	easing: easings.easeInOutQuint
};

const ad = 2;
const adMs = ad * 1000;

const TaskManagerLabel = () => {
	const tabSprings = useSpring({
		from: {
			scaleX: 0
		},
		to: {
			scaleX: 1
		},
		delay: adMs,
		config
	});

	const labelSpringsWidthRef = useSpringRef();
	const labelSpringsWidth = useSpring({
		ref: labelSpringsWidthRef,
		from: {
			x: '100%'
		},
		to: {
			x: '0'
		},
		config
	});
	const labelSpringsHeightRef = useSpringRef();
	const labelSpringsHeight = useSpring({
		ref: labelSpringsHeightRef,
		from: {
			height: '1.2px'
		},
		to: {
			height: '25px'
		},
		config
	});
	useChain([labelSpringsWidthRef, labelSpringsHeightRef], [ad + 0.5, ad + 0.9]);


	return (
		<div className={s.taskManager}>
			<animated.div style={tabSprings} className={s.managerTab} />
			<SelfWritingText delay={adMs + 200} nixWrapped={false} className={s.swt}>
				TRN_TLCAS_BD0095
			</SelfWritingText>
			<div className={s.labelGlobal}>
				<animated.div style={{ ...labelSpringsWidth, ...labelSpringsHeight }} className={s.labelWrapper}>
					<div className={s.label}>
						<SelfWritingText delay={adMs + 1000} nixWrapped={false} className={s.swt}>
							TASK_MANAGER_S011S
						</SelfWritingText>
						<div className={s.tmTab} />
						<SelfWritingText delay={adMs + 1000} nixWrapped={false} className={s.cadp}>
							COMBAT ADAPTIVE DEFENCE PROGRAM
						</SelfWritingText>
					</div>
				</animated.div>
			</div>
		</div>
	);
};

export default TaskManagerLabel;
