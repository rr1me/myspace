import s from './SkillColumn.module.scss';
import SkillBlock from '@/app/components/molecules/SkillBlock/SkillBlock';
import clsx from 'clsx';
import { animated, easings, useSpring } from '@react-spring/web';
import { useAnimationStore } from '@/app/components/shared/syncStore';

export type SkillData = {
	header: string;
	content: (SkillData | string)[]
}

const config = {
	easing: easings.easeOutExpo,
	duration: 1500
};
const SkillColumn = ({ header, children, onAnimationEnd, pageAnimation }:
	{header: string, children: SkillData[], onAnimationEnd?: () => void, pageAnimation?: boolean}) => {
	let headerSprings, innerSprings, tabSprings;

	if (pageAnimation){
		tabSprings = useSpring({
			from: {
				left: '50%',
				width: '0'
			},
			to: {
				left: '0',
				width: '100%'
			},
			delay: 100,
			config
		});
		headerSprings = useSpring({
			from: {
				y: '100%'
			},
			to: {
				y: '0'
			},
			delay: 100,
			config
		});
		innerSprings = useSpring({
			from: {
				y: '-100%'
			},
			to: {
				y: '0'
			},
			delay: 1000,
			config,
			onRest: onAnimationEnd
		});
	}

	return (
		<section className={s.skill}>
			<div className={s.headerWrapper}>
				<animated.h2 style={headerSprings} className={s.header}>{header}</animated.h2>
			</div>
			<animated.div style={tabSprings} className={s.tab}/>
			<div className={s.innerWrapper}>
				<animated.div style={innerSprings} className={clsx({
					[s.inner]: true,
					[s.misc]: header === 'miscellaneous'
				})}>
					{children.map((x, i) => (
						<SkillBlock key={i} data={x} />
					))}
				</animated.div>
			</div>
		</section>
	);
};

export default SkillColumn;
